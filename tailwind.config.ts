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
        
        dark10: '#121212',
        dark20: '#151515',
        dark30: '#C4C4C4',
        dark40: '#FFFFFF',

        support01: '#2962FF',
        support02: '#0BB07B',
        support03: '#FFCE52',
        support04: '#F03D3D',
        support05: '#E0E0E0',

        funcional: {
          text: '#FFFFFF',
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
