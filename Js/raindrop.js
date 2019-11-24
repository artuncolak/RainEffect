let minSpeed = 5;
let maxSpeed = 30;

class Raindrop {
    raindropHeight = random(25, 100);
    x = Math.round(random(0, windowWidth));
    y = Math.round(random(0, windowWidth));
    speed = random(minSpeed, maxSpeed);
    color = raindropColor;

    draw() {
        noStroke();
        fill(this.color.r, this.color.g, this.color.b);
        rect(this.x, this.y, RAINDROP_WIDTH, this.raindropHeight);
    }

    move() {
        this.y += this.speed;
        if (this.y >= windowHeight) {
            this.y = -this.raindropHeight;
            this.x = random(0, windowWidth);
            this.speed = random(minSpeed, maxSpeed);
        }
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
    if (document.getElementById("rainbowCheckbox").checked == true) {
        for (let i = 0; i < amount; i++) {
            let raindrop = new Raindrop();
            raindrop.color = getRandomRGBColor();
            raindrops.push(raindrop);
        }
    } else {
        for (let i = 0; i < amount; i++) {
            raindrops.push(new Raindrop());
        }
    }
}