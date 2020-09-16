var wall,thickness;
var bullet,speed,weight;

function setup() {
createCanvas(1600,400);
bullet = createSprite(200, 750, 50, 30);

thickness = random(22,83)
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);

speed = Math.round(random(223,321));

weight = Math.round(random(30,52));
}

function draw() {
  background(0,0,0);

  bullet.velocityX = speed;

  if(hasCollided(bullet,wall))
  {
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10)
    {
      wall.shapeColor = "red";
    }

    if(damage < 10)
    {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
  }

function hasCollided()
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }
}