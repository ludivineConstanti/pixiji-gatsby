# Research organisation of the quiz state in redux ๐๏ธ

Initially, I stored all the informations that I needed for the quiz in redux: the title, slug, number of question, answers with their English and Japanese text... The raw data was stored in an external JavaScript file and then reorganised in redux. Later, I learned that storing too much information in JavaScript is not a great idea, since it's heavier and is render-blocking.

## Removing the Kanjis data from JavaScript

I decided to stock the kanjis in a json file, and retrieve the informations from there with graphQL, since I now added Gatsby to the website, to obtain a better performance and a better SEO. I then restructured the quiz state stored with redux so that only the id of the Kanjis are used (under the name kanjiId, since graphQL assigns an id to everything by default and overwrite any custom id property).

### Before:

```JavaScript
arrAnswers: [
    { id: 43, kanji: "่ณ", en: "ear",      kana: "ใฟใฟ",   kanaEn: "mimi",  quizId: 1 },
    { id: 61, kanji: "ๅญฆ", en: "study",    kana: "ใใ",   kanaEn: "gaku",  quizId: 1 },
    { id: 19, kanji: "ๅฐ", en: "little",   kana: "ใใใ", kanaEn: "shล",   quizId: 1 },
    { id: 55, kanji: "ไผ", en: "rest",     kana: "ใใใ", kanaEn: "kyลซ",   quizId: 1 },
    { id: 35, kanji: "่ซ", en: "insect",   kana: "ใใ",   kanaEn: "mushi", quizId: 1 },
    { id: 42, kanji: "็ฎ", en: "eye",      kana: "ใ",     kanaEn: "me",    quizId: 1 },
    { id: 59, kanji: "ๆ", en: "sentence", kana: "ใถใ",   kanaEn: "bun",   quizId: 1 },
    { id: 5,  kanji: "ไบ", en: "five",     kana: "ใ",     kanaEn: "go",    quizId: 1 },
    { id: 77, kanji: "้จ", en: "rain",     kana: "ใใ",   kanaEn: "ame",   quizId: 1 },
    { id: 6,  kanji: "ๅญ", en: "six",      kana: "ใใ",   kanaEn: "roku",  quizId: 1 },
    { id: 72, kanji: "็ซน", en: "bamboo",   kana: "ใใ",   kanaEn: "take",  quizId: 1 },
    { id: 28, kanji: "็ง", en: "autumn",   kana: "ใใ",   kanaEn: "aki",   quizId: 1 },
    ]
```

### After:

```JavaScript
arrAnswers: [43, 61, 19, 55, 35, 42, 59, 5, 77, 6, 72, 28]
```

## Removing the Quizz data from JavaScript

The quiz data is a lot less heavy than the kanji data, since it only contains the title, id and slug for 3 quizzes, but querying it with gatsby was also an improvement, since I used a yaml file to create the quizzes pages programatically, with gatsby, and leaving the JavaScript file would have meant that the data used through the website for the same content, comes from 2 different sources, which is of course really bad to update it and make sure both are always matching.

The second reason I wanted to modify the quiz structure, is that the old used keys of the format `quiz${quizId}` to identify which quiz is the one I need, which is quite bad, since I would need to add new keys every time I want to add a quiz to the website and this way of accessing the quiz was generating a lot of typescript errors. Also, it was initializing all the quiz states at the beggining, when it was not yet needed, the new version now starts with an empty array and adds new quiz data only when the user go to the quiz page that needs it.

### Before

```JavaScript
quiz1: { dataQuiz: [...], totalQuestions: 7, totalOptions: 80, ...}
quiz2: { dataQuiz: [...], totalQuestions: 0, totalOptions: 160, ...}
quiz3: { dataQuiz: [...], totalQuestions: 0, totalOptions: 200, ...}
```

### After

```JavaScript
[{ quizId: 1, formattedQuiz: [...], totalQuestions: 7, totalOptions: 80, ...}]
```

I also reduced the number of informations, about the quiz in general, since I can now query them with graphQL:

### Before

```JavaScript
dataQuizzes: [
    { id: 1, slug: "first-grade", title: "1st grade" },
    { id: 2, slug: "second-grade", title: "2nd grade" },
    { id: 3, slug: "third-grade", title: "3rd grade" },
]
currentQuizId: 1
currentSlug: "first-grade"
quiz1: { dataQuiz: [...], totalQuestions: 7, totalOptions: 80, ...}
quiz2: { dataQuiz: [...], totalQuestions: 0, totalOptions: 160, ...}
quiz3: { dataQuiz: [...], totalQuestions: 0, totalOptions: 200, ...}
```

### After

```JavaScript
currentQuizId: 1,
data: [{ quizId: 1, formattedQuiz: [...], totalQuestions: 7, totalOptions: 80, ...}]
```
