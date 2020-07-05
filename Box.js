class Box{
    constructor(x,y){
        var options={
            friction:0.2
        }
        this.body = Bodies.rectangle(x,y,30,50,options)
        this.width = 30
       this.height = 50
        World.add(world,this.body);  
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
       fill("yellow");
        rect(0,0,this.width,this.height);
       
        
        pop()
    }
}