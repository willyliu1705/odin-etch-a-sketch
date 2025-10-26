let containerDiv = document.querySelector(".container");

const CONTAINER_WIDTH = containerDiv.offsetWidth;
const CONTAINER_HEIGHT = containerDiv.offsetHeight;

function generateDivs(dimensions) {

  const square_width = Math.floor(CONTAINER_WIDTH / dimensions);
  const square_height = Math.floor(CONTAINER_HEIGHT / dimensions);

  for (let i = 1; i <= dimensions; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");
    containerDiv.appendChild(rows);
  }

  let rowDivs = document.querySelectorAll(".rows");
  rowDivs.forEach((rowDiv) => {
    for (let i = 1; i <= dimensions; i++) {
      let columns = document.createElement("div");
      columns.classList.add("columns");
      columns.style.width = `${square_width}px`;
      columns.style.height = `${square_height}px`;
      rowDiv.appendChild(columns);
    }
  })

  let columnDivs = document.querySelectorAll(".columns");
  columnDivs.forEach((columnDiv) => {
    columnDiv.addEventListener("mouseover", () => {
      let rgbValues = getRandomRGB();
      columnDiv.style.backgroundColor = `rgb(${rgbValues})`;
    })

    columnDiv.addEventListener("mouseout", () => {
      columnDiv.style.backgroundColor = "";
    })
  })
}

function getRandomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `${red} ${green} ${blue}`;
}

function clearDivs() {
  let rowDivs = document.querySelectorAll(".rows");
  rowDivs.forEach((rowDiv) => {
    rowDiv.remove();
  })
}

let dimensionsButton = document.querySelector("#dimensions-button");
dimensionsButton.addEventListener("click", (event) => {
  let userDimensions;
  do {
    userDimensions = prompt("How many squares do you want each side to have? (max: 100)");
  } while (userDimensions <= 0 || userDimensions > 100);
  clearDivs();
  generateDivs(userDimensions);
})

generateDivs(4);


