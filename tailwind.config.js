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
        mainBg: "#FAFCFF",
        secondaryBg: "#fafcffb3",
        mainColor: {
          DEFAULT: "#9EB68E",
          dark: "#758E4D",
          light: "#BCC7C2",
        },
        SecondaryColor: {
          DEFAULT: "#FFBD8F",
          dark: "#D3A47F",
          light: "#FDF1E7",
        },
        mainTextColor: "#323B56",
        secondaryTextColor: "#69635C",
        DarkTextColor: "#e5e5e5",
        DarksecondaryTextColor: "#6B6675",
        shadowColor: "#E6E9F1",
      },
    },
  },
  plugins: [],
};
