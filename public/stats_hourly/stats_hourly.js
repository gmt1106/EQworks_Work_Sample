let jsonList;

chartData();

async function tableData() {
  await getData();

  const table_header = document.getElementById("table_header");
  const columnName = Object.keys(jsonList[0]);

  let header = "<tr>";
  columnName.forEach((element) => {
    header += `<th>${element}</th>`;
  });
  header += "</tr>";
  table_header.innerHTML += header;

  const table_body = document.getElementById("table_body");

  jsonList.forEach((json) => {
    let body = "<tr>";
    values = Object.values(json);
    values.forEach((element) => {
      body += `<td>${element}</td>`;
    });
    body += "</tr>";
    table_body.innerHTML += body;
  });
}

async function chartData() {
  await tableData();

  const dataHourlyMap = new Map();

  jsonList.forEach((obj) => {
    if (typeof dataHourlyMap.get(obj.hour) !== "undefined") {
      dataHourlyMap.get(obj.hour).impressions += obj.impressions;
      dataHourlyMap.get(obj.hour).clicks += obj.clicks;
      dataHourlyMap.get(obj.hour).count += 1;
    } else {
      dataHourlyMap.set(obj.hour, {
        impressions: obj.impressions,
        clicks: obj.clicks,
        revenue: obj.revenue,
        count: 1,
      });
    }
  });

  let labels = [];
  let clicks = [];
  let impressions = [];
  let revenue = [];

  dataHourlyMap.forEach((value, key) => {
    labels.push(key);
    clicks.push(value.clicks / value.count);
    impressions.push(value.impressions / value.count);
    revenue.push(value.revenue / value.count);
  });

  const ctx1 = document.getElementById("chart1").getContext("2d");
  const chart1 = new Chart(ctx1, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "clicks",
          data: clicks,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });

  const ctx2 = document.getElementById("chart2").getContext("2d");
  const chart2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "impressions",
          data: impressions,
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });

  const ctx3 = document.getElementById("chart3").getContext("2d");
  const chart3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "revenue",
          data: revenue,
          backgroundColor: ["rgba(255, 206, 86, 0.2)"],
          borderColor: ["rgba(255, 206, 86, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });
}

async function getData() {
  const response = await fetch("/stats/hourly");

  if (response.ok) {
    jsonList = await response.json();
  } else {
    document.getElementById("welcome_message").textContent = text;
  }
}
