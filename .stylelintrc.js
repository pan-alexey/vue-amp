module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order'
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
    'no-duplicate-selectors': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute']
      }
    ],
    'selector-max-universal': 2,
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-brackets-space-inside': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-before': 'never',
    // 'declaration-colon-space-after': 'always',
    'value-no-vendor-prefix': true,
    'number-leading-zero': 'never',
    'function-url-quotes': 'always',
    'font-family-name-quotes': 'always-where-recommended',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': 'always',
    'at-rule-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'block-opening-brace-space-before': 'always',
    'selector-no-vendor-prefix': true,
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'rule-empty-line-before': ['always', {
      except: ['first-nested']
    }],
    'max-nesting-depth': [2, {
      ignore: ['blockless-at-rules']
    }],

    // Dropped rules
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'no-descending-specificity': null
  },
  "ignoreFiles": ["./server/**", "./src/index.html", './dist/**']
}
