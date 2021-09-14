# Research illustration 🎨

The design part of the illustration process are not described here (since this is more focused on the coding part) but all illustrations were made by myself, based on research between pixel art and the almost square shape of kanjis (Japanese characters that were taken from the Chinese writing system).

## 1️ First approach 

I made a first try to see if it was possible to create those illustrations the way I wanted (see my previous github repo [here](https://github.com/ludivineConstanti/pixiji_test_visual/blob/main/html/index.html).  

This was before I started learning React, so I just made a lot of div manually. I could also have done it with svg, but each svg is centered based on its parent element (which I don't want and making one svg for each square ruins the point) and I also need to add text (the kanji, its pronounciation and its translation) in the square (just the kanji in normal state, and the other informations on hover). Which is why I think divs are more suitable.

I used a grid system where I just define how big the div container is, and how many columns and rows it has, and then I define how much space each div should take depending on there class (1 column, 2 columns...). I then put a border width the same color as the background to have the state where you can not see the pixel art. This way the colored square looks centered inside. I then put a border width of 0 when I want to show the visual properly (the illustration is first hidden when a user starts a quiz and appears little by little when he / she answers correctly).

### Hidden
![1_hidden](https://user-images.githubusercontent.com/24965333/111910251-e9446800-8a60-11eb-8500-1861a90fe43a.png)

### Appearing
![2_in_process](https://user-images.githubusercontent.com/24965333/111910263-f6f9ed80-8a60-11eb-868f-11cff79d58a9.png)

### Revealed
![3_shown](https://user-images.githubusercontent.com/24965333/111910271-feb99200-8a60-11eb-91e9-9f7ed6790ab7.png)

### Pros 👍 and cons 👎
✔️ It works  
✔️ As long as the parent div has the right aspect ratio, it can scale properly  
❌ There's a lot of repetitive code (each div written manually).  
❌ Transforming an illustration in that format is a bit painful (it works only if the parent div has the right dimensions, and if the squares are placed correctly, if there's one div that is where it shouldn't or is the wrong dimension, it destroys the rest).  
❌ It's not possible to make the square grow bigger or smaller (for animation purpose...) otherwise the layout of the rest of the divs is broken.  
❌ I need to add unnecessary divs (with transparent background) to have the right spacing between divs

## 2️ Second approach

After some thinking, I kept the same approach, with a few variations:
* The divs are now React components (I have one Square component for the divs that should just have their size animated and another MainSquare component for the ones that contains Japanese characters).  
=> This allows me to change the individual animations of the divs in those 2 main files.
* I now don't use span for everything, I indicate the starting column and starting row for every square.  
=> I was happy to have a system where every square is placed automatically (as long as you put them into the right order), only using span, for the grid, but this makes it mandatory to add divs also for the empty spaces (which is a waste)and the entire picture is ruined if one div is the wrong size or at the wrong place. Indicating the starting row and column also makes it easier to know which square goes where when I need to modify the data array of the illustration, later.
* I use an array of data to generate the illustrations.  
This still makes it a very manual process, but I don't know how to automate it better, since I need to: 
  * group the squares together (they appear per group when you answer the quiz, it's not so relevant for illustrations that are used as deco, like for the home page, but I still made them the same way to keep one system for everything).
  * Indicate to which kanji they should react (the first group react to the first one, so it appears when you answer the first question of the quiz, it needs an array of kanjis as an argument and then the square show up or disappear based on the length).
  * Define the position, size and color of squares individually (which would be possible with the svg, but they give less freedom with animation, to my knowledge).
  * Differentiate between the squares that have characters in them and those who don't
  * Add references for animation (I used react's ref at the beggining, to use it with GSAP, I switched to framer-motion later, so I don't need to add those in the props, but I might add more animations later that might need custom props).
* The illustrations are generated by a function
=> Since I use an array of data, function was the next logical step
* Each illustration has it's own component where I give the formatted data and it uses it to create it.
=> This part might have been possible to automate more, since the process is very similar, but it was less so, at the beggining, and it works that way, so I leave it like that for now.