import theme from 'mdx-deck/themes'
import './font'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'dm, Roboto, sans-serif',
  // custom colors
  colors: {
    text: '#34434b',
    background: '#fafafa',
    link: '#fof'
  }
}
