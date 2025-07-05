/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif'],
    },
    screens: {
      'mobile': '375px',
      'mobilelg': '500px',
      'tablet': '728px',
      'pc': "1024px",
      'desktop': '1440px'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  darkMode: 'class',
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  }
}
