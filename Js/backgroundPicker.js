const pickr2 = Pickr.create({
    el: '.color-picker2',
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
            save: true
        }
    }
});