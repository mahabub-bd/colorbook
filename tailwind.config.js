/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(0, 0, 0, .66), transparent)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [],
};
