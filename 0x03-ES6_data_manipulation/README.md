![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20241017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241017T233633Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=674c466e08a596acec02cbe63b97dc5a5ae224f07f4932619c7aba6603dfb5f3)

## Resources

**Read or watch**:

-   [Array](https://intranet.alxswe.com/rltoken/bcXqK1IaIHtrZ45sv0RxsQ "Array")
-   [Typed Array](https://intranet.alxswe.com/rltoken/YZ5RtzAPTaWtF00MYbXuVw "Typed Array")
-   [Set Data Structure](https://intranet.alxswe.com/rltoken/Ch8vq39y9QnlTMr8CymgEg "Set Data Structure")
-   [Map Data Structure](https://intranet.alxswe.com/rltoken/W29MV3f8Ii4HmeJSALNIpw "Map Data Structure")
-   [WeakMap](https://intranet.alxswe.com/rltoken/pSetFVFeIR660GPE0flPdg "WeakMap")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/vFyWo9TJ_4ypOC6uPi2low "explain to anyone"), **without the help of Google**:

-   How to use map, filter and reduce on arrays
-   Typed arrays
-   The Set, Map, and Weak link data structures

## Requirements

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
-   All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration files

Add the following files to your project directory

### `package.json`

Click to show/hide file contents

```

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js &amp;&amp; jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### `babel.config.js`

Click to show/hide file contents

```

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`

Click to show/hide file contents

```

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

### and…

Don’t forget to run `$ npm install` when you have the `package.json`