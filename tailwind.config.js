module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
    screens: {
      ls: '300px',
      // => @media (min-width: 300px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      dm: '846px',
      // => @media (min-width: 846px) { ... }

      ml: '896px',
      // => @media (min-width: 856px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require('flowbite/plugin')],
}
