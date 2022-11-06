/** @type {import('tailwindcss').Config} */
module.exports = {
    // prettier-ignore
    content: [
        "./public/**/*.{html,js,vue,jsx}", 
        "./index.js"
    ],
    theme: {
        fontFamily: {
            Overpass: ["Overpass", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
