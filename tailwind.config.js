/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'inter':'Inter',
      'open-sans':'Open Sans',
      'poppins':'Poppins'
    },
    colors: {
      'green-blue':'#ADE5E5',
      'blue-dark': '#12294B'
    }},
  },
  plugins: [],
}

