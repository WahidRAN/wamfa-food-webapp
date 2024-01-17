import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   'wamfa': {
    //     primary: '#54A8AD',
    //   }
    // },
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      title: ['"DM Serif Display"', 'serif'],
      messiri: ['"El Messiri"', 'serif']
    },
    extend: {}
  },
  plugins: []
} satisfies Config
