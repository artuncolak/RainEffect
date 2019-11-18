const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;
const RAINDROP_WIDTH = 2;

let numberOfRaindrops = 500;
let raindrops = [];
let minSpeed = 10;
let maxSpeed = 20;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    print("Width: " + WIDTH + "Heıght: " + HEIGHT);
    for (let i = 0; i < numberOfRaindrops; i++) {
        raindrops.push(new Raindrop());
    }
}

function draw() {
    background(255, 255, 255); //157, 163, 158

    for (let raindrop of raindrops) {
        raindrop.draw();
        raindrop.move();
    }
}

class Raindrop {
    raindropHeight = random(25, 100);
    x = Math.round(random(0, WIDTH));
    y = Math.round(random(0, WIDTH));
    speed = random(minSpeed, maxSpeed);

    draw() {
        noStroke();
        fill(3, 90, 252);
        rect(this.x, this.y, RAINDROP_WIDTH, this.raindropHeight);
    }

    move() {
        this.y += this.speed;
        if (this.y >= HEIGHT) {
            this.y = -this.raindropHeight;
            this.x = random(0, WIDTH);
            this.speed = random(minSpeed, maxSpeed);
        }
    }
}