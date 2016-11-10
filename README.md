# React Universal Boilerplate

## About the project

The project is heavily dependent on the `universal-webpack` npm package and its sample project: [https://github.com/halt-hammerzeit/webpack-react-redux-isomorphic-render-example](https://github.com/halt-hammerzeit/webpack-react-redux-isomorphic-render-example)

### Short notes

- The source files in the project are used both by the server side rendering, and the client side rendering
- The static node server is run with nodemon, which means that each time an existing file is updated, the server will restart automatically (it takes ~10 seconds)






## Working with the project

### Install the project

Instead of using ```NPM``` for package management we use ```yarn```, because it offers more consistency amongst machines and it is a lot quicker ([https://t.co/msop1jaV0y](https://t.co/msop1jaV0y))

Check this article to see how you can install yarn: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

    $ yarn install

### Run dev mode

    $ npm run dev

### Build production state

    $ npm run production

### Run the client side unit tests

    $ npm run test:client






## Dev notes

- The site is available on http://localhost:3000, the API is available on http://localhost:3002
- It makes sense to have 2 tabs open in `Terminal`, and run the dev mode command in one, and the tests in the other one
- The app is using (HMR)[https://webpack.github.io/docs/hot-module-replacement-with-webpack.html], which in a nutshell improves DX by automatically reloading the CSS files and JS files in the browser without page reload, and without loosing application state or history
- The Node Web server serving the static assets, and proxying the web page server and the API server is being run by Nodemon, which automatically restarts the web server each time a static file is being changed. The web server may take roughly 10 seconds to restart




## Dev stack

- React
- React-router
- Redux as Flux
- Isomorphic (universal) rendering
- Webpack
- Development mode: hot reload for React components, hot reload for Redux reducers
- SASS and Foundation







## Testing

### Client side unit testing tools

- Karma, Karma Webpack and Karma-Chrome-Launcher
- Mocha
- Expect
- Enzyme and React Addons Test Utils

The client side testing related config can be found in the ```karma.config.js``` file. The client side unit test files can be found under ```test/client``` folder.

#### To run the client side tests:

    $ npm run test:client

### Server side unit testing tools

**TBA**






## Developer To dos

- Set up server side testing and info to README
- Add the favicon and touch icon set to the layout
- Add mock JSON API for organisers
- Add organisers to routing






## Dev style

## Editor config

There is a `.editorconfig` file in the root of the project folder with some sensible defaults. Please don't defer from those without discussing it with the team first.

## Git

**TBA**

### Markup

**TBA**

### JS

**TBA**

### Styling

**TBA**

### Unit tests

When writing unit tests (both client and server side) please make sure your unit test file locations match the source folder structure.

**For this component:**

    code/client/components/header.js

**The unit test is here:**

    test/client/components/header.test.js






## Credit

This project is based on the great work of Nikolay Nikolaev. Thanks Nikolay :)
