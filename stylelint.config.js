"use strict";

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-declaration-strict-value",
  ],
  "rules": {
    // defaults
    "indentation": 2,
    "string-quotes": "single",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-named": "never",
    "comment-empty-line-before": ["always", {
      except: ["first-nested"],
      ignore: ["after-comment", "stylelint-commands"]
    }],
    "selector-class-pattern": ["^([\\.\\%]?[a-z]*[-]?[a-z0-9\\-]*)(\\.[a-z0-9\\-]*)?(__[a-z0-9]*[-]?[a-z0-9\\-]*)?(--[a-z0-9]*[-]?[a-z0-9\\-]*)?(\\:[a-z]*)*$", {
      resolveNestedSelectors: true,
    }],
    "selector-no-qualifying-type": null,
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-brackets-space-inside": "never",
    "selector-max-id": 0,
    "declaration-empty-line-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-no-important": [true, {"severity": "warning"}],
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "property-no-vendor-prefix": [true, {"severity": "warning"}],
    "value-no-vendor-prefix": [true, {"severity": "warning"}],
    "number-leading-zero": "never",
    "function-url-quotes": "always",
    "font-family-name-quotes": "always-where-recommended",
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "rule-empty-line-before": ["always", {
      except: ["after-single-line-comment", "inside-block-and-after-rule", "first-nested"],
      ignore: ["after-comment", "inside-block"]
    }],
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-no-vendor-prefix": true,
    "selector-max-type": 1,
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-name-no-vendor-prefix": [true, {"severity": "warning"}],
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always",
    'max-nesting-depth': 3,
    // scss
    "scss/at-rule-no-unknown": true,
    "at-rule-empty-line-before": [
      "always", {
        "ignoreAtRules": ["else"],
        "except": ["after-same-name", "inside-block", "blockless-after-same-name-blockless", "blockless-after-blockless", "first-nested"]
      }
    ],
    "at-rule-name-space-after": "always",
    "scss/at-else-empty-line-before": "never",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/double-slash-comment-inline": "never",
    // order
    "order/properties-alphabetical-order": true,
    // declaration strict variable
    "scale-unlimited/declaration-strict-value": "color",
  }
};