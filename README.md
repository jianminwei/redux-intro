This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### App description
This is a simple app to demonstrate using Redux in React app. It is a simple counter incrementable by a button. It is implemented in 2 approaches. 

1. Uses pure React state to manage the counter.
2. Uses Redux and React-redux to manage the state.

Below are the git commit points. Checkout out different point to see the details.

* 672d3d8 (HEAD -> master, origin/master, DEV) Get rid of Warning: App(...): When calling super() in , make sure to pass up the same props that your component's constructor was passed.
* e8eeca2 Added Webpack Hot Module Reloader to src/index.js
* e93c1a5 Added redux-devtools-extension - good tool to see redux works
* 28d5fb1 Added INCREASE_COUNTER action creator and used it in dispatching the event in App
* aa7f603 Added INCREASE_COUNTER event and the event handler in the reducer
* abc4d36 Added initial redux, react-redux and the initial state. No actions yet
* 92ffded A simple update counter by button example
* ef502f7 Initial Environment Setup - No Development
* 82990b2 Initial commit from Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
