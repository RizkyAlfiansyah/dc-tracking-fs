const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#eaeaea",
                secondary: "#f4f5f7",
                tertiary: "#D6EDF7",
                "gradient-100":
                    "linear-gradient(21deg, rgba(81,226,255,1) 23%, rgba(39,111,201,1) 100%, rgba(2,0,36,1) 100%)",
            },
            height: {
                "screen-80": "90vh",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
