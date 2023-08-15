/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'Sans-serif']
      },
      colors:{
      primary: '#272D4E',
        purple :'#7854F7'
      }
    },
  },
  plugins: [],
}

