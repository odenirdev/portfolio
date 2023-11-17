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
        brand: '#00D2DF',
      
        gray900: '#121212',
        gray800: '#1E1E1E',
        gray700: '#2C2C2C',
        gray600: '#3D3D3D',
        gray500: '#494949',
        gray400: '#575757',
        gray300: '#636363',
        gray200: '#717171',
        gray100: '#7F7F7F',
        gray90: '#8D8D8D',
        gray80: '#9B9B9B',
        gray70: '#AAAAAA',
        gray60: '#B6B6B6',
        gray50: '#C4C4C4',
        gray40: '#E0E0E0',
        gray30: '#ECECEC',
        gray20: '#F6F6F6',
        gray10: '#FAFAFA',
        gray0: '#FFFFFF',


        support01: '#2962FF',
        support02: '#0BB07B',
        support03: '#FFCE52',
        support04: '#F03D3D',
        support05: '#E0E0E0',

        funcional: {
          text: '#FFFFFF',
          subtext: '#C4C4C4',
          background: '#151515'
        }
      },

      backgroundImage: {
        buttonPrimary: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(60deg, #00f, #00e8ff) border-box'
      }
    },
  },
  plugins: [],
}
export default config
