const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;
const RAINDROP_WIDTH = 2;

let numberOfRaindrops;
let raindrops = [];
let minSpeed = 10;
let maxSpeed = 20;

let raindropSlider;

function setup() {
    numberOfRaindrops = document.getElementById("intensityRange").value;
    createCanvas(WIDTH, HEIGHT);
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

function changeNumberOfRaindrops() {
    let sliderValue = document.getElementById("intensityRange").value;
    let difference = sliderValue - raindrops.length;
    if (difference > 0) {
        addRaindrops(difference);
    } else if (difference < 0) {
        removeRaindrops(difference);
    }
}

function removeRaindrops(amount) {
    amount *= -1;
    for (let i = 0; i < amount; i++) {
        raindrops.pop();
    }
}

function addRaindrops(amount) {
    for (let i = 0; i < amount; i++) {
        raindrops.push(new Raindrop());
    }
}

class Raindrop {
    raindropHeight = random(25, 100);
    x = Math.round(random(0, WIDTH));
    y = Math.round(random(0, WIDTH));
    speed = random(minSpeed, maxSpeed);

    draw() {
        noStroke();
        fill(3, 90, 252); //3, 90, 252
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