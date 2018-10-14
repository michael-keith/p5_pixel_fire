cell_width = 25;
cells = [];

function setup() {
  height = window.innerHeight;
  width = window.innerWidth;

  grid_width = int(width / cell_width) + 2;
  grid_height = int(height / cell_width) + 6;

  createCanvas(width, height);
  frameRate(20);

  //Create the cell array
  for(let y = 0; y<grid_height; y++) {
    for(let x = 0; x<grid_width; x++) {
      cells.push(new Cell(x,y,0));
    }
  }


}

function draw() {

  //Draw the cells
  cells.forEach(
    function(cell, i){
      cell.draw();
      if(cell.y == (grid_height - 2)) {cell.colour = Math.random()*255; if(cell.colour < 150){cell.colour = 0;}}

      if(cell.y < (grid_height - 2)) {
        cell.colour = (cells[i + grid_width].colour //Directly below
                     + cells[(i + grid_width) - 1].colour //Below left
                     + cells[(i + grid_width) + 1].colour //Below right
                     + cells[(i + (grid_width*2))].colour) // 2 rows below
                     / 4.05
      }

    }
  )

}

class Cell {

  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }

  draw() {
    if(this.y < grid_height -5) {
      fill(this.colour, this.colour, this.colour);
      stroke(this.colour, this.colour, this.colour);
      rect(this.x*cell_width, this.y*cell_width, cell_width, cell_width);
    }
  }

}
