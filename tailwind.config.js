module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'branco': '#FFFFFF',
      'laranja-internacional': '#57467B',
      'laranja-internacional-dark': '#57467B',
      'laranja-chama': '#57467B',
      'mar-amarelo': '#FFAD00',
      'ouro': '#FFD100',
      'perola-negra': '#0C2340',
      'linho': '#FDF8F5',
      'linho-dark': '#F2D0BC',
      'bondi-blue': '#00A7B5',
      'pompadour': '#720062',
      'rosa-francesa': '#EF426F'
    },
    fontFamily: {
      display: ['Sora', 'sans-serif'],
      body: ['IBM Plex Sans', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
