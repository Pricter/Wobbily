let bob;
let anchor;
let spring;

let gravity;

function setup() {
    createCanvas(1263, 640);
    bob = new Particle(631, 320);
    anchor = new Particle(631, 0);
    velocity = createVector(0, 0);
    spring = new Spring(0.01, 200, bob, anchor);

    gravity = createVector(0, 0.6);
}

function draw() {
    background(112, 50, 126);
    spring.show();
    spring.update();

    bob.show();
    bob.update();

    anchor.show();
    anchor.update();

    if(mouseIsPressed) {
        bob.position.set(mouseX, mouseY);
        velocity.set(0, 0);
    }

    // velocity.add(force);
    // velocity.add(gravity);

    // bob.add(velocity);

    // velocity.mult(0.99);
}
