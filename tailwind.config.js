const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{ts,html,scss}"],
    darkMode: false, // or 'media' or 'class'
    important: true,
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "var(--primary-50)",
                    100: "var(--primary-100)",
                    200: "var(--primary-200)",
                    300: "var(--primary-300)",
                    400: "var(--primary-400)",
                    500: "var(--primary-500)",
                    600: "var(--primary-600)",
                    700: "var(--primary-700)",
                    800: "var(--primary-800)",
                    900: "var(--primary-900)",
                    a100: "var(--primary-a100)",
                    a200: "var(--primary-a200)",
                    a400: "var(--primary-a400)",
                    a700: "var(--primary-a700)",
                    dark: "#212429",
                    grey: "#42474A",
                    grey_1: "#C4C4C4",
                },
                accent: {
                    50: "var(--accent-50)",
                    100: "var(--accent-100)",
                    200: "var(--accent-200)",
                    300: "var(--accent-300)",
                    400: "var(--accent-400)",
                    500: "var(--accent-500)",
                    600: "var(--accent-600)",
                    700: "var(--accent-700)",
                    800: "var(--accent-800)",
                    900: "var(--accent-900)",
                    a100: "var(--accent-a100)",
                    a200: "var(--accent-a200)",
                    a400: "var(--accent-a400)",
                    a700: "var(--accent-a700)",
                },
                warn: {
                    50: "var(--warn-50)",
                    100: "var(--warn-100)",
                    200: "var(--warn-200)",
                    300: "var(--warn-300)",
                    400: "var(--warn-400)",
                    500: "var(--warn-500)",
                    600: "var(--warn-600)",
                    700: "var(--warn-700)",
                    800: "var(--warn-800)",
                    900: "var(--warn-900)",
                    a100: "var(--warn-a100)",
                    a200: "var(--warn-a200)",
                    a400: "var(--warn-a400)",
                    a700: "var(--warn-a700)",
                },
                green: {
                    50: "var(--green-50)",
                    100: "var(--green-100)",
                    200: "var(--green-200)",
                    300: "var(--green-300)",
                    400: "var(--green-400)",
                    500: "var(--green-500)",
                },
                orange: {
                    50: "var(--orange-50)",
                    100: "var(--orange-100)",
                    200: "var(--orange-200)",
                    300: "var(--orange-300)",
                    400: "var(--orange-400)",
                    500: "var(--orange-500)",
                },
                blue: {
                    50: "var(--blue-50)",
                    100: "var(--blue-100)",
                    200: "var(--blue-200)",
                    300: "var(--blue-300)",
                    400: "var(--blue-400)",
                    500: "var(--blue-500)",
                },
                red: {
                    50: "var(--red-50)",
                    100: "var(--red-100)",
                    200: "var(--red-200)",
                    300: "var(--red-300)",
                    400: "var(--red-400)",
                    500: "var(--red-500)",
                },
                neutral: {
                    50: "var(--neutral-50)",
                    100: "var(--neutral-100)",
                    150: "var(--neutral-150)",
                    200: "var(--neutral-200)",
                    300: "var(--neutral-300)",
                    400: "var(--neutral-400)",
                    500: "var(--neutral-500)",
                },
                contrast: {
                    50: "var(--contrast-50)",
                    100: "var(--contrast-100)",
                    200: "var(--contrast-200)",
                    300: "var(--contrast-300)",
                    400: "var(--contrast-400)",
                    500: "var(--contrast-500)",
                    600: "var(--contrast-600)",
                    700: "var(--contrast-700)",
                    800: "var(--contrast-800)",
                    900: "var(--contrast-900)",
                    a100: "var(--contrast-a100)",
                    a200: "var(--contrast-a200)",
                    a400: "var(--contrast-a400)",
                    a700: "var(--contrast-a700)",
                },
            },
            width: {
                "1/7": "14.2857143%",
                "2/7": "28.5714286%",
                "3/7": "42.8571429%",
                "4/7": "57.1428571%",
                "5/7": "71.4285714%",
                "6/7": "85.7142857%",
                "1/8": "12.5%",
                "2/8": "25%",
                "3/8": "37.5%",
                "4/8": "50%",
                "5/8": "62.5%",
                "6/8": "75%",
            },
            height: {
                "8/9": "88.88888889%",
            },
            maxHeight: {
                128: "32rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
