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
            rgba: true,
            input: true
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
            rgba: true,
            input: true
        }
    }
});


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