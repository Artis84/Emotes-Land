/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    // prettier-ignore
    content: [
        "./public/**/*.{html,js,vue,jsx}", 
        "./index.js",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        fontFamily: {
            Overpass: ["Overpass", "sans-serif"],
        },
        extend: {},
    },
    plugins: [require("tw-elements/dist/plugin")],
};
