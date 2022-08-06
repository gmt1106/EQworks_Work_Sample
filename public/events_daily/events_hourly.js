let jsonList;

tableData();

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

async function getData() {
  const response = await fetch("/events/daily");

  if (response.ok) {
    jsonList = await response.json();
  } else {
    const text = await response.text();
    document.getElementById("error_message").textContent = text;
  }
}
