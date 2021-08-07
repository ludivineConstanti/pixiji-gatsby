# Adding Gatsby

I decided to start using Gatsby for this project, since I want to improve my knowledge on it. I first thought about modifying my current project directly, but after trying it out and deciding that it would be quite tricky to debug, I decided to start from the Gatsby starting project directly, and transfer it little by little.

## Using absolute path

[There is a Gatsby plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-root-import/) that allows us to use absolute paths rather than relative ones.

## Adding Redux

[The Gatsby documentation](https://www.gatsbyjs.com/docs/adding-redux-store/) specifies that you just need to add your redux store, both in the gatsby-ssr.js file (which is used for the server side rendering) and in the gatsby-browser.js file (which is used for the client side rendering) with the following code.

```JavaScript
import { store } from "./src/store"
export const wrapRootElement = store
```

That actually didn't work, I am not sure if it was because I am using redux-toolkit or not, but I got the error

```
Error in function throwOnInvalidObjectType in ./node_modules/react-dom/cjs/react-dom.development.js:13231
Objects are not valid as a React child (found: object with keys {dispatch, subscribe, getState, replaceReducer, @@observable}). If you meant to render a collection of children, use an array instead.
```

when just trying to have an empty store (I tried first with the store I use in Pixiji, then tried with an empty one when it didn't work). I then decided to google redux-toolkit gatsby and to imitate the [starting kit](https://www.gatsbyjs.com/starters/saimirkapaj/gatsby-redux-toolkit-typescript-starter) I found which uses them both. In this one, it says to use this code (in gatsby-browser.js and gatsby-ssr.js) instead.

```JavaScript
 import React from 'react';
 import { Provider } from 'react-redux';
 import { store } from 'src/store';

 export const wrapRootElement = ({ element }) => {
   return <Provider store={store}>{element}</Provider>;
 };
```
