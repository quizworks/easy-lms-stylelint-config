# stylelint-config-insyde
> Shareable config for stylelint.

## Usage

Set your stylelint config to:
```
{
  "extends": "stylelint-config-insyde"
}
```
## Personal overrides

Change/override rules by adding a `"rules"` key to your config.

For example, to change the indentation to spaces:

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