module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/6': '16.666667%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '3/4': '66.666667%',
        '8/9': '88.888889%',
        '9/10':'90%'
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
