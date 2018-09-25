import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  // fonts
  monospace: '"Dank Mono", monospace',
  font: 'Old Standard TT',
  h1: {
    fontFamily: 'Nunito',
    fontWeight: 600
  },
  // custom colors
  colors: {
    text: '#34434b',
    background: '#fafafa',
    link: '#fof'
  },
  img: {
    maxHEight: '100%'
  }
}

// 'Old Standard TT',
// 'Nunito, sans-serif'
