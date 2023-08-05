/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "Lexend" :['Lexend']
      },

      colors : {
        "abu-muda" : '#161313',
        "abu-gelap" : '#0D0B0B',
        "abu-mateng" : '#1D1919',
        "kuning" : '#FFED00',
        "putih" : '#FFFFFF',
        "bor-color" : '#0F0F0F',
      }
    },
  },
  plugins: [],
}

