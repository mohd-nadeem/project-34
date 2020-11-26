//Create variables here
var dog, happyDog;
var foodS, foodStock;
var database;

function preload() {
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(150, 150, 200, 200);

  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}

function draw() {
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  //add styles here

  textSize(4);
  text("Note: Press UP_ARROW Key To Feed Drago Milk")
  fill("white");
}

function readStock(data) {
  foodS = data.val();

}
function writeStock(x) {
  if (x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }
  database.ref('/').update({
    Food: x
  })
}



