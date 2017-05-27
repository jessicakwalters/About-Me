'use strict';


//Quiz js
var user = prompt("Hello! Welcome to Jessica's About Me Page.  What is your name?");
var yesOrNo = confirm('Hello, ' + user + '. I\'m going to ask you a series of questions. They are yes or no questions, so please answer with a Y or N.');
console.log(yesOrNo);

    //Question 1
    var score = 0;
    var question1 = 'Does Jessica speak French?';
    var answer1 = prompt(user + '\: ' + question1);

    if (answer1.toUpperCase() === 'Y' || answer1.toUpperCase() === 'YES') {
      alert('Bien fait! She does speak French!');
      score = score + 1;
    } else {
      alert('Sorry, you\'re wrong. She really does speak French!.');
    }

    console.log(question1 + user + ' input ' + answer1)

    //Question 2
    var question2 = 'Does Jessica have a dog?';
    var answer2 = prompt(user + '\: ' + question2);

    if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
      alert('Yep!  Her dog is named Frank!');
      score = score + 1;
    } else {
      alert('Sorry, you\'re wrong. She does have a dog!');
    }

    console.log(question2 + user + ' input ' + answer2);

    //Question 3
    var question3 = 'Has Jessica been to Fiji?'
    var answer3 = prompt(user + '\: ' + question3);

    if (answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES') {
      alert('Nope.  She has never been to Fiji');
    } else {
      alert('You\'re correct! She has never been.');
      score = score + 1;
    }

    console.log(question3 + user + ' input ' + answer3);

    //Question 4
    var question4 = 'Does Jessica like to ski?';
    var answer4 = prompt(user + '\: ' + question4);

    if (answer4.toUpperCase() === 'Y' || answer4.toUpperCase() === 'YES') {
      alert('Yes, she LOVES to ski!');
      score = score + 1;
    } else {
      alert('Are you crazy? Of course she likes to ski!');
    }

    console.log(question4 + user + ' input ' + answer4);

    //Question 5
    var question5 = 'Does Jessica like hot dogs?';
    var answer5 = prompt(user + '\: ' + question5);

    if (answer5.toUpperCase() === 'Y' || answer5.toUpperCase() === 'YES') {
      alert('Wrong.  She does not like hot dogs.');
    } else {
      alert('Exactly.  She prefers cheeseburgers.');
      score = score + 1;
    }

    console.log(question5 + user + ' input ' + answer5);

    alert('Your answers will appear at the bottom of the page!');
/* Tried to use document.write to print the answers to the page, but wasn't able to manipulate its placement or style.  So I decided to use getElementById instead*/

    document.getElementById('quiz-results1').innerHTML = question1 + ' ' + answer1 + '<br>';
    document.getElementById('quiz-results2').innerHTML = question2 + ' ' + answer2 + '<br>';
    document.getElementById('quiz-results3').innerHTML = question3 + ' ' + answer3 + '<br>';
    document.getElementById('quiz-results4').innerHTML = question4 + ' ' + answer4 + '<br>';
    document.getElementById('quiz-results5').innerHTML = question5 + ' ' + answer5 + '<br>';
    document.getElementById('quiz-results6').innerHTML = 'Your score: ' + score;
