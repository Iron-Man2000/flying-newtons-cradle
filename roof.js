class roof {
    constructor(x,y, width, height) {
        var options ={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y, width, height, options);

        World.add(world,this.body);
    }
        display() {
            var pos = this.body.position;

            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            fill(128,128,128);
            rect(0, 0, this.width, this. height);
            pop();
    }

}
