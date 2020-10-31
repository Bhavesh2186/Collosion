function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  moverect = createSprite(400, 200, 50, 50);
  fixrect.debug = true;
  moverect.debug = true;
}

function draw() {
  background(255,255,255);  
  fixrect.shapeColor="green";
  moverect.shapeColor="green";
  moverect.x = World.mouseX;
  moverect.y = World.mouseY;
  if((moverect.x-fixrect.x)<((moverect.width+fixrect.width)/2) 
  && ((fixrect.x - moverect.x)<((moverect.width+fixrect.width)/2))
  && (moverect.y-fixrect.y)<((moverect.width+fixrect.width)/2)
  && ((fixrect.y-moverect.y)<((moverect.width+fixrect.width)/2))){
    moverect.shapeColor="red";
    fixrect.shapeColor="red";

  }
  drawSprites();
}