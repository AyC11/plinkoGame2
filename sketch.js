var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var gameState ="Play";
 var end;
 var count=0;
var particle;
var particles = [];
var plinkos = [];
var division = [];
var divisionHeight=300;
var score = 0;
var line;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 particle=new Particle(240,20,10);
   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}

function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 /*  if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/

   if(particle!= null){

   particle.display();
   if(particle.body.position.y>760){
    
    if(particle.body.position.x<50){
      score=score+100
    }else if(particle.body.position.x>50 && particle.body.position.x<130){
           score=score+400;
    
     } else if(particle.body.position.x>130 && particle.body.position.x<210){
      score=score+300;
    
  }else if(particle.body.position.x>210 && particle.body.position.x<290){
    score=score+500;
    
    }else if(particle.body.position.x>210 && particle.body.position.x<290){
      score=score+200;
     }else if(particle.body.position.x>290 && particle.body.position.x<370){
      score=score+300;
    }else if(particle.body.position.x>370 && particle.body.position.x<450){
      score=score+100;
    }else if(particle.body.position.x>450 && particle.body.position.x<530){
      score=score+400;
    }else if(particle.body.position.x>530 && particle.body.position.x<610){
      score=score+400;
    }else if(particle.body.position.x>610 && particle.body.position.x<690){
      score=score+500;
    }else if(particle.body.position.x>690 && particle.body.position.x<760){
      score=score+500;
     }
    
      console.log(gameState)
      particle=null;
      if(count==4){
        gameState ="end";
      } 
      
    }
  }
   
   
 /* for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();

   }
   text("100",20,550); 
   text("400",100,550);
   text("300",180,550);
   text("500",260,550);
   text("200",340,550);
   text("300",420,550);
   text("100",500,550);
   text("400",580,550);
   text("200",660,550);
   text("500",740,550);
   if(gameState=="end"){
    textSize(50);
    fill("red");
    text("GAME OVER",150,330);
   }
  }
function mousePressed(){
  if(gameState!= "end"){
 count++;
 particle=new Particle(mouseX,10,10,10)
  }
}