# ts-template

![CI](https://github.com/takkyuuplayer/ts-template/workflows/CI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Server-side TypeScript template repository

## How to generate

1. TypeScript Environment
   ```
   $ npm i -D typescript ts-node @types/node
   ```
2. Test Environment by Jest
   ```
   $ npm i -D jest @types/jest ts-jest
   $ npx ts-jest config:init
   ```
3. ESLint

   ```
   $ npm i -D eslint
   $ npx eslint --init
   ? How would you like to use ESLint? To check syntax and find problems
   ? What type of modules does your project use? JavaScript modules (import/export)
   ? Which framework does your project use? None of these
   ? Does your project use TypeScript? Yes
   ? Where does your code run? Browser
   ? What format do you want your config file to be in? JavaScript
   The config that you've selected requires the following dependencies:

   @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
   ? Would you like to install them now with npm? Yes
   ```

4. Prettier: [prettier/eslint\-plugin\-prettier: ESLint plugin for Prettier formatting](https://github.com/prettier/eslint-plugin-prettier#installation)
