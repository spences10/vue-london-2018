import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  // custom colors
  font: 'Nunito',
  h1: {
    fontFamily: 'Old Standard TT',
    fontWeight: 600
  },
  colors: {
    text: '#34434b',
    background: '#fafafa',
    link: '#fof'
  },
  img: {
    maxWidth: '70%'
  }
}

// 'Old Standard TT',
// 'Nunito, sans-serif'
