/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#221E1F',
        flame: '#AE0000',
        cream: '#EBD8B3',
      },
    },
  },
  plugins: [],
};
