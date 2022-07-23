# Research performance 📝

## 💡 Lighthouse score

### Use Gatsby 💜

After testing the website, in incognito mode, before and after adding Gatsby, the metrics says that performance is actually worse afterward.

Which could make sense since I am testing the localhost version for both, which is not [as optimized](https://www.gatsbyjs.com/docs/how-to/performance/audit-with-lighthouse/) as the launched version, when using Gatsby.

After running yarn build and yarn serve, the results are more positive

![performance_screenshot](https://user-images.githubusercontent.com/24965333/148588401-12861a7c-e83e-4c6d-938f-e1a758ff5bcb.jpg)

### Performance gained 45 points ✅

What disappeared / improved from the "Opportunity" and the "Diagnostics" list:

#### Opportunity

- 0.43s Eliminate render-blocking resources

#### Diagnostic

- Avoid chaining critical requests 6 chains found => down to 3
- Keep request counts low and transfer sizes small 10 requests • 333 KiB => there's now 8 requests more but their size diminished by 130 KiB

### Accessibility gained 13 points ✅

There is 5 more audits that passed

### Best practices gained 7 points (the maximum it could gain) ✅

- Warning for "Browser errors were logged to the console" disappeared
- Warning for "Missing source maps for large first-party JavaScript" disappeared

### SEO gained 10 points (the maximum it could gain) ✅

- Warning for "Document does not have a meta description" disappeared
- Warning for "Page is blocked from indexing" disappeared

Afterwards, I read about [loadable components](https://loadable-components.com/), which splits the code to avoid the performance drawback caused by flexible layouts components. I realised that I was importing all the data for every illustration page into a single index file, that exported the needed data for the current illustration, based on a prop. I therefore modified the current structure to import all the data individually, in every file where it is needed, instead of the previous centralized structure, and then looked to see if it made a lot of difference for the performance.

From the metrics shown in lighthouse it looks like this change did not have a huge impact, the overall Performance score is the same (85) and some metrics did get slightly better, but other also got slightly worse (I decided to not write them down, since I made multiple changes for the before and after versions that I am comparing, like adding 3 more pages, so this could also influence the test slightly).

I think there's 2 possible scenarios:

1. The change did not matter so much, for the performance metric

The files that contains the illustration's data is made of various objects that describes how the component should be created. Their size might just not be big enough for it to make a huge difference (there's currently 10 files with an average of 9KB per file, so it's importing 90kb instead of 9 which is still smaller than some libraries).

2. Gatsby already optimized this out of the box

I found [this article](https://www.gatsbyjs.com/blog/flexible-fine-grained-code-splitting-with-gatsby-loadable-components/) which explains Gatsby helps with code splitting (although not in every scenario). This is also visible in the metrics from the 1st test, which shows that reducing the unused JavaScript could improve the speed of the website by 0.28s (which confused me at first because I thought that all the code in this repository is used through the website, but if the entire code is loaded, just for one page, instead of just the code for the home page, on load, then it makes a lot of sense).

I am still not 100% sure about which of those scenarios is relevant, since

https://dev.to/itmayziii/better-performance-using-dynamic-code-splitting-in-gatsby-with-loadable-components-6am

In the network metrics, there doesn't seem to be a big difference in the size of the files that were transferred, in the before and after version.

## Get every constant value that can be put outside of a React component, outside of it

At the beginning of the project, I forgot that React runs the code that is inside of a component every time it is updated, and I also forgot that it was possible to use informations stored in a variable, in a component, while having this one out of the component. During the project, I sometimes got warning from React, because some of the code that was executed on each update was very expensive, and even made the website crash, at some point. After this, I became more aware of the importance of understanding React lifecycle and to structure my code to update as few things as possible, when the component needs to render again.

## Don't use Redux to store values that do not need to change

## Use useMemo for the other ones

## Use .attrs for styled component (it avoids the warning)

The downside that styled-components can have is that when there is one property that changes between 2 components, it can not mutualize the common style and separate the property that is different or update. So if a component uses 50 lines of css code, and one of those lines changes or updates, styled component will generate the 50 lines of the css class again, instead of isolating the one that should not be updated. This is of course very bad for performance which is why a warning will show up in the console if this case scenario is present in the code. I had this issue for the divs that form the pixel style illustrations through my website, which are all very similar, but need different colors, sizes and positions. There is 2 solutions for this issue, the 1st one is to put this style inline, so that the common style is still inside of styled-components (which still optimizes it, so it is better practice to use it) and the 2nd is to use the [.attr (which is provided by styled-components)](https://styled-components.com/docs/basics#attaching-additional-props) , and put the style that changes often inside of it. I tried to find out which option is better, but was not able to, the only thing that I found, is a discussion on GitHub which explains why animating styles (or using a lot of unique ones) with styled-components is very expensive, but it did not actually explain the difference between using inline style and using .attr. I decided to use .attr instead of inline style, because I thought that if the authors of the library offered this option, they would at least aim for it to have a similar, if not better performance.

Here is the code that I ended up using for the small squares that are part of the illustrations. There is no code between the backquotes at the end, because it turns out that they have no style in commun.

```JavaScript
export default styled(motion.div).attrs<Attrs>(props => ({
  style: {
    backgroundColor: props.s.color,
    gridColumnStart: props.s.columnStart,
    gridRowStart: props.s.rowStart,
    gridColumnEnd: `span ${props.s.size}`,
    gridRowEnd: `span ${props.s.size}`,
  },
}))<Attrs>``
```

I also used .attr for the stars, which had some similar styles between them.

```JavaScript
export const SStar = styled(motion.div).attrs<Attrs>(props => ({
  style: {
    backgroundColor: props.s.color,
    height: `calc(${squareUnitM} * ${props.s.size})`,
    width: `calc(${squareUnitM} * ${props.s.size})`,
    top: `${props.s.top}vh`,
    left: `${props.s.left}vw`,
  },
}))<Attrs>`
  position: absolute;
  ${breakPointT} {
    height: calc(${squareUnitT} * ${props => props.s.size});
    width: calc(${squareUnitT} * ${props => props.s.size});
  }
  ${breakPointD} {
    height: calc(${squareUnit} * ${props => props.s.size});
    width: calc(${squareUnit} * ${props => props.s.size});
  }
`
```

## Converting the illustration data to json files, instead of javascript

This does not seem to make a huge difference, the performance improved only by one point, after making the change, and I am not sure how reliable that information is, since the lighthouse are not always 100% consistent between the builds, so it could also have had no impact on the performance, which surprised me, since I thought that even if the file size was not really reduced, by going from javascript to json, having less javascript to execute would make a difference... but maybe the files were just not large enough to have a real impact.
