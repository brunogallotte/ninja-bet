import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ninjaPurplePrimary: '#9146FF',
        ninjaGreyLight: '#4B4B4B',
        ninjaGreyMedium: '#373737',
        ninjaGreyDark: '#272727',
      },
    },
  },
  plugins: [],
}
export default config
