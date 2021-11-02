
import Game from "./game";
import TemperedGlass from "./tempered_glass";
import RegularGlass from "./regular_glass";



class GameView {
  constructor(game, ctx) {
    this.grid = this.makeGrid();
    this.game = game;
    this.ctx = ctx;
    // this.bridge = bridge;
    // this.$canvas = $("#canvas");
    // this.$canvasOffset = $canvas.offset();
    // this.offsetX = canvasOffset.left;
    // this.offsetY = canvasOffset.top;
    // this.scrollX = this.$canvas.scrollLeft();
    // this.scrollY = this.$canvas.scrollTop();
    this.backgroundReady = false;
   
    this.isDown = false;



    // this.ctx.addEventListener("mousedown", this.handleMouseDown);
    // this.ctx.addEventListener("mouseup", this.handleMouseUp);
    // this.ctx.addEventListener("mouseout", this.handleMouseOut);
  }

  makeGrid() {
    const random = ["regular", "tempered"];
    let grid = [];
    for (let i = 1; i < 11; i++) {
      if (random[Math.floor(Math.random() * 2)] === "regular") {
        let tGlass = new TemperedGlass(i, 1);
        let rGlass = new RegularGlass(i, 0);
        grid.push([rGlass, tGlass]);
      }
      else {
        let tGlass = new TemperedGlass(i, 0);
        let rGlass = new RegularGlass(i, 1);
        grid.push([tGlass, rGlass]);
      }
    }
    return grid;
  }

  draw() {
    var img = new Image();
  
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, 450, 875);
    };
    img.src = "./dist/assets/images/background.png";

    

  
    // this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // for (let i = 0; i < rowCount; i++) {
    //   let row = [];
    //   for (let j = 0; j < colCount; j++) {
    //     this.ctx.rect(i * colWidth, j * rowHeight, colWidth, rowHeight);
    //     this.ctx.stroke();
    //   }
    // }
  }

  
  static ClassMethod() {
      // ...logic not specific to an instance
  }
  
  handleMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();

    startX = pharseInt(e.clietnX - offsetX);
    startY = pharseInt(e.clientY - offsetY);

    drawRect();

    this.isDown = true;
  }

  handleMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();

    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetX);

    this.isDown = false;


  }

  handleMouseOut(e) {
    e.preventDefault();
    e.stopPropagation();

    this.isDown = false;
  }

  checkForAvatar() {
    var startCol = parseInt(startX / colWidth);
    var startRow = parseInt(startY / rowHeight);
    var lastCol = parseInt(mouseX / colWidth);
    var lastRow = parseInt(mouseY / rowHeight);

    var length = Math.max(Math.abs(startCol - lastCol) + 1, Math.abs(startRow - lastRow) + 1);
    var dx = 0;
    var dy = 0;
    var x = startCol;
    var y = startRow;
    if (lastCol > startCol)
      dx = 1;
    if (lastCol < startCol)
      dx = -1;
    if (lastRow > startRow)
      dy = -1;
    if (lastRow < startRow)
      dy = -1;

    while (length > 0) {
      // grid[y * colCount + x] // add avatar to specific spot
      this.ctx.save();
      this.ctx.fillStyle = "red";
      this.ctx.globalAlpha = 0.25;
      this.ctx1.globalCompositeOperation = "destination-over";
      this.ctx.fillRect(x * colWidth + 2, y * rowHeight + 2, colWidth -4, rowHeight - 4);
      this.ctx.restore();
    }
  }

}

// for (var i = 0; i <= 640; i += 40) {
//   // context.beginPath();
//   context.moveTo(0, i);
//   context.lineTo(640, i);
//   context.closePath();
//   context.stroke();

//   context.beginPath();
//   context.moveTo(i, 0);
//   context.lineTo(i, 640);
//   context.closePath();
//   context.stroke();
// }

export default GameView;