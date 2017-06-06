'use strict';
//Array js
//question[0], yesResponse[1], noResponse[2], actualanswer[3], usersanswer[4]

var user = prompt('Hello! Welcome to Jessica\'s About Me Page.  What is your name?');
while (user === '') {
  user = prompt('Hello! Welcome to Jessica\'s About Me Page.  What is your name?');
};
var yesOrNo = confirm('Hello, ' + user + '. I\'m going to ask you a series of questions. They are yes or no questions, so please answer with a Y or N. If you get more than 3 right answers, a special image will appear, so guess carefully.');
console.log(yesOrNo);

var questionsAndAnswers = [['Does Jessica speak French?', 'Bien fait! She does speak French!', 'Sorry, you\'re wrong. She really does speak French!.', true], ['Does Jessica have a dog?', 'Yep!  Her dog is named Frank!', 'Sorry, you\'re wrong. She does have a dog!', true], ['Has Jessica been to Fiji?', 'Nope.  She has never been to Fiji', 'You\'re correct! She has never been.', false], ['Does Jessica like to ski?', 'Yes, she LOVES to ski!', 'Are you crazy? Of course she likes to ski!', true], ['Does Jessica like hot dogs?', 'Wrong.  She does not like hot dogs.', 'Exactly. She prefers cheeseburgers', false]];

var score = 0;

for (var i = 0; i <= 4; i++) {
  var answer = prompt(user + '\: ' + questionsAndAnswers[i][0]);
  //repromt user if they enter nothing
  while (answer === '') {
    //update user's answer
    answer = prompt(user + '\: ' + questionsAndAnswers[i][0]);
  }
  if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES') {
    alert(questionsAndAnswers[i][1]);
  } else {
    alert(questionsAndAnswers[i][2]);
  }
  //append user's answer onto the end of the array
  questionsAndAnswers[i].push(answer.toUpperCase());
  //compare user's answer to correct answer
  //first assign users response boolean value
  var userResponded = true;
  if (questionsAndAnswers[i][4] === 'Y' || questionsAndAnswers[i][4] === 'YES') {
    userResponded = true;
    console.log(userResponded);
  } else {
    userResponded = false;
    console.log(userResponded);
  }
//then compare to actualanswer
  if (userResponded === questionsAndAnswers[i][3]) {
    score++;
    console.log(score);
  } else {
    console.log(score);
  }

  console.log(questionsAndAnswers[i][0] + user + ' input ' + questionsAndAnswers[i][4]);
}

/* This section has the original quiz code
//Quiz js

var user = prompt("Hello! Welcome to Jessica's About Me Page.  What is your name?");
while (user === '') {
  user = prompt("Hello! Welcome to Jessica's About Me Page.  What is your name?");
};
var yesOrNo = confirm('Hello, ' + user + '. I\'m going to ask you a series of questions. They are yes or no questions, so please answer with a Y or N. If you get more than 3 right answers, a special image will appear, so guess carefully.');
console.log(yesOrNo);

    //Question 1
    var score = 0;
    var question1 = 'Does Jessica speak French?';
    var answer1 = prompt(user + '\: ' + question1);

    while (answer1 === '') {
      answer1 = prompt(user + '\: ' + question1);
    }
    if (answer1.toUpperCase() === 'Y' || answer1.toUpperCase() === 'YES') {
      alert('Bien fait! She does speak French!');
      score ++;
    } else {
      alert('Sorry, you\'re wrong. She really does speak French!.');
    }

    console.log(question1 + user + ' input ' + answer1);
    console.log(score);

    //Question 2
    var question2 = 'Does Jessica have a dog?';
    var answer2 = prompt(user + '\: ' + question2);

    while (answer2 === '') {
      answer2 = prompt(user + '\: ' + question2);
    }
    if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
      alert('Yep!  Her dog is named Frank!');
      score ++;
    } else {
      alert('Sorry, you\'re wrong. She does have a dog!');
    }

    console.log(question2 + user + ' input ' + answer2);
    console.log(score);

    //Question 3
    var question3 = 'Has Jessica been to Fiji?'
    var answer3 = prompt(user + '\: ' + question3);

    while (answer3 === '') {
      answer3 = prompt(user + '\: ' + question3);
    }
    if (answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES') {
      alert('Nope.  She has never been to Fiji');
    } else {
      alert('You\'re correct! She has never been.');
      score ++;
    }

    console.log(question3 + user + ' input ' + answer3);
    console.log(score);

    //Question 4
    var question4 = 'Does Jessica like to ski?';
    var answer4 = prompt(user + '\: ' + question4);

    while (answer4 === '') {
      answer4 = prompt(user + '\: ' + question4);
    }
    if (answer4.toUpperCase() === 'Y' || answer4.toUpperCase() === 'YES') {
      alert('Yes, she LOVES to ski!');
      score ++;
    } else {
      alert('Are you crazy? Of course she likes to ski!');
    }

    console.log(question4 + user + ' input ' + answer4);
    console.log(score);

    //Question 5
    var question5 = 'Does Jessica like hot dogs?';
    var answer5 = prompt(user + '\: ' + question5);

    while (answer5 === '') {
      answer5 = prompt(user + '\: ' + question5);
    }
    if (answer5.toUpperCase() === 'Y' || answer5.toUpperCase() === 'YES') {
      alert('Wrong.  She does not like hot dogs.');
    } else {
      alert('Exactly.  She prefers cheeseburgers.');
      score ++;
    }

    console.log(question5 + user + ' input ' + answer5);
    console.log(score);
*/
    //Question6

var question6 = 'Guess a random number between 1 and 10';
var answer6 = prompt(user + '\: ' + question6);
var randomNumber =  Math.floor((Math.random() * 10) + 1);
for (var i = 0; i < 4; i++) {
      //determine if answer is correct or not
  if(answer6 != randomNumber) {
        //give different response if answer is too high or too low
    if (answer6 < randomNumber) {
      alert('Wrong.  You guessed too low!');
    } else {
      alert('Wrong! You\'ve guessed too high.');
    }
        //limit user to 3 guesses
    if (i === 3) {
      alert('Sorry, you are out of guesses. The correct answer is ' + randomNumber);
    } else {
      answer6 = prompt(user + '\: ' + question6);
    }
  }
  else {
    alert('Correct! The number was ' + randomNumber);
        //stop the loop on correct answers
    i = 4;
    score ++;
  }
};
console.log(question6 + user + ' input ' + answer6);
console.log(score);

    //Question7
var question7 = 'What states has Jessica lived in besides Washington?';
var answer7 = prompt(user + '\: ' + question7);
var states = ['ILLINOIS', 'WYOMING'];

for (var i = 0; i < 6; i++) {
      //Search array for answer7
  var guess = answer7.toUpperCase();
  var index = states.indexOf(guess);
  console.log(index);
      //check if guess exists in the array
  if(index === -1) {
    alert('Wrong.  She has never lived there!');
    answer7 = prompt(user + '\: ' + question7);
  } else {
    alert('Correct! Here are all the states where Jessica has lived: ' + states.toString());
        //stop the loop on correct answers
    i = 6;
    score ++;
  }
};

console.log(question7 + user + ' input ' + answer7);
console.log(score);

alert('Your answers will appear at the bottom of the page!');

/* Tried to use document.write to print the answers to the page, but wasn't able to manipulate its placement or style.  So I decided to use getElementById instead*/

document.getElementById('quiz-results1').innerHTML = questionsAndAnswers[0][0] + '<br> ' + 'Your answer: ' + questionsAndAnswers[0][4] + '<br>' + 'Actual answer: Jessica does speak French.';
document.getElementById('quiz-results2').innerHTML = questionsAndAnswers[1][0] + '<br>' + 'Your answer: ' + questionsAndAnswers[1][4] + '<br>' + 'Actual answer: Jessica has a dog named Frank.';
document.getElementById('quiz-results3').innerHTML = questionsAndAnswers[2][0] + '<br> ' + 'Your answer: ' + questionsAndAnswers[2][4] + '<br>' + 'Actual answer: Jessica has never been to Fiji';
document.getElementById('quiz-results4').innerHTML = questionsAndAnswers[3][0] + '<br> ' + 'Your answer: ' + questionsAndAnswers[3][4] + '<br>' + 'Actual answer: Jessica loves to ski!';
document.getElementById('quiz-results5').innerHTML = questionsAndAnswers[4][0] + '<br> ' + 'Your answer: ' + questionsAndAnswers[4][4] + '<br>' + 'Actual answer: Jessica does does not like hot dogs.';
document.getElementById('quiz-results6').innerHTML = question6 + '<br> ' + 'Your answer: ' + answer6 + '<br>' + 'Actual answer: The number was ' + randomNumber;
document.getElementById('quiz-results7').innerHTML = question7 + '<br> ' + 'Your answer: ' + answer7 + '<br>' + 'Actual answer: Jessica has lived in Washington, Illinois, and Wyoming.';
document.getElementById('quiz-results8').innerHTML = user + '\'s score: ' + score + ' out of 7';
if (score > 3){
  document.getElementById('bonus').style.display = 'auto';
} else {
  document.getElementById('bonus').style.display = 'none';
};
