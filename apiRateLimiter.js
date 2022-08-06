const Redis = require("ioredis");
const moment = require("moment");

// setup for API rate-limiting
const window_time_sec = 3;
const WINDOW_TIME = 1000 * window_time_sec;
const MAX_NUM_REQUEST_IN_WINDOW = 20;

// setup redis
const redis = new Redis();

const apiRateLimiter = async (req, res, next) => {
  try {
    if (!redis) {
      throw new Error("Redis is not connected");
    }

    const userReqCount = await redis.get(req.ip);
    const ttl = await redis.ttl(req.ip);

    // If this user has no history of request
    if (!userReqCount || ttl < 1) {
      await redis.set(req.ip, 1, "PX", WINDOW_TIME);
      next();
    } else {
      const userReqCountNum = parseInt(userReqCount);

      if (userReqCountNum >= MAX_NUM_REQUEST_IN_WINDOW) {
        res.status(429).send(
            `You have exceeded the ${MAX_NUM_REQUEST_IN_WINDOW} requests in ${window_time_sec} seconds limit!`
          );
      } else { // if the number of requests made is not exceeded
        await redis.set(req.ip, userReqCountNum + 1, "PX", ttl * 1000);
        next();
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = apiRateLimiter;
