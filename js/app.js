'use strict'

var counter = 0;

var name = prompt('Hello. Whats your name?');
alert(name + ', Welcome to my page');
alert('please answer by y for yes and n for no');

function guessCar() {
  var q1 = prompt("Am I love car?");
  // we can write   var q1 = prompt("Am I love car?").toLowerCase();
  // var lower = q1.toLowerCase();
  if (q1.toLowerCase() == 'y' || q1.toLowerCase() == 'yes') {
    // we can write :
    // counter++;
    // alert(`you have a point, ${counter}`);
    // or     alert('you have a point' + counter);
    alert('you have a point');
    counter++;
  } else if (q1.toLowerCase() == 'n' || q1.toLowerCase() == 'no') {
    alert('you don\'t take a point');
  }
  // console.log(q1);
}
guessCar();


function guessLicense() {
  var q2 = prompt("Am I have a drive license?");
  // var lower = q2.toLowerCase();
  if (q2.toLowerCase() === 'n' || q2.toLowerCase() == 'no') {
    alert('you have a point');
    counter++;
  } else if (q2.toLowerCase() === 'y' || q2.toLowerCase() == 'yes') {
    alert('you don\'t take a point');
  }
  // console.log(q2);
}
guessLicense();


function guessReading() {
  var q3 = prompt("Am I love reading?");
  // var lower = q3.toLowerCase();
  if (q3.toLowerCase() === 'y' || q3.toLowerCase() == 'yes') {
    alert('you have another point')
    counter++;
  } else if (q3.toLowerCase() === 'n' || q3.toLowerCase() == 'no') {
    alert('you don\'t take a point');
  }
  //  console.log(q3);
}
guessReading();

function guessIphone() {
  var q4 = prompt("Am I have IPHONE?");
  // var lower = q4.toLowerCase();
  if (q4.toLowerCase() === 'n' || q4.toLowerCase() == 'no') {
    alert('you have another point');
    counter++;
  } else if (q4.toLowerCase() === 'y' || q4.toLowerCase() == 'yes') {
    alert('you don\'t take a point');
  }
  // console.log(q4);
}
guessIphone();

function guessAmman() {
  var q5 = prompt("Am I lived in AMMAN?");
  // var lower = q5.toLowerCase();
  if (q5.toLowerCase() === 'y' || q5.toLowerCase() == 'yes') {
    alert('good another point');
    counter++;
  } else if (q5.toLowerCase() === 'n' || q5.toLowerCase() == 'no') {
    alert('you don\'t take a point');
  }
  // console.log(q5);
}
guessAmman();

// var answer;

alert(name + ',let\'s have fun and play another game');


function guessNum() {
  var num = parseInt(prompt('What is my favorite number?'));
  for (var j = 0; j < 5; j++) {
    if (num === 5) {
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
  alert('My favourite number is 5')
}
guessNum();

function guessCars() {
  var cars = ['mazda', 'mercedes', 'nissan', 'kia', 'bmw', 'audi', 'ford', 'dodge']

  for (var i = 0; i < 7; i++) {
    var question = prompt('What\'s my favourite car ?');
    switch (question) {
      case cars[0]: case cars[1]: case cars[2]: case cars[3]: case cars[4]:case cars[5]: case cars[6]:  case cars[7]:
        alert('you got it. take point');
        counter++
        i = 7;
        break;

      default:
        alert('wrong answer. try again');

        break;
    }
  }
}

// var tries = 0
// while (tries < 7) {
//   var question = prompt('What\'s my favourite car ?');
// for (let index = 0; index < cars.length; index++) {
//   if (question === cars[index]) {
//     alert('you got it. take a point');
//         counter++
//         tries = 7;
//         break;
//   } 
  
// }
// tries++;
// }

//     switch (question) {
//       case cars[0]:
//         alert('you got it. take point');
//         counter++
//         i = 7;
//         break;
//       case cars[1]:
//         alert('you got it. take point');
//         counter++
//         i = 7;
//         break;
//       case cars[2]:
//         alert('you got it. take point');
//         counter++
//         i = 7;
//         break;
//       case cars[3]:
//         alert('you got it. take point');
//         counter++
//         i = 7;
//         break;
//       case cars[4]:
//         alert('you got it. take point');
//         counter++
//         i = 7;
//         break;
//       case cars[5]:
//         alert('you got it. take point');
//         counter++
//         i = 7;
//         break;
//       case cars[6]:
//         alert('you got it. take point');
//         counter++
//         i = 7;
//         break;
//       case cars[7]:

//         alert('you got it. you have a point');
//         counter++
//         i = 7;

//         break;

//       default:

//         alert('wrong answer. try again');
//         break;
//     }
//   }
// }
guessCars();
alert('My favourite cars is: nissan,kia,ford,bmw.mercedes,dodge,mazda,audi');

alert('Thank you for your time, You have got ' + counter + '/7')


// lower = name.toLowerCase();
// in if or for or switch conditions name.toLowerCase
// or like obove











