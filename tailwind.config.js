/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      colors: {
        primary: {
          lime: 'hsl(61, 70%, 52%)',
          red: 'hsl(4, 69%, 50%)',
        },
        neutral: {
          slate_100: 'hsl(202, 86%, 94%)',
          slate_300: 'hsl(203, 41%, 72%)',
          slate_500: 'hsl(200, 26%, 54%)',
          slate_700: 'hsl(200, 24%, 40%)',
          slate_900: 'hsl(202, 55%, 16%)',
          slate_950: 'hsl(202, 55%, 8%)',
        },
        balck: '#000',
        white: '#fff',
      },
      fontSize: {
        50: ".9rem",
        100: "1rem",
        200: "1.125rem",
        300: "1.25rem",
        400: "1.375rem",
        500: "1.5rem",
        600: "2rem",
        650: " 2.25rem",
        700: "2.5rem",
        800: "3rem",
        900: "3.5rem",
        1000: "4.5rem",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      width: {
        200: "200px",
        300: "300px",
        350: "350px",
        375: "375px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        650: "650px",
        700: "700px",
        750: "750px",
        800: "800px",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      borderRadius: {
        20: "20px",
        40: "40px",
        60: "60px",
        80: "80px",
        100: "100px",
        120: "120px",
      },
  
      screens: {
        sm: "36rem", 
        md: "48rem",
        lg: "64rem",
        xl: "68.75rem",
        "2xl": "90rem",
      },
    },
  },
  plugins: [],
}