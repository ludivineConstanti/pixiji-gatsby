# 🌸 Pixiji

This website helps you to train your kanjis (characters from the Japanese writing system) knowledge. But that's mainly an excuse to create interactive pixel art.

![Homepage screenshot](https://user-images.githubusercontent.com/24965333/116855558-e27d4900-abf9-11eb-85e8-5defb196eb01.png)

The ⚡⚡⚡ mdDocumentation folder ⚡⚡⚡ contains some observations made during the project (bugs, research...). Other observations are made in the code itself as comment.

I used the code of an other repository to make that one (I started "from scratch" again when I started using gatsby) you can see the previous git history on [this repository](https://github.com/ludivineConstanti/Pixiji).

This is a portfolio project, so some feature were created, just to make the website easier to go through:

- A cheating mode, that you can change in the menu, is on by default and change the answer's colors to show the right one.
- You can finish or restart the quiz just by clicking on one button (also in the menu, but only visible when you are playing the quiz).
- You have access to all the quizzes (no content is locked).

And some others are following the original concept of being a learning experience:

- The quiz is randomized, so each time you reload, you get different questions.
- It keeps track of the wrong answers, so it will keep asking the same question over and over until you answer correctly.
- The pixel art on the right (when you play the quiz) show you the answers again (and their translation), if you want to spend more time looking at them.
- You can see japanese characters (and their prononciation + translation) on every page of the website (it reacts on hover).

## 🤓 Things I learned:

- Redux toolkit makes it easier to write code and in a more succinct way.
- Styled-Components can help you style your React components in JavaScript (I didn't know it existed).
- Animation libraries are great (I mainly used CSS animations before, which are much more limited, and started trying to do things on my own, with JavaScript before reading that GSAP could make that so much easier).
- It's better to use transform properties for animation (causes less bugs and is more performant).
- It's better to use a toolset that works well together: I used GSAP at the beginning of the project, because that was the main library that I heard of. Afterward, I learned about framer-motion and it made a lot of things less complicated and shorter to write (I needed to use hooks to keep the animation state in memory. ref to know which element to animate, and then my animation didn't properly update when a prop updated... framer motion made a lot of that easier).
- Using more libraries simplifies the code, but make it harder to find what you want (small documentation, small community, limited options...)
- Too much organisation is not necessarily good (I tried to organise my state in advance, without having any real reason to, and same thing for writing code again afterward, I was ready to rechange a lot of the structure, when it wasn't necessary).
