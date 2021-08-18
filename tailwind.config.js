module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      //dancing for hello
      dancing: ["Dancing Script", "cursive"],

      //playfair for headers
      playfair: ["Playfair Display", "sans-serif"],

      //raleway for body
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      height: {
        main: "calc(100vh - 2rem)",
      },
      flex: {
        38: "2 2 38%",
        29: "1 1 28%",
        33: "1 1 32%",
        62: "1 1 62%",
      },
    },
    colors: {
      white: "#ffffff",
      grey: "#eaecf3",
      black: "#100E14",
      red: "#E03129",
      blue: "#597FA8",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
