class Chain{
    constructor(a,b){
        var options = {
            bodyA: a,
            bodyB: b,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var a = this.rope.bodyA.position;
        var b = this.rope.bodyB.position;
        strokeWeight(4);
        line(a.x,a.y,b.x,b.y);
    }
}