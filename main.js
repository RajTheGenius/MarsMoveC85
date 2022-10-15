canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

arrayOfBg = ['mars.jpg', 'mars1.jpg', 'mars2.jpg', 'mars3.jpg'];
randomNumber = Math.floor(Math.random()*4);

backgroundImg = arrayOfBg[randomNumber];
roverImg = "rover.png";

roverX = 10;
rovery = 10;

roverWidth = 100;
roverHeight = 90;

function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = backgroundload;
    backgroundImgTag.src = backgroundImg;

    roverImgTag = new Image();
    roverImgTag.onload = roverload;
    roverImgTag.src = roverImg;
}

function backgroundload(){
    ctx.drawImage(backgroundImgTag, 0,0, canvas.width, canvas.height);
}

function roverload(){
    ctx.drawImage(roverImgTag, roverX, rovery, roverWidth, roverHeight);
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    if (keyPressed == 37) {
        left()
        console.log("left");
    }
    if (keyPressed == 38) {
        up()
        console.log("Up");
    }
    if (keyPressed == 39) {
        right()
        console.log("right");
    }
    if (keyPressed == 40) {
        down()
        console.log("down");
    }
}

function up() {
    if (rovery > 0) {
        rovery = rovery - 10;
        console.log("When up arrow is pressed x = " + roverX + " Y = " + rovery)
        backgroundload();
        roverload();
    }
    
}
function down() {
    if (rovery <= 500) {
        rovery = rovery + 10;
        console.log("When down arrow is pressed x = " + roverX + " Y = " + rovery)
        backgroundload();
        roverload();
    }
    
}
function left() {
    if (roverX > 0) {
        roverX = roverX - 10;
        console.log("When left arrow is pressed x = " + roverX + " Y = " + rovery)
        backgroundload();
        roverload();
    }
    
}
function right() {
    if (roverX <= 700) {
        roverX = roverX + 10;
        console.log("When  arrow is pressed x = " + roverX + " Y = " + rovery)
        backgroundload();
        roverload();
    }
    
}

