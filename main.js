'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  // Your code here
  let answer = -1;
  let a = word.indexOf('a');
  let e = word.indexOf('e');
  let i = word.indexOf('i');
  let o = word.indexOf('o');
  let u = word.indexOf('u');
if (word.indexOf('a') == 0 || word.indexOf('e') == 0 || word.indexOf('i') == 0  || word.indexOf('o') == 0 || word.indexOf('u') == 0) {
let new4 = word.toLowerCase().trim() + 'yay';
  console.log(new4);
  return new4;
}

else {

// console.log(a);
// console.log(e);
// console.log(i);
// console.log(o);
// console.log(u);

// console.log('//////');

if (a !== -1) {
  if (answer == -1) {
    answer = a;
  }
  else if (answer > a) {
    answer = a;
  }
}

//console.log(a);
//console.log('answer is ', answer);

if (e !== -1) {
  if (answer == -1) {
    answer = e;
  }
  else if (answer > e) {
    answer = e;
  }
}

//console.log(e);
//console.log('answer is ', answer);

if (i !== -1) {
  if (answer == -1) {
    answer = i;
  }
  else if (answer > i) {
    answer = i;
  }
}

//console.log(i);
//console.log('answer is ', answer);

if (o !== -1) {
  if (answer == -1) {
    answer = o;
  }
  else if (answer > o) {
    answer = o;
  }
}

//console.log(o);
//console.log('answer is ', answer);

if (u !== -1) {
  if (answer == -1) {
    answer = u;
  }
  else if (answer > u) {
    answer = u;
  }
}

//console.log(u);
//console.log('answer is ', answer);

let new1 = word.substring(answer).trim();
let new2 = word.substring(0,answer).trim();
console.log(new1);
console.log(new2);
let new3 = new1 + new2 + 'ay';
console.log(new3);
let new5 = new3.toLowerCase().trim();
console.log(new5);
return new5;
}
}


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
