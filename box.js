class BOX{
    constructor(x,y,width,height){
        var a ={
            isStatic: true
          }
    this.body=Bodies.rectangle(x,y,width,height,a)
    this.width=width
    this.height=height 
    World.add(world,this.body)
    this.image = loadImage("dustbingreen.png");
    }
    display(){
    var pos=this.body.position
    rectMode(CENTER)
   fill ("red")
   //push();
    //rect(pos.x,pos.y,this.width,this.height)
    image(this.image,340,540,180,120);
    //pop();
    
    }
    
    
    }