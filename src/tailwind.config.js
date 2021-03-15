const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        "src/**/*.tsx"
    ],
    theme: {
        fontFamily: {
            display: [ 'LatoWebRegular',"Helvetica Neue",'Helvetica','Arial','sans-serif' ],
            body: [ 'LatoWebRegular',"Helvetica Neue",'Helvetica','Arial','sans-serif' ],
        },
        colors: {
            ...defaultTheme.colors,
            "lima-color-1": "#1bb6ea",
            "lima-color-2": "#001a3e",
            "lima-color-3": "#c1d62f",
            "lima-color-4": "#f1f1f1",
            "lima-color-5": "#fff",
            "lima-color-6": "#000f25",
            "lima-color-7": "#024d81",
            "lima-color-8": "#00457c",
        },
        extend: {},
    },
    variants: {},
    plugins: [

    ],
}