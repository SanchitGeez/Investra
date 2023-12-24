/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkslategray: "#333",
        darkgray: "#9e9e9e",
        mediumaquamarine: "#87d498",
        white: "#fff",
        dimgray: "#5b5b5b",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        spartan: "Spartan",
      },
    },
    fontSize: {
      "17xl": "36px",
      "21xl": "40px",
      "11xl": "30px",
      "5xl": "24px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  plugins: [],
}
