var canvas;

var surface1,surface2,surface3,surface4,surface5,edges;

function preload(){
    
}


function setup(){
    canvas = createCanvas(800,600);
    

    //create 4 different surfaces
    surface1 =createSprite(400,300,20,20);
    surface1.shapeColor="blue";
    surface1.velocityY=4;
    surface2= createSprite(600,500,100,25);
    surface2.shapeColor="green";
    surface3= createSprite(100,500,100,25);
    surface3.shapeColor="red";
    surface4=createSprite(300,500,100,25);
    surface4.shapeColor="yellow";
    surface5=createSprite(450,500,100,25);
    surface5.shapeColor="purple";
    surface1.velocityY= 4;
    surface1.velocityX=4;
    
    



    //create box sprite and give velocity

}

function draw() {
    background("black");



    edges=createEdgeSprites();
    surface1.bounceOff(edges);
    if( surface1.isTouching(surface2)|| surface1.isTouching(surface4) || surface1.isTouching(surface5)){
    surface1.bounceOff(surface2);
    
   
    surface1.bounceOff(surface3);
    
    surface1.bounceOff(surface4);
    surface1.shapeColor="green";
    surface1.bounceOff(surface5);
    
    }
    if(surface3.isTouching(surface1)
    ){
        surface1.velocityX=0;
        surface1.velocityY=0;
        surface1.shapeColor="red";
    }
    drawSprites();
 
    //create edgeSprite
    

    //add condition to check if box touching surface and make it box
}
