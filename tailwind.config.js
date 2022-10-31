/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js","./src/pages/**/*.{js,jsx,ts,tsx}","./src/component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: [
        'Poppins-Black.ttf',
        'Poppins-Regular.ttf',
        'Poppins-Medium.ttf',
        'Poppins-SemiBold.ttf',
        'PoppinsBold.ttf',
      ],
    },
  },
  plugins: [],
}
