


//this line gets the button and passes it to a variable button
let button = document.getElementById("submit");

//this code block adds a 'click' event listner to the button 
//in which it passes in the value entered in the input box to a variable input
//the input is passed as a parameter to a function convertToPigLatin which returns the updated word
// the returned word is passed to a varaible output
//output has the div element passed to it which is then used to display the text using innerText property
button.addEventListener('click', function (){
    let input = document.getElementById("inputBox").value;
    console.log(input);
    let output = document.getElementById("output");
    console.log(output);
    output.innerText = convertToPigLatin(input);
})

/**
 * this function takes in a word and returns the updated word after going through PigLatin conversion
 * @param {string} word 
 * @returns new4 if the word starts with a vowel. If not then, new5
 */

function convertToPigLatin(word) {

    let answer = -1;
    let a = word.indexOf('a');
    let e = word.indexOf('e');
    let i = word.indexOf('i');
    let o = word.indexOf('o');
    let u = word.indexOf('u');
    if (word.indexOf('a') == 0 || word.indexOf('e') == 0 || word.indexOf('i') == 0  || word.indexOf('o') == 0 || word.indexOf('u') == 0) {
    let new4 = word.toLowerCase().trim() + 'yay';
    //console.log(new4);
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
    //console.log(new1);
    //console.log(new2);
    let new3 = new1 + new2 + 'ay';
    //console.log(new3);
    let new5 = new3.toLowerCase().trim();
    //console.log(new5);
    return new5;
    }
} 


  