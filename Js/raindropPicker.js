const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano',

    default: 'rgba(3, 90, 252, 1)',

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