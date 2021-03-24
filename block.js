class Block{
    constructor(x,y)
    {
        var options  = {
            isStatic:false,
            restitution:0.8,
            friction:0.01,
            density:0.05
        }
        this.width = 30;
        this.height = 60;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.image= loadImage("block.png");
        World.add(world,this.body);
        this.visibility = 255;
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
       
       push ();
        if(this.body.speed<3) 
        { 
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
        }
       else
        {
            push();
            
            World.remove(world,this.body);
            this.visibility = this.visibility-25;
            tint (255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,30,60);
            
            pop();
        }
       
    }
    

}