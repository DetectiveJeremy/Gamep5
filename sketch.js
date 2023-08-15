
let state = 1;
let boat;
let score = 0;
let timer = 60;
let plastic;
let myXPos = 0;
let myYPos = 0;
let randomX;
let randomY;
let myspeed = 5

function updateTimer(){
    if (timer > 0) {
        console.log(timer);
        const interval = setInterval(timer--, 1000);
        return timer;
    }
}
randomX = Math.floor(Math.random() * 1630); 
randomY = Math.floor(Math.random() * 970);
function preload() {
    plastic = loadImage('assets/plastic.png')
    backgroundImage = loadImage('assets/Water.jpg');
    player = loadImage('assets/player.jpg');
  globe = loadImage('assets/globe.png');
explosion = loadImage('assets/explosion.jpg');
   
  }
  

function setup() {
    createCanvas(1850, 970);
  }
  function draw() {
    //Start of state 1/ Play screen
    if (state ==1) {
        background(0,200,230);  
        //Header Text
        text("Recycle me!", 850 , 100)
        fill(0,200,200)
        rect(800, 400, 250, 100);
      fill(0,0,200)
        textSize(25)
        text("Play", 900, 460 )
        

    } else if (state == 2) {
        createCanvas(1850, 970);
        background(backgroundImage);
       
       updateTimer()
        
        fill("green");
        rect(0, 0, 210, 970);
        rect(1640, 0, 210, 970);
        
        
        let newMyXPos = myXPos;
        let newMyYPos = myYPos;
        if (keyIsDown(LEFT_ARROW)) {
          newMyXPos -= myspeed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
          newMyXPos += myspeed;
        }
        if (keyIsDown(DOWN_ARROW)) {
          newMyYPos += myspeed;
        }
        if (keyIsDown(UP_ARROW)) {
          newMyYPos -= myspeed;
        }
        
        
        let playerLeft = newMyXPos;
        let playerRight = newMyXPos + 150; 
        let playerTop = newMyYPos;
        let playerBottom = newMyYPos + 150; 
       
        if (playerLeft < 210) {
          newMyXPos = 210;
        }
      
        if (playerRight > 1640) {
          newMyXPos = 1640 - 150;
        }
        if (playerTop < 0) {
            newMyYPos = 0;
          }
          if (playerBottom > height) {
            newMyYPos = height - 150;
          }
       
        myXPos = newMyXPos;
        myYPos = newMyYPos;
        
        image(player, myXPos, myYPos, 150, 150);

let xSpawn = randomX;
let ySpawn = randomY;
let plasticTop, plasticBottom, plasticRight,plasticLeft;

  image(plastic, xSpawn, ySpawn, 150, 150)
  plasticTop = randomY;
  plasticBottom = randomY + 150;
  plasticLeft = randomX;
  plasticRight = randomX + 150;

  if (xSpawn < 210){
    randomX = Math.floor(Math.random() * 1630);
    randomY = Math.floor(Math.random() * 700);
  }

  if (
    playerLeft < plasticRight &&
    playerRight > plasticLeft &&
    playerTop < plasticBottom &&
    playerBottom > plasticTop
  ) {
    score++;
    randomX = Math.floor(Math.random() * 1300);
    randomY = Math.floor(Math.random() * 700);
  }
 
  fill(255);
    textSize(40);
    text("Score: " + score, 20, 30);
    text("Timer: " + timer, 200, 30)
   
      }
      if (score == 1){
        state = 3
        clear()
        background("red")
        background(globe)
        image(explosion, 600, 300, 700, 700)
        fill(0,255,150)
        text("You couldn't recycle enough plastic so the carbon emissions got too high", 500, 100)
    }
    }
  function mouseClicked() {
if (state == 1) {
    if (mouseX >= 800 && mouseX <= 1050 && mouseY >= 400 && mouseY <= 500  ) {
        state = 2

    }
}
  }
