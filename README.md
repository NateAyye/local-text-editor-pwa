# LOCAL TEXT EDITOR PWA

![GitHub](https://img.shields.io/github/license/NateAyye/local-text-editor-pwa?label=License)

[&#x21e8; Live Site Here &#x21e6;](https://still-waters-26108-e681736f7556.herokuapp.com/)

## Description

CLI to generate a simple Logo for mocking up sites so that developers don't have to go scrounging/paying for a logo.

## Table of Contents

- [LOCAL TEXT EDITOR PWA](#local-text-editor-pwa)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Scripts](#scripts)
  - [Usage](#usage)
  - [Examples](#examples)
    - [Main Page](#main-page)
    - [Install Prompt](#install-prompt)
    - [Installed Application](#installed-application)
    - [Editor in use with JS](#editor-in-use-with-js)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

## Scripts

```json
"scripts": {
    // Run the server and client concurrently in development mode
    "start:dev": "concurrently \"cd server && npm run start\" \"cd client && npm start\"",
    // Build the front end and start the server in production mode
    "start": "npm run build && node server/server.js",
    // Start the server in development mode
    "server": "cd server nodemon server.js --ignore client",
    // Build the front end
    "build": "cd client && npm run build",
    // Install the server and client dependencies. the post install script that will be run after the initial dependencies are installed.
    "install": "cd server && npm i && cd ../client && npm i",
    // Run the client in development mode
    "client": "cd client && npm start"
  },
```

## Usage

1. Clone the repo
2. Run `npm install`
3. Run `npm run start:dev` to start the server and client concurrently in development mode
4. Run `npm run build` to build the front end
5. Run `npm run start` build the front end then start the server in production mode

## Examples

### Main Page

![Main page of the application](https://github.com/NateAyye/local-text-editor-pwa/blob/main/assets/app_1.png?raw=true)

### Install Prompt

![Install Prompt of the application](https://github.com/NateAyye/local-text-editor-pwa/blob/main/assets/install.png?raw=true)

### Installed Application

![Installed Application ](https://github.com/NateAyye/local-text-editor-pwa/blob/main/assets/installed.png?raw=true)

### Editor in use with JS

![Editor in use with JS ](https://github.com/NateAyye/local-text-editor-pwa/blob/main/assets/installed2.png?raw=true)

## Contribution

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Basic Rules for contributing to this repo are gonna be held to standards with the [Contributor Convenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) Standards.

## Tests

Run `npm run test`

## License

Refer to the [MIT License](https://github.com/NateAyye/local-text-editor-pwa/blob/main/LICENSE) file within the root of the repository;

## Questions

Want to know me a little bit bette more? [NateAyye's Profile](https://github.com/NateAyye)

Want to get in contact with me?

- Send an email to nathanacuevas97@gmail.com
