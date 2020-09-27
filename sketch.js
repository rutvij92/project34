//Create variables here
var dog, happyDog, database, foodS, foodStock;
var Dog;
var database;
var dbref;
function preload()
{
  //load images here
  dog=loadImage("images/dogimg.png");
 happyDog =loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  Dog=createSprite(250,390,20,20);
  Dog.addImage(dog);
  Dog.scale=0.3;
  foodStock=database.ref("Food");
  foodStock.on("value",readstock,);
}


function draw() {  
background(46, 139, 87);
  drawSprites();
  //add styles here

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   Dog.addImage(happyDog);

 }
fill("black");
textSize(20);
  text("foodstockavailable:"+foodS,120,50);
}

function readstock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
x=0;
  }else{
    x=x-1;
  }
  
  database.ref("/").update({

    Food:x
  })
}

