# Tile

A react app using storybook to render and test components.
On push to github, Travis CI is run, if tests pass the Storybook
is deployed to github pages.

### Run

```
yarn install && yarn storybook
```

### Tests

```
yarn test
```

### Coverage

```
yarn test && open ./coverage/lcov-report/index.html
```

### Lint

```
yarn lint
```

### Deploy

```
yarn deploy-storybook
```

### View on Github pages

```
open https://alanmulhall.github.io/Tile
```
