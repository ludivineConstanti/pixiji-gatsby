# Research organisation of the quiz state in redux 🗄️

Initially, I stored all the informations that I needed for the quiz in redux: the title, slug, number of question, answers with their English and Japanese text... The raw data was stored in an external JavaScript file and then reorganised in redux. Later, I learned that storing too much information in JavaScript is not a great idea, since it's heavier and is render-blocking.

## Removing the Kanjis data from JavaScript

I decided to stock the kanjis in a json file, and retrieve the informations from there with graphQL, since I now added Gatsby to the website, to obtain a better performance and a better SEO. I then restructured the quiz state stored with redux so that only the id of the Kanjis are used (under the name kanjiId, since graphQL assigns an id to everything by default and overwrite any custom id property).

### Before:

```JavaScript
arrAnswers: [
    { id: 43, kanji: "耳", en: "ear",      kana: "みみ",   kanaEn: "mimi",  quizId: 1 },
    { id: 61, kanji: "学", en: "study",    kana: "がく",   kanaEn: "gaku",  quizId: 1 },
    { id: 19, kanji: "小", en: "little",   kana: "しょう", kanaEn: "shō",   quizId: 1 },
    { id: 55, kanji: "休", en: "rest",     kana: "きゅう", kanaEn: "kyū",   quizId: 1 },
    { id: 35, kanji: "虫", en: "insect",   kana: "むし",   kanaEn: "mushi", quizId: 1 },
    { id: 42, kanji: "目", en: "eye",      kana: "め",     kanaEn: "me",    quizId: 1 },
    { id: 59, kanji: "文", en: "sentence", kana: "ぶん",   kanaEn: "bun",   quizId: 1 },
    { id: 5,  kanji: "五", en: "five",     kana: "ご",     kanaEn: "go",    quizId: 1 },
    { id: 77, kanji: "雨", en: "rain",     kana: "あめ",   kanaEn: "ame",   quizId: 1 },
    { id: 6,  kanji: "六", en: "six",      kana: "ろく",   kanaEn: "roku",  quizId: 1 },
    { id: 72, kanji: "竹", en: "bamboo",   kana: "たけ",   kanaEn: "take",  quizId: 1 },
    { id: 28, kanji: "秋", en: "autumn",   kana: "あき",   kanaEn: "aki",   quizId: 1 },
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
