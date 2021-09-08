var road, boy, coins, bricks, cone, bar;
var roadImg, boyImg, coinsImg, bricksImg, coneImg, barImg;
var coinsG, bricksG, coneG, barG;
var end, endImg;
var coins = 0
var Distance = 0

var PLAY=1;
var END=0;
var gameState=0;


function preload(){
    roadImg.loadImage("road.png");
    boyImg.loadAnimation("Runner-1.png", "Runner-2.png");
    coinsImg.loadImage("Coins.png");
    bricksImg.loadImage("bricks.png");
    coneImg.loadImage("Cone.png");
    barImg.loadImage("Bar.png");
    endImg.loadAnimation("End.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    road = createSprite(200,200);
    road.addImage(roadImg);
    road.velocityY = 5;


    boy = createSprite(width/2, height-20,20,20);
    boy.addAnimation("boyrunning", boyImg);
    boy.scale = 0.09;
    
    coinsG = new Group();
    bricksG = new Group();
    coneG = new Group();
    barG = new Group();

}

function draw() {
    if(gameState===PLAY){
        backround(0);
        boy.x = world.mouseX;

        edges = createEdgeSprites();
        boy.collide(edges);


        if(path.y > height){
            path.y = height/2;
        }

        createCoins();
        createBricks();
        createCone();
        createBar();

        if(coinsG.isTouching(boy)){
            coinsG.destroyEach();
            coins = coins + 1;

        }else{
            if(bricksG.isTouching(boy)){
                gameState=END;
                boy.addAnimation("boyrunning",endImg);
                boy.x=200;
                boy.y=300;
                boy.scale=0.5;

                coinsG.destroyEach();
                bricksG.destroyEach();
                coneG.destroyEach();
                barG.destroyEach();

                coinsG.setVelocityEach(0);
                bricksG.setVelocityEach(0);
                coneG.setVelocityEach(0);
                barG.setVelocityEach(0);



                

            }
        }
           /* else if (coneG.isTouching(boy)){
                gameState=END;
                boy.addAnimation("boyrunning",endImg);
                boy.x=200;
                boy.y=300;
                //  boy.scale=0.5;

                coinsG.destroyEach();
                bricksG.destroyEach();
                coneG.destroyEach();
                barG.destroyEach();

                coinsG.setVelocityEach(0);
                bricksG.setVelocityEach(0);
                coneG.setVelocityEach(0);
                barG.setVelocityEach(0);
            }
            else if(barG.isTouching(boy)){
                gameState=END;
                boy.addAnimation("boyrunning",endImg);
                boy.x=200;
                boy.y=300;
               // boy.scale=0.5;

                coinsG.destroyEach();
                bricksG.destroyEach();
                coneG.destroyEach();
                barG.destroyEach();

                coinsG.setVelocityEach(0);
                bricksG.setVelocityEach(0);
                coneG.setVelocityEach(0);
                barG.setVelocityEach(0);
            }
           
        }*/ 
    drawSprites();
    textSize(50);
    fill(255);
    text("Coins", + coins, 1050,30 );


    }
}

function createCoins() {
    if (World.frameCount % 200 == 0) {
        var coins = createSprite(Math.round(random(width/2, height/2),40, 10, 10));
        coins.addImage(coinsImg);
        coins.scale=0.12;
        coins.velocityY = 5;
        coins.lifetime = 150;
        coinsG.add(coins);
}

}

function createBricks() {
    if (World.frameCount % 325 == 0) {
        var bricks = createSprite(Math.round(random(width/2, height/2),40, 10, 10));
        bricks.addImage(bricksImg);
        bricks.scale=0.04;
        bricks.velocityY = 3;
        bricks.lifetime = 150;
        bricksG.add(bricks);
}
}

function createCone() {
    if (World.frameCount % 420 == 0) {
        var cone = createSprite(Math.round(random(width/50, height/50),40, 10, 10));
        cone.addImage(cashImg);
        cone.scale=0.12;
        cone.velocityY = 3;
        cone.lifetime = 150;
        coneG.add(cone);
}
}


function createBar() {
    if (World.frameCount % 550 == 0) {
        var bar = createSprite(Math.round(random(width/50, height/50),40, 10, 10));
        bar.addImage(cashImg);
        bar.scale=0.12;
        bar.velocityY = 3;
        bar.lifetime = 150;
        barG.add(bar);
}
}