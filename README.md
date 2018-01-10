# Redux Template (Work in Progress)

This template is extended from [redux-realworld example](https://github.com/reactjs/redux/tree/master/examples/real-world) which is built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX.  See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Getting Started

### `npm install`

to install all the dependencies required by this template.

### `npm start`

to run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

to build the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Tools and Libraries Integrated

### [React](https://reactjs.org/)

### [Redux](https://redux.js.org/docs/introduction/)

### [ESLint](https://eslint.org/)

### [SCSS](http://sass-lang.com/)

### [Webpack](https://webpack.js.org/)

### [Jest](https://facebook.github.io/jest/)

## Template Structure

### `config`

contains configuration files generated by create-react-app by default which contains configurations of ENV, path and [webpack](https://webpack.js.org/)

### `scripts`

contains the scripts that are runnable via `npm`. The list of command available can be checked in [package.json](/package.json)'s scripts section.

### `src`

contains the source code and has the folder structure like so

### `src` Folder Breakdown

#### [actions](/src/actions)

This folder contains all the redux action creators. In redux, reducers are meant to be simple and business logic belongs in action-creators.

#### [components](/src/components)

This folder contains all the dumb/presentational components and are concerned with **how things look**. They are encouraged to be just pure functional components that do not have states on their own but receive props parents from their respective parent smart components to receive data and callbacks for optimal performance. Learn the differences between react components [here](https://stackoverflow.com/questions/40703675/react-functional-stateless-component-purecomponent-component-what-are-the-dif). If you wanna know why stateless functional components or Pure components are better presentational components, read [here](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc) and [here](https://medium.com/@gajus/this-is-misleading-f1de2b4a06ca).

#### [containers](/src/containers)

This folder contains all the smart components. Smart components are the medium between redux store and react components are concerned with **how things work**. They are the wrapper/parent components of the presentational components and there should not be any DOM markup (e.g, `<p>` or `<input />` tags) but rather a few wrapping `<div>` tags and should not have any styles either. Smart components are usually the wrapper components for each individual URL endpoints (For example, `UserPage` is for `/:username` and `RepoPage` is for `/:username/:reponame`).

#### [middleware](/src/middleware)

This folder contains all the custom [Redux middlewares](https://redux.js.org/docs/advanced/Middleware.html).  Redux middlewares in short provides a third-party extension point between dispatching an action, and the moment it reaches the reducer and commonly used for logging, crash reporting, communicating with asynchronous API, etc. In this template, instead of dispatching every status of an asynchronous API request (REQUEST, SUCCESS, FAILURE) in the action creators similar to this [example](https://github.com/reactjs/redux/blob/master/examples/async/src/actions/index.js), [api.js](/src/middleware/api.js) dispatches those actions for every APIs to avoid duplicate code.

#### [reducers](/src/reducers)

It's important to understand that your entire application really only has one single reducer function: the function that you've passed into createStore as the first argument.
However, since redux reducers are just functions that generally update the state of the app, they can be split into different files for maintainability. Here in this template, [index.js](/src/reducers/index.js) is the `root reducer` that combines all the `slice reducers` such as [entities.js](/src/reducers/entities.js). Read more about splitting the reducers [here](https://redux.js.org/docs/recipes/reducers/SplittingReducerLogic.html).

#### [store](/src/store)

Store contains the files responsible for the redux initial redux store creation and the integration of middlewares into the store.

#### [styles](/src/styles)

This folder contains all the scss files that do not have direct relationships with the components. For example, styles for the overall individual page do not have a direct relationship with the components that make up the page and therefore, are defined in this folder. For styling of individual components, we can create a `.scss` file on the same directory level together with the respective component.

## Extras

For large scale production app, [sound-redux](https://github.com/andrewngu/sound-redux) is a well-known open source react project.

## References

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

- [Normalizing State Shape](https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)

- [Redux Middlewares](https://redux.js.org/docs/recipes/advanced/Middleware.html)

- [Testing](https://redux.js.org/docs/recipes/recipes/WritingTests.html)

- [Splitting Reducer Logic](https://redux.js.org/docs/recipes/reducers/SplittingReducerLogic.html)

- [Refactoring Reducers Example](https://redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html)
