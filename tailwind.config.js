/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            white: "#ffffff",
            blue: "#214e8f",
            red: "#dc2626",
            pink: "#db2777",
            gray: "#f3f4f6",
            grey: "#e5e7eb",
        },
        extend: {
            boxShadow: {
                md: "0px 5px 11px 0px rgba(0,0,0,0.4)",
            },
        },
    },
    plugins: [],
};
