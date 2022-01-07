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

## Don't use Redux to store values that do not need to change

## Use useMemo for the other ones

## Use .attrs for styled component (it avoids the warning)
