module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3/4": "80vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      colors: {
        transparent: "transparent",
        mainBg: "#e5e5e5",
        secondaryBg: "#D9D9D9",
        mainColor: {
          DEFAULT: "#CC43B2",
          dark: "#BB3CA3",
          light: "#F54CD5",
        },
        mainTextColor: "#232323",
      },
    },
  },
  plugins: [],
};
