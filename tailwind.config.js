/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        fairy: '#E3AADD',
        petunia: '#C3C7F3',
      },
      backgroundImage: {
        'fairy-in-sky-gradient': 'linear-gradient(180deg, #C3C7F3 0%, #E3AADD 100%)',
        'dark-fairy-in-sky-gradient': 'linear-gradient(180deg, #000000 0%, #E3AADD 100%)',
      },
      fontFamily: {
        'aref-ruqaa': ['Aref Ruqaa', 'system-ui'],
      },
    },
  },
  plugins: [],
};
