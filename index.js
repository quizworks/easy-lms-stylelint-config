"use strict";

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-declaration-strict-value",
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "color-hex-length": "long",
    "color-named": "never",
    "comment-empty-line-before": ["always", {
      except: ["first-nested"],
      ignore: ["after-comment", "stylelint-commands"]
    }],
    "declaration-colon-space-after": "always",
    "declaration-empty-line-before": "never",
    "declaration-no-important": [true, {"severity": "warning"}],
    "declaration-property-value-disallowed-list": {
      "border": ["none"]
    },
    "font-family-name-quotes": "always-where-recommended",
    "function-url-quotes": "always",
    "indentation": [2, {
      ignore: ["inside-parens", "param", "value"]
    }],
    "property-no-vendor-prefix": [true, {"severity": "warning"}],
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "max-nesting-depth": 3,
    "media-feature-name-no-vendor-prefix": [true, {"severity": "warning"}],
    "number-leading-zero": "never",
    "rule-empty-line-before": ["always", {
      except: ["after-single-line-comment", "inside-block-and-after-rule", "first-nested"],
      ignore: ["after-comment", "inside-block"]
    }],
    "selector-no-vendor-prefix": true,
    "selector-max-type": 2,
    "selector-no-qualifying-type": null,
    "selector-attribute-quotes": "always",
    "selector-max-id": 0,
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "single",
    "value-no-vendor-prefix": [true, {"severity": "warning"}],
    // bem
    "selector-class-pattern": ["^([\\.\\%]?[a-z]*[-]?[a-z0-9\\-]*)(\\.[a-z0-9\\-]*)?(__[a-z0-9]*[-]?[a-z0-9\\-]*)?(--[a-z0-9]*[-]?[a-z0-9\\-]*)?(\\:[a-z]*)*$", {
      resolveNestedSelectors: true
    }],
    // declaration strict variable
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "fill", "stroke"], {
        ignoreKeywords: ["currentColor", "transparent", "inherit"],
      }
    ],
    // order
    "order/properties-alphabetical-order": true,
    // scss
    "scss/at-rule-no-unknown": true,
    "at-rule-empty-line-before": [
      "always", {
        "ignoreAtRules": ["else", "import"],
        "except": ["inside-block", "blockless-after-same-name-blockless", "blockless-after-blockless", "first-nested"],
        "ignore": ["after-comment", "inside-block"],
      }
    ],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-else-empty-line-before": "never",
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/double-slash-comment-inline": "never",
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/selector-no-redundant-nesting-selector": true
  }
};
