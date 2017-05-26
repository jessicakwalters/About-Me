'use strict';

var user = prompt("Hello! Welcome to Jessica's About Me Page.  What is your name?");
var yesOrNo = confirm('Hello, ' + user + '. I\'m going to ask you a series of questions. They are yes or no questions, so please answer with a Y or N.');
console.log(yesOrNo);

    //Question 1
    var question1 = 'Does Jessica speak French?';
    var answer1 = prompt(user + '\: ' + question1);

    if (answer1.toUpperCase() === 'Y') {
      alert('Bien fait! She does speak French!');
    } else {
      alert('Sorry, you\'re wrong. She really does speak French!.');
    };

    console.log(question1 + user + ' input ' + answer1)

    //Question 2
    var question2 = 'Does Jessica have a dog?';
    var answer2 = prompt(user + '\: ' + question2);

    if (answer2.toUpperCase() === 'Y') {
      alert('Yep!  Her dog is named Frank!');
    } else {
      alert('Sorry, you\'re wrong. She does have a dog!');
    };

    console.log(question2 + user + ' input ' + answer2);

    //Question 3
    var question3 = 'Has Jessica been to Fiji?'
    var answer3 = prompt(user + '\: ' + question3);

    if (answer3.toUpperCase() === 'Y') {
      alert('Nope.  She has never been to Fiji');
    } else {
      alert('You\'re correct! She has never been.');
    };

    console.log(question3 + user + ' input ' + answer3);

    //Question 4
    var question4 = 'Does Jessica like to ski?';
    var answer4 = prompt(user + '\: ' + question4);

    if (answer4.toUpperCase() === 'Y') {
      alert('Yes, she LOVES to ski!');
    } else {
      alert('Are you crazy? Of course she likes to ski!');
    };

    console.log(question4 + user + ' input ' + answer4);

    //Question 5
    var question5 = 'Does Jessica like hot dogs?';
    var answer5 = prompt(user + '\: ' + question5);

    if (answer5.toUpperCase() === 'Y') {
      alert('Wrong.  She does not like hot dogs.');
    } else {
      alert('Exactly.  She prefers cheeseburgers.');
    };

    console.log(question5 + user + ' input ' + answer5);

    alert('Your answers will appear at the bottom of the page!');
/* Tried to use document.write to print the answers to the page, but wasn't able to manipulate its placement or style.  So I decided to use getElementById instead*/
  
    document.getElementById('quiz-results').innerHTML = question1 + '<br>' + answer1 + '<br>' + question2 + '<br>' + answer2 + '<br>' + question3 + '<br>' + answer3 + '<br>' + question4 + '<br>' + answer4 + '<br>' + question5 + '<br>' + answer5;
