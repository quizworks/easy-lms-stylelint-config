"use strict";

module.exports = {
  "extends": "stylelint-config-standard-scss",
  "plugins": [
    "stylelint-declaration-strict-value",
    "stylelint-order",
  ],
  "rules": {
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
    "import-notation": null,
    "max-nesting-depth": 3,
    "media-feature-name-no-vendor-prefix": true,
    "order/properties-alphabetical-order": true,
    "number-leading-zero": "never",
    "rule-empty-line-before": ["always", {
      except: ["after-single-line-comment", "inside-block-and-after-rule", "first-nested"],
      ignore: ["after-comment", "inside-block"]
    }],
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'fill', 'stroke'],
      {
        expandShorthand: true,
        ignoreValues: {
          '': ['currentcolor', 'transparent', 'inherit'],
        },
      },
    ],
    // bem
    "selector-class-pattern": ["^([\\.\\%]?[a-z]*[-]?[a-z0-9\\-]*)(\\.[a-z0-9\\-]*)?(__[a-z0-9]*[-]?[a-z0-9\\-]*)?(--[a-z0-9]*[-]?[a-z0-9\\-]*)?(\\:[a-z]*)*$", {
      resolveNestedSelectors: true
    }],
    "selector-max-id": 0,
    "selector-max-type": 2,
    "selector-no-qualifying-type": true,
    "string-quotes": "single",
    "value-no-vendor-prefix": true,
    // scss
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/selector-no-redundant-nesting-selector": true
  }
};
