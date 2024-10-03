/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        kumb: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        proyect: "#F7F7F7",
        illustrator: "#ED920B",
        ps: "#258CEC",
        css: "#21528A",
        js: "#F2D649",
        menu: "#739DC3",
        html: "#51A743",
      },

      backgroundImage: {
        button: "radial-gradient(at top, #ced0d1, #ffffff)",
        card: "linear-gradient(to bottom, #737373, #000000)",
      },

      letterSpacing: {
        title: "15px",
      },

      boxShadow: {
        card: "0px 15px 7px -1px rgba(153, 153, 153, 0.98), 0px -15px 7px 1px rgb(202, 202, 202)",

        services:
          " 10px 15px 12px -7px rgba(153, 153, 153, 0.98), -6px -8px 6px 1px rgb(202, 202, 202)",

        button:
          "inset 2px -2px 1px rgb(255 255 255), inset -2px 3px 1px rgb(192 181 181) ",
      },
    },
  },
  plugins: [],
};
