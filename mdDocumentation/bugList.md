# Bug List 😵

#### The square (child of the div in grid displayed) takes the entire width instead of taking the dimensions the CSS ask it to

=> I put the parent class name on the child as well, which made it have the grid settings as well  
=> Fixed by changing class

## The same dispatched action was executed multiple times (between 2 and 8)

=> Apparently, react components rendering multiple times is a common issue, which was, I believe, the origin of the problem, I read [an article](https://mariosfakiolas.com/blog/my-react-components-render-twice-and-drive-me-crazy/) that said that strict mode makes every component render twice in dev mode (but I am currently not using strict mode), [an other one](https://medium.com/unsplash/react-redux-performance-considerations-when-dispatching-multiple-actions-5162047bf8a6) that said that React component re-render every time a new action is dispatched  
=> I originally created a value in my React component, then dispatched the value, and then reused the values that I just updated, from the props (I thought always using the values from the store might be more consistent, having only one source for all informations). I then tried using the value directly instead of recuperating it from the store and it solved the rerender issue.

#### Disabling the button element not working properly

=> I used a state directly in the button element and set it to disabled when the user clicked on it, logically it only updated this one button
=> I used the parent element instead to decide if the elements are disabled or not, every time the element is rerendered (which happens when I click on one button, since I modify the state)

## Removing kanjis from the kanjis array, the illustration used for deco also remove it from the quiz

I thought the data array from the kanjis was not going to be affected if I remove some characters from it, in another file, but I was wrong. I then tried again with making a local copy of it, but it didn't work (since it was a dynamic one). After another try, using the spread opearator, in an array, to make a copy, it worked.

## Modifying the 1st element of an array in redux

=> I was not able to access the first element of the array I wanted to modify (tried accessing it by writing state.array[0], for some reasons it didn't work), I therefore decided to read the redux official documentation, to understand better how it work (so far I only used it based on the knowledge I got from the bootcamp I did) and I discovered redux toolkit which reduced the code by a lot, and is (in my opinion) easier to use. I then decided to use it and now the code works.

## False positive with .toBeDefined

I got confused about what .toBeDefined does, I thought it could be used to verify that an element is in the document. But it just checks if a value is not undefined (so null works too).  
=> I replaced it with toBeTruthy

## Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.

added the following code in the Layout component:

```Javascript
<Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@40700;900&   display=swap"
        rel="stylesheet"
    />
</Helmet>
```

and removed the following code from the customStyle file:

```Javascript
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap");
```

## VM878 react_devtools_backend.js:4049 You are trying to animate transformOrigin from "" to "23.7px 23.7px". is not an animatable value - to enable this animation set to a value animatable to 23.7px 23.7px via the `style` property.

I thought it was necessary to animate the transform-origin property, but actually it is possible to put it in the initial css, which avoids the incompatible types.
