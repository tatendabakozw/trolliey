module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          primary: '#4d77dd',
          secondary: '#5469D0',
          light: '#E5ECFA'
        }
      }
    },
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
