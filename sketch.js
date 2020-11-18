//Create variables here
var database;
var dog,dogimg,happydogimg;
var food,foodS,foodstock;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();

  food = 20;

  foodstock = database.ref('food');
  foodstock.on("value",readStock);

  dog = createSprite(250,250);
  dog.addImage(dogimg);
  dog.scale = 0.15
  
}


function draw() {  

  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happydogimg);
  }

  drawSprites();
  
  

  //add styles here
  fill("red");
  textSize(30);
  text("Food : " + food,150,150);

}

function readStock(data){
      food = data.val();
}

function writeStock(x){

    
      if(x <= 0 ){
        x <= 0;
      }
      else{
        x = x-1;
      }
      database.ref('/').update({
        food : x
      })
}

