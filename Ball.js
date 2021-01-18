class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 0.4, 
        frictionAir: 0
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
     // push();
     // translate(this.body.position.x, this.body.position.y);
     // rotate(angle);
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y, this.width, this.height);
     // pop();
    }
  }