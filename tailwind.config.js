/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '1920': '1920px',
        '150': '150vw',
        '960': '960px',
        '2/3w': '56vw',
        '780' : '780px',
      },
      height:{
        "half-screen" : "96vh",
        "peep" :  "180vh",
        "40": "40rem"
      },
      maxWidth: {
        '960': '960px',
      },
      minHeight: {
      "69": "60rem",
      },
      margin: {
        '10': '10px',
        '162': '162px',
        '30': '30px',
        '40': '20vw'
      },
      border:{
        '20':'20px'
      },
      padding: {
        '52': '52px',
      },
      translate: {
        '90': '90px',
        'peep' : '110%'
      },
      spacing: {
        '1200': '12%',
        '130': '130vh',
        '32':'32vh'
      },
      backgroundColor: {
        customBlue: '#206569',
      },
      colors: {
        customPeach: '#DAC998',
      },
      zIndex: {
        '1' : '1',
      }
    },
  },
  plugins: [],
};
