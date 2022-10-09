/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            keyframes: {
                showModal: {
                    "0%": { transform: "translateX(50%)" },
                    "100%": { transform: "translateX(0%)" }
                }
            },
            animation: {
                show: "showModal .2s"
            },
            fontFamily: {
                sans: "Kumbh Sans, sans-serif"
            },
            colors: {
                purple: {
                    200: "#944BBB",
                    400: "#780264"
                },
                gray: {
                    50: "#F9F9F9",
                    100: "#FCFCFC",
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