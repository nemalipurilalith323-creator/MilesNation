/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050807',
        panel: '#101817',
        accent: '#63F542',
        accentStrong: '#35C759'
      }
    }
  },
  plugins: []
};
