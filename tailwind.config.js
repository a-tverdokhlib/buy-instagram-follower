const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'ping-slow': 'ping 2s linear infinite ',
      },
    },
    screens: {
      ls: '300px',
      // => @media (min-width: 300px) { ... }

      ss: '500px',
      // => @media (min-width: 500px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      dm: '846px',
      // => @media (min-width: 846px) { ... }

      ml: '896px',
      // => @media (min-width: 856px) { ... }

      mx: '968px',
      // => @media (min-width: 968px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
