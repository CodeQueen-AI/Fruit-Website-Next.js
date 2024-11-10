import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#de2c4d",
        secondary : '#fb923c',
      },
      fontFamily: {
        poppins : ["Poppins" , 'sans-serif'],
        averia : ["Averia Serif Libre" , 'serif']
      },
      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm : "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl" : "6rem",
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
