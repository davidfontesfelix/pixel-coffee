import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel400: 'pixel-regular',
        pixel700: 'pixel-bold',
      },
      colors: {
        primary: '#4A2C22',
        secondary: '#EFDDC6',
        background: '#E0CEB7',
      },
      screens: {
        mobilesm: { max: '388px' },
      },
    },
  },
  plugins: [],
}
export default config
