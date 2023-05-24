/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        griffy: ["Griffy", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
      },
      colors: {
        navbar: "#A1B1CB",
        search: "#3B567D",
        searchText: "#A2B3CD",
        navGradient: "#6650A5BF",
        buttons: "#5436A9",
        navbarButtons: "#80c3ff",
      },
      backgroundImage: {
        status: "url('/assets/account2.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
