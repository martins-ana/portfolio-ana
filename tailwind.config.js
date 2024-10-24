/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#221E1F',
        flame: '#AE0000',
        cream: '#EBD8B3',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        creepster: ['Creepster', 'system-ui'],
        aref_ruqaa: ['Aref Ruqaa', 'system-ui'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
