

function buttonpress(press) {
  const left = this.leftKeyPressed;
  const right = this.rightKeyPressed;
  const up = this.upKeyPressed;

  if (press==1) {
    this.leftKeyPressed = true;
  } else if (press==2) {
    this.rightKeyPressed = true;
  } else {
    this.leftKeyPressed = false;
    this.rightKeyPressed = false;
  }

  if (press==3) {
    this.upKeyPressed = true;
  } else {
    this.upKeyPressed = false;
  }

  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  this.socket.emit('playerInput', { left: this.leftKeyPressed , right: this.rightKeyPressed, up: true });


  if (left !== this.leftKeyPressed || right !== this.rightKeyPressed || up !== this.upKeyPressed) {
    this.socket.emit('playerInput', { left: this.leftKeyPressed , right: this.rightKeyPressed, up: this.upKeyPressed });
  }
}