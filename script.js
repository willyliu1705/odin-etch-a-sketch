let containerDiv = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
  let rows = document.createElement("div");
  rows.classList.add("rows");
  containerDiv.appendChild(rows);
}

let rowDivs = document.querySelectorAll(".rows");
rowDivs.forEach((rowDiv) => {
  for (let i = 0; i < 4; i++) {
    let columns = document.createElement("div");
    columns.classList.add("columns");
    rowDiv.appendChild(columns);
  }
})




