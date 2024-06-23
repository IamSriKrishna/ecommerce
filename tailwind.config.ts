/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        contrast_blue: "#219ebc",
        mette: "#28282B",
        pink2: "#E48998",
        pink:"#E69CA9",
        pinkvia:"#E69CA9",
      },
    },
  },
  
  plugins: [],
}