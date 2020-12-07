class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image= loadImage("Images/paper.png");
        this.radius= radius;
        this.body= Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

    }
    display(){
        var pos= this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
        pop();
    }
}