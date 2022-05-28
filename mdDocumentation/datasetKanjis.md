# Dataset Kanjis

Originally, while making the concept for which kanjis should be displayed on the website, I took, the characters that are taucht in the first 3 years of Japanese primary school, with a [list that I found on Wikipedia](<https://en.wikipedia.org/wiki/Ky%C5%8Diku_kanji#First_grade_(80_kanji)>). The informations that are shown there being limited, I used a [2nd website](https://jisho.org/) as a reference, and proceeded to create a dataset, which contains the Janpanese character and informations about it, manually.

I then decided to rework the website, a few months after, and add more informations to the characters, so that a more detailed version about it and its meaning could be shown. As before, I started adding informations about it manually, before coming to the conclusion that it is a pretty inefficient process. In fact, since I am currently using 440 characters that need to be displayed on the website, depending on how long I spend on adding informations for each character, it could take me approximately 70 hours to add the data that I wanted. I therefore decided to think about the pros and cons of various ways of getting this additional data.

## Manual work

### Pros ✅

Manual work gives a lot of control over the result (I can choose which translation makes the most sense too me, which one I want to remove from the original source, and edit things in general, instead of having to take the content as is).

### Cons ❌

First it is time consuming, second, it is difficult to update later, if I change my mind on the information that I want.

## Premade dataset

### Pros ✅

I used a lot of premade dataset, during my work, the biggest advantage being that it takes the least amount of time, out of all the methods.

### Cons ❌

Premade data sets are made for different use cases and don't necessarily give the information that I need, of course, it's always possible to rework it programmatically, which doesn't take much time (removing informations that are not used in the website, and that just add weight to the file uselessely, change the properties names...) but if the information that I want is not inside the dataset, then it is pretty useless. And I did not find a premade dataset that contained examples for the different use cases of kanjis, which I wanted to add.

## API

### Pros ✅

It's already made, and therefore can help save time.

### Cons ❌

Using an API can be less straightforward than a dataset to use, since it's a bit more complex. Furthemore, it's adding an external dependency to the website, which I have no control other (in terms of security, expanding the information it gives, keep it hosted...).

## Web scraping

### Pros ✅

This allows a higher degree of customization than premade dataset and API (in my usecase, since I found most of the information that I needed on a website). This is just automatizing the way I already used to get data, (if I had found a dataset that already had the information I wanted in it, I would have used that dataset directly, since it's faster). This method can be good in the long term, since I can update it the data easily later.

### Cons ❌

Need a bit of time to set up, but less than doing it manually. However, with manual work, I still had more freedom, selecting the information that I want, which I can't do programatically, if I do not find some constant rule that I can apply with code.
