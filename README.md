# stylelint-config-insyde
> Shareable config for stylelint.

Follows the rules from  [Easy LMS SCSS Styleguide](https://github.com/quizworks/scss-styleguide).

## Usage

Set your stylelint config to:
```
{
  "extends": "stylelint-config-easy-lms"
}
```
## Personal overrides

Change/override rules by adding a `"rules"` key to your config.

For example, to change the indentation to tabs:

```
{
  "extends": "stylelint-config-insyde",
  "rules": {
    "indentation": "tab"
  }
}
```

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
