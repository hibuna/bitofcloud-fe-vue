/* eslint-env node */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier-scss'
  ],
  rules: {
    'color-function-notation': null,
    'selector-class-pattern': null
  }
}
