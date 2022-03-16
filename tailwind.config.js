module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        custom: '0px  0px 5px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
