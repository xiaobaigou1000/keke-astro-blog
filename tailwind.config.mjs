/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
    theme: {
        extend: {
            colors: {
                pureWhite: {
                    10: "#ffffff10",
                    20: "#ffffff33",
                    30: "#ffffff4d",
                    40: "#ffffff66",
                    50: "#ffffff80",
                    60: "#ffffff99",
                    70: "#ffffffb3",
                    80: "#ffffffcc",
                    90: "#ffffffe6",
                    100: "#ffffff",
                    default: "#ebebeb",
                    smoke: "#dadada",
                    lightSmoke: "#ebebeb",
                    yellow: "#fffde6",
                    blue: "#f5f5ff",
                },
                silk: {
                    lightYellow: "#FFF8DC",
                },
                pureOrange: {
                    default: "#FF6300",
                    100: "#FFA500",
                    200: "#FF8C00",
                    300: "#FF7700",
                    500: "#FF6300",
                    700: "#FF4800",
                },
                blueGray: {
                    100: "#798696",
                    300: "#374050",
                },
                pureGray: {
                    default: "#e6e6ee",
                    dark: "#6e6e6e",
                    slate: "#374050",
                },
                pureBlack: {
                    default: "#0d0d0d",
                },
                transparent: "transparent",
            },
        },
    },
    plugins: [],
};
