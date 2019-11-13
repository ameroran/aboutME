'use strict'

var counter = 0;
var q1;
var name = prompt('Hello. Whats your name?');
alert(name + ', Welcome to my page');
function guessCar() {
   q1 = prompt("Am I love car?");
  if (q1 === 'yes' || 'y') {
    alert('you have a point, ');
    counter++
  } else if (q1 === 'no' || 'n') {
    alert('you don\'t take a point');
  }
  // console.log(q1);
}
guessCar();

var q2;
function guessLicense() {
   q2 = prompt("Am I have a drive license?");
  if (q2 === 'no' || 'n') {
    alert('you have a point');
    counter++
  } else if (q2 === 'yes' || 'y') {
    alert('you don\'t take a point');
  }
  // console.log(q2);
}
guessLicense();
var q3;
function guessReading() {
   q3 = prompt("Am I love reading?");
  if (q3 === 'yes' || 'y') {
    alert('you have another point')
    counter++
  } else if (q3 === 'no' || 'n') {
    alert('you don\'t take a point');
  }
  //  console.log(q3);
}
guessReading();
var q4;
function guessIphone() {
   q4 = prompt("Am I have IPHONE?");
  if (q4 === 'no' || 'n') {
    alert('you have another point');
    counter++
  } else if (q4 === 'yes' || 'y') {
    alert('you don\'t take a point');
  }
  // console.log(q4);
}
guessIphone();
var q5;
function guessAmman() {
   q5 = prompt("Am I lived in AMMAN?");
  if (q5 === 'yes' || 'y') {
    alert('good another point');
    counter++
  } else if (q5 === 'no' || 'n') {
    alert('you don\'t take a point');
  }
  // console.log(q5);
}
guessAmman();

q1 = q1.toLowerCase();
q2 = q2.toLowerCase();
q3 = q3.toLowerCase();
q4 = q4.toLowerCase();
q5 = q5.toLowerCase();

var answer;

alert(name + ',let\'s have fun and play another game');

function guessNum() {
  var num = prompt('What is my favorite number?');
  for (var j = 0; j < 5; j++) {
    if (num == 5) {
      alert('correct answer, you get a point');
      counter++
      j = 5;


    } else if (num >= 6) {
      alert('high');

      var num = prompt('What is my favorite number?');

    } else if (num <= 4) {
      alert('low');

      var num = prompt('What is my favorite number?');

    }
  }
}
guessNum();

function guessCars() {
  var cars = ['mazda', 'mercedes', 'nissan', 'kia', 'bmw', 'audi', 'ford', 'dodge']

  for (var i = 0; i < 7; i++) {
    var question = prompt('What\'s my favourite car ?');

    switch (question) {
      case cars[0]:
        alert('you got it. take point');
        counter++
        i = 7;
        break;
      case cars[1]:
        alert('you got it. take point');
        counter++
        i = 7;
        break;
      case cars[2]:
        alert('you got it. take point');
        counter++
        i = 7;
        break;
      case cars[3]:
        alert('you got it. take point');
        counter++
        i = 7;
        break;
      case cars[4]:
        alert('you got it. take point');
        counter++
        i = 7;
        break;
      case cars[5]:
        alert('you got it. take point');
        counter++
        i = 7;
        break;
      case cars[6]:
        alert('you got it. take point');
        counter++
        i = 7;
        break;
      case cars[7]:

        alert('you got it. you have a point');
        counter++
        i = 7;

        break;

      default:

        alert('wrong answer. try again');
        break;
    }
  }
}
guessCars();
alert('My favourite cars is: nissan,kia,ford,bmw.mercedes,dodge,mazda,audi');

alert('Thank you for your time, You have got ' + counter + '/7')















