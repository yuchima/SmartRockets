function Rocket(dna) {
    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();
    this.completed = false;
    if (dna) {
        this.dna = dna;
    } else {
        this.dna = new DNA();
    }
    this.count = 0;
    this.fitness = 0;
    this.applyForce = function(force) {
        this.acc.add(force);
    }
    this.update = function() {
      var d = dist(this.pos.x, this.pos.y, target.x, target.y);
      if (d<10){
        this.completed = true;
      }

        this.applyForce(this.dna.genes[this.count]);
      if(!this.completed){
        this.count++;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        }
    }

    this.calcFitness = function() {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(d, 0, width, width, 0);
    }
    this.show = function() {
        push();
        noStroke();
        fill(255, 200);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 20, 4);
        pop()

    }

}
