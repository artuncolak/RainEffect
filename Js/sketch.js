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

let raindropPicker = Pickr.create({
    el: '.raindrop-picker',
    theme: 'nano',

    default: 'rgba(3, 90, 252, 1) ',

    lockOpacity: true,

    defaultRepresentation: 'RGBA',

    swatches: null,

    components: {

        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: true
        }
    }
});
let backgroundPicker = Pickr.create({
    el: '.background-picker',
    theme: 'nano',

    default: 'rgba(194, 255, 255 1)',

    lockOpacity: true,

    defaultRepresentation: 'RGBA',

    swatches: null,

    components: {

        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: false
        }
    }
});

let numberOfRaindrops;
let raindrops = [];
let minSpeed = 5;
let maxSpeed = 30;
let backgroundColor = DEFAULT_BACKGROUND_COLOR;
let raindropColor = DEFAULT_RAINDROP_COLOR;

let raindropSlider;

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


function startRainbowEffect() {
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

//Color picker events
backgroundPicker.on('change', (color, instance) => {
    let selectedColor = color.toRGBA();
    backgroundColor = {
        r: selectedColor[0],
        g: selectedColor[1],
        b: selectedColor[2]
    }
    backgroundPicker.applyColor(color);
});

raindropPicker.on('change', (color, instance) => {
    let selectedColor = color.toRGBA();
    raindropColor = {
        r: selectedColor[0],
        g: selectedColor[1],
        b: selectedColor[2]
    };

    for (let raindrop of raindrops) {
        raindrop.color = raindropColor;
    }
    raindropPicker.applyColor(color);
});

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