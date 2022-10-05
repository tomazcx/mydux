/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                purple: {
                    400: "#780264"
                },
                gray: {
                    50: "#F9F9F9",
                    200: "#EFEFEF",
                    600: "#303030"
                },
                red: {
                    400: "#FF3131"
                }

            }
        },
    },
    plugins: [],
}