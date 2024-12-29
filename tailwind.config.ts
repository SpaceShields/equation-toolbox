import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        android: ['var(--font-android)'],
        acquire: ['var(--font-acquire)'],
        comfortaa: ['var(--font-comfortaa)'],
        megrim: ['var(--font-megrim)']
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["nord", "business"],
  },
  darkMode: ['selector', '[data-theme="forest"]']
}
export default config
