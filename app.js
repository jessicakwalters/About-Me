'use strict';

var user = prompt("Hello! Welcome to Jessica's About Me Page.  What is your name?");
var yesOrNo = confirm('Hello, ' + user + '. I\'m going to ask you a series of questions. They are yes or no questions, so please answer with a Y or N.');
console.log(yesOrNo);

    //Question 1
    var answer1 = prompt(user + ' does Jessica speak French?');

    if (answer1.toUpperCase() === 'Y') {
      alert('Bien fait! She does speak French!');
    } else {
      alert('Sorry, you\'re wrong. She really does speak French!.');
    };

    console.log(user + ' input ' + answer1)

    //Question 2
    var answer2 = prompt(user + ' does Jessica have a dog?');

    if (answer2.toUpperCase() === 'Y') {
      alert('Yep!  Her dog is named Frank!');
    } else {
      alert('Sorry, you\'re wrong. She does have a dog!');
    };

    console.log(user + ' input ' + answer2);

    //Question 3
    var answer3 = prompt(user + ' has Jessica been to Fiji?');

    if (answer3.toUpperCase() === 'Y') {
      alert('Nope.  She has never been to Fiji');
    } else {
      alert('You\'re correct! She has never been.');
    };

    console.log(user + ' input ' + answer3);

    //Question 4
    var answer4 = prompt(user + ' does Jessica like to ski?');

    if (answer4.toUpperCase() === 'Y') {
      alert('Yes, she LOVES to ski!');
    } else {
      alert('Are you crazy? Of course she likes to ski!');
    };

    console.log(user + ' input ' + answer4);

    //Question 5
    var answer5 = prompt(user + ' does Jessica like hot dogs?');

    if (answer5.toUpperCase() === 'Y') {
      alert('Wrong.  She does not like hot dogs.');
    } else {
      alert('Exactly.  She prefers cheeseburgers.');
    };

    console.log(user + ' input ' + answer5);
