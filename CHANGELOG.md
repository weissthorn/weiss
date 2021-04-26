# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.2.0]

### Added

- `function-parentheses-space-inside` rule
- `scss/at-import-partial-extension-blacklist` rule
- `declaration-block-properties-order` rule
- `selector-no-vendor-prefix` rule
- `media-feature-name-no-vendor-prefix` rule
- `at-rule-no-vendor-prefix` rule

### Fixed

- Sorted stylelint rules alphabetically in config
- `max-nesting-depth` rule set to 1 to match Sass Guidelines NestingDepth max_depth: 1 rule
- Cleaned up comments in `failing-test-case.scss`
- Declaration order now sorted alphabetically in `passing-test-case.scss`
- Updated tests to account for new rules

### Removed

- `block-closing-brace-newline-after` rule
- `no-extra-semicolons` rule
- `string-no-newline` rule

## [0.1.0]

### Added

- Initial release
