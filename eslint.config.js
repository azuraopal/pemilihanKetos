import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    react: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
  },
  {
    rules: {
      "style/multiline-ternary": "off",
      'react/prop-types': 'off',
    },
  },

  // For tailwindcss class sorter.
  ...compat.config({
    plugins: ['tailwindcss'],
    extends: [
      'plugin:tailwindcss/recommended',
    ],
  }),
)
