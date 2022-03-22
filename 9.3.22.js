const figlet = require('figlet');
// הודעה מסך פתיחה. לייבא קובץ פשוט.

//  להכין אראי עם מילים של עשר אותיות  
const words = ['Strawberry', 'Everything', 'Appreciate', 'Motivation'];
const answer = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*']
let selectedWord;
let failedTrials = 0;

function setRandomWord() {
  let randomNumber = Math.floor(Math.random() * 4);
  selectedWord = words[randomNumber];
}
setRandomWord();

function checkLetterInSelectedWord(letter) {
  let found;
  const splitted = selectedWord.split('');
  splitted.forEach((char, index) => {
    if (char.toLowerCase() === letter.toLowerCase()) {
      answer[index] = letter;
      found = true;
    }
  });
  if (found) {
    return true;
  } else {
    failedTrials++;
    return false;
  }
}

function tryLetter(letter) {
  if (letter.length > 1) {
    console.log('Only one letter please');
    return;
  }
  // TODO: check if valid letter accepted
  if (failed >= 10) {
    console.log('Too many tries');
    return;
  }

  console.log('You have ' + (10 - failedTrials) + ' Guesses')
  console.log('The word is: \n ' + answer.join(' '));
  console.log('What is your guesse?');

  let result = checkLetterInSelectedWord(letter);
  if (result === true) {
    console.log(answer.join(' '))
    console.log('')
    if (!answer.find('*')) {
      console.log('Wow you winner ');
    }
  } else {
    console.log(answer.join(' '))
    console.log('Try again')
    console.log('You have ' + (10 - failedTrials) + ' Guesses')
  }
}

figlet('Welcome to the game!', function (err, data) {
  if (err) {
    return;
  }
  console.log(data)
});

// לבחור באקרא י מילה מתוך ארראי ולהציג אותה מוסתרת עם כוכביות 
let theWord = Math.floor.words();

//להגדיר שכל ניחוש הולך לבדוק את כל העשר אותיות ולהגדיר שכל ניחוש הוא עם אות אחת


//במקרה שהאות נמצאת במילה היא צריכה להתגלות להתגלות (לשים לב לאותיות גדולות וקטנות)

// להגדיר עשרה ניחושים ושכל ניחוש מוטעה יורד מהעשרה

// כשיש ניחוש לא חוקי שהוא לא אות אלא מספר וכדומה לתת למשתמש הודעה בלי שיפסיד ניסיון

// אם נגמרו הנסיונות לתת הודעה של הניסיונות נגמרו המשחק נגמר
//
// אם המשתמש ניחש נכון את המילה אז לתת לו הודעה על כך

// 