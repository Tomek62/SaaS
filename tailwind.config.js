const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Couleur principale
        secondary: "#000000", // Couleur secondaire
        textSecondary: "#4B5563", // Couleur des textes secondaires
      },
      fontFamily: {
        primary: ["Rubik", ...fontFamily.sans], // Police principale : Rubik
        secondary: ["Roboto", ...fontFamily.sans], // Police secondaire : Roboto
      },
      boxShadow: {
        input: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        dropdown: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        small: "0.375rem",
        default: "0.5rem",
        full: "9999px",
      },
      fontSize: {
        label: ["0.75rem"],
        default: ["0.875rem", { lineHeight: "1.25rem" }],
        title: ["2.125rem", { lineHeight: "1.75rem" }],
        metric: ["1.875rem", { lineHeight: "2.25rem" }],
      },
      width: {
        1536: "1536px",
      },
      height: {
        150: "37.5rem",
      },
      margin: {
        30: "7.5rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateX(0%)",
            transformOrigin: "50% 50%",
          },
          "15%": { transform: "translateX(-6px) rotate(-6deg)" },
          "30%": { transform: "translateX(9px) rotate(6deg)" },
          "45%": { transform: "translateX(-9px) rotate(-3.6deg)" },
          "60%": { transform: "translateX(3px) rotate(2.4deg)" },
          "75%": { transform: "translateX(-2px) rotate(-1.2deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.8s both",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:primary|secondary|textSecondary)-(?:50|100|200|300|400|500|600|700|800|900))$/,
      variants: ["hover", "focus"],
    },
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
};
