# 🌸 Pixiji

This website helps you to train your kanjis (characters from the Japanese writing system) knowledge. But that's mainly an excuse to create interactive pixel art.

![Homepage screenshot](https://user-images.githubusercontent.com/24965333/116855558-e27d4900-abf9-11eb-85e8-5defb196eb01.png)

The ⚡⚡⚡ mdDocumentation folder ⚡⚡⚡ contains some observations made during the project (bugs, research...). Other observations are made in the code itself as comment.

### This is a portfolio project, so some feature were created, just to make the website easier to go through:

- A "Use Dummy email" button (in the menu) allows you to log in a pre-existing account (which already has some scores, from the quizzes).
- A "Cheat mode" button (in the menu) is on by default and change the answer's colors to show the right one.
- It is possible to finish or restart the quiz just by clicking on one button (also in the menu, but only visible when you are playing the quiz).
- No content is locked (all quizzes are available, there is no need to attain a certain level at the 1st one to unlock the 2nd and so on...).
- The 404 page has links to my linkedin account and github repositories.

### And some others are following the original concept of being a learning experience:

- The quiz is randomized, so each time you reload, you get different questions.
- It keeps track of the wrong answers, so it will keep asking the same question over and over until you answer correctly.
- The pixel art on the right (when you play the quiz) show you the answers again (and their translation), if you want to spend more time looking at them.
- You can see japanese characters (and their pronunciation + translation) on every page of the website (it reacts on hover).
- If you click on the japanese characters that are displayed in the illustrations, more details will be shown (translation and use cases, and your scores, for this character, if you are logged in).

## Previous version

You can see the previous git history of this project on [this repository](https://github.com/ludivineConstanti/Pixiji), which contains the 1st version of this website.

## What changed since version n°1

- There's now a back-end that offers the option to create an account or login.
- The performance improved.

## ✏️ Related projects

You can find the [back-end of this project](https://github.com/ludivineConstanti/pixiji-data) on my github account, as well as a small [web scraper](https://github.com/ludivineConstanti/pixiji-web-scraper) that was created to gather the data used for the kanjis.
