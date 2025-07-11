import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#00bd7e'
        // Add other custom colors here
      },
      fontFamily: {
        sans: ['"Montserrat Alternates"', 'sans-serif']
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px'
      }
    }
  },
  plugins: [],
} satisfies Config