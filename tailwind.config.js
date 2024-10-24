/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#221E1F',
        flame: '#AE0000',
        dark_flame: '#480000',
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
      inset: {
        18: '4.375rem',
        38: '9.53125rem',
      },
      lineHeight: {
        12: '3rem',
        25: '6.25rem',
      },
      width: {
        105: '26.375rem',
      },
      height: {
        129: '32.25rem',
      },
    },
  },
  plugins: [],
};
