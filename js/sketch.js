const RAINDROP_WIDTH = 2;
const DEFAULT_NUMBER_OF_RAINDROPS = 100;
const DEFAULT_RAINDROP_COLOR = {
    r: 3,
    g: 90,
    b: 252
}
const DEFAULT_BACKGROUND_COLOR = {
    r: 194,
    g: 255,
    b: 255
}

let numberOfRaindrops;
let raindrops = [];
let backgroundColor = DEFAULT_BACKGROUND_COLOR;
let raindropColor = DEFAULT_RAINDROP_COLOR;

function setup() {
    numberOfRaindrops = document.getElementById("intensityRange").value;
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < numberOfRaindrops; i++) {
        raindrops.push(new Raindrop());
    }
}

function draw() {
    background(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    for (let raindrop of raindrops) {
        raindrop.draw();
        raindrop.move();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//Returns an RGB color
function getRandomRGBColor() {
    let randomColor = {
        r: random(255),
        g: random(255),
        b: random(255)
    }

    return randomColor;
}


function startColorfulEffect() {
    let rainbowCheckbox = document.getElementById("rainbowCheckbox");

    if (rainbowCheckbox.checked == true) {
        raindropPicker.disable();
        for (let raindrop of raindrops) {
            raindrop.color = getRandomRGBColor();
        }
    } else {
        raindropPicker.enable();
        for (let raindrop of raindrops) {
            raindrop.color = raindropColor;
        }
    }
}