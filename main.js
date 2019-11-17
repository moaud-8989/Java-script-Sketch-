
const container = document.querySelector('.container');
const button = document.querySelector('.button');

let size = 16;
let gridSize = 20;

document.addEventListener("DOMContentLoaded", function() {
  makeGrid();
  button.addEventListener("click", function() {
   
    size = prompt("What size of grid ?");
    if (size > 64) {size = 64};
    gridSize = 320/size;
    makeNew();
  });
});



function makeGrid() {
  for (i=1;i<=size*size;i++) {
    let gridDiv = document.createElement('div')
    gridDiv.classList.add("grid");
    container.appendChild(gridDiv);
    container.style.width = (size*gridSize + "px");
  gridDiv.style.width = ( gridSize + "px" );
  gridDiv.style.height = ( gridSize + "px" );
    
    gridDiv.addEventListener("mouseenter",function(){
      this.style.backgroundColor = ranColor ();
    })    
  }; 
};

function makeNew() {
  container.innerHTML = '';
  makeGrid();
};


function ranColor () {
    let temp = "#" + Math.random().toString(16).substr(-6);
    return temp;
}