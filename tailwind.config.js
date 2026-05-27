/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.jsx",
    "./main.jsx",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./assets/**/*.{js,jsx}",
    "./animations/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0c0a08",
        cocoa: "#1a120d",
        bark: "#34241b",
        clay: "#9b6047",
        ambered: "#d8ad70",
        champagne: "#f4ead8",
        linen: "#fff9ef",
        sage: "#94a58a",
        mist: "rgba(255, 249, 239, 0.68)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 28px 100px rgba(216, 173, 112, 0.18)",
        glass: "0 24px 90px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "warm-radial":
          "radial-gradient(circle at 28% 20%, rgba(216, 173, 112, 0.24), transparent 32%), linear-gradient(135deg, #0c0a08, #1a120d 48%, #34241b)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
