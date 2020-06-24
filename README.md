# easy-lms-stylelint-config
> Shareable config for stylelint.

Follows the rules from  [Easy LMS SCSS Styleguide](https://github.com/quizworks/easy-lms-scss-styleguide).

## Usage

Set your stylelint config to:
```
{
  "extends": "easy-lms-stylelint-config"
}
```
## Personal overrides

Change/override rules by adding a `"rules"` key to your config.

For example, to change the indentation to tabs:

```
{
  "extends": "easy-lms-stylelint-config",
  "rules": {
    "indentation": "tab"
  }
}
```

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
