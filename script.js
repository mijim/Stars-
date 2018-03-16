
var stars = [];
var numStars = 600;
var widthCanvas = 400;
var heightCanvas = 400;

var velocity = 30;
var starVelocity = 5;
var starSize;

function setup() {
   for(let i=0; i<numStars;i++){
       stars.push(new Star());
   }
   setInterval(update, velocity);
   createCanvas(widthCanvas, heightCanvas);
}

function draw() {
    starVelocity = map(mouseX,0,widthCanvas,0,20);
    starSize = map(mouseY,0,heightCanvas,0,20)
    background(0);
    translate(width/2, height/2);
    for(let i=0;i<numStars;i++){
        let s = stars[i];
        ellipse(map(s.X / s.Z, 0, 1, 0, widthCanvas/2),map(s.Y / s.Z, 0, 1, 0, heightCanvas/2),map(s.Z, 0, widthCanvas/2, starSize, 0),map(s.Z, 0, widthCanvas/2, starSize, 0));
    }
}

function update(){
    for(let i=0;i<numStars;i++){
        let s = stars[i];
        s.Z -= starVelocity;
        if(s.Z<1){
            stars[i] = new Star();
        }

    }
}

class Star{
    constructor(){
        this.X = random(-widthCanvas/2, widthCanvas/2);
        this.Y = random(-heightCanvas/2, heightCanvas/2);
        this.Z = random(widthCanvas/2);
    }
}