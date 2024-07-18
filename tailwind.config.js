/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        // noto: ["Noto Sans JP", " sans-serif;"]
        Questrial: ["Questrial", "sans-serif"]
      },
      backgroundImage: {
        hero : "url('https://i.pinimg.com/564x/a9/de/8e/a9de8e5359d0c1e27427d74ed3e7616d.jpg')"
      }
  },
},
  plugins: [],
}

