'use strict';


//Quiz js

var user = prompt("Hello! Welcome to Jessica's About Me Page.  What is your name?");
while (user === '') {
  user = prompt("Hello! Welcome to Jessica's About Me Page.  What is your name?");
};
var yesOrNo = confirm('Hello, ' + user + '. I\'m going to ask you a series of questions. They are yes or no questions, so please answer with a Y or N. If you get more than 3 right answers, a special image will appear, so guess carefully.');
console.log(yesOrNo);

/*
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

    console.log(question1 + user + ' input ' + answer1)

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
*/
    //Question6


    var question6 = 'How old is Jessica?';
    var answer6 = prompt(user + '\: ' + question6);

    for (var i=0; i<4; i++) {
      if(answer6 != 31) {
        if (answer6 < 31) {
        alert('Wrong.  You guessed too low!');
        } else {
        alert('Seriously? That is obviously too high.');
        }
        if (i === 3) {
          alert('Sorry, you are out of guesses. Jessica is 31');
        } else {
          answer6 = prompt(user + '\: ' + question6);
        }
      }
      else {
        alert('Correct! Jessica is 31.');
        i=4;
    }
    };


    //Question7





    alert('Your answers will appear at the bottom of the page!');


/* Tried to use document.write to print the answers to the page, but wasn't able to manipulate its placement or style.  So I decided to use getElementById instead*/

    document.getElementById('quiz-results1').innerHTML = question1 + '<br> '+ 'answer: '+ answer1 + '<br>' + 'Actual answer: Jessica does speak French.';
    document.getElementById('quiz-results2').innerHTML = question2 + '<br>'+ 'Your answer: '+ answer2 + '<br>' + 'Actual answer: Jessica has a dog named Frank.';
    document.getElementById('quiz-results3').innerHTML = question3 + '<br> '+ 'Your answer: '+ answer3 + '<br>' + 'Actual answer: Jessica has never been to Fiji';
    document.getElementById('quiz-results4').innerHTML = question4 + '<br> '+ 'Your answer: '+ answer4 + '<br>' + 'Actual answer: Jessica loves to ski!';
    document.getElementById('quiz-results5').innerHTML = question5 + '<br> '+ 'Your answer: '+ answer5 + '<br>' + 'Actual answer: Jessica does does not like hot dogs.';
    document.getElementById('quiz-results6').innerHTML = user + '\'s score: ' + score + ' out of 7';
    if (score > 3){
      document.getElementById('bonus').style.display = 'auto';
    } else {
      document.getElementById('bonus').style.display = 'none';
    };
