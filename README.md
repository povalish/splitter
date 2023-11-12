# Pomidoro Timer
Text description about the app

## Setup env
Links and description to setup Node env and ReactNative env

## How to run each project
Commands and description

## Install dependencies
```bash
$ yarn install
$ cd apps/desktop && yarn install
```

### Run storybook for React components
```bash
$ npx nx run storybook-react:build
$ npx nx run storybook-react:start
```

### Run storybook for React Native components
```bash
# open simulator by your own hands (just for me)
$ npx nx run storybook-native:run-ios -- --simulator="iPhone 14"
$ npx nx run storybook-native:run-android
$ npx nx run storybook-native:start # start dev server
```