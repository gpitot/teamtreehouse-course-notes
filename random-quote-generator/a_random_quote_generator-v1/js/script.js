/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [

  // quote one
  {
    quote: 'Dummy text here for now',
    source: 'Dummy author here for now',
    citation: 'Wikipedia',
    year: 2019
  },

  // quote two
  {
    quote: 'Dummy text here for now',
    source: 'Dummy author here for now',
    citation: 'Wikipedia',
    year: 2019
  },

  // quote three
  {
    quote: 'Dummy text here for now',
    source: 'Dummy author here for now',
    citation: 'Wikipedia',
    year: 2019
  },

  // quote four
  {
    quote: 'Dummy text here for now',
    source: 'Dummy author here for now',
    citation: 'Wikipedia',
    year: 2019
  },

  // quote five
  {
    quote: 'Dummy text here for now',
    source: 'Dummy author here for now',
    citation: 'Wikipedia',
    year: 2019
  }

];

console.log(quotes); 



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {

  // generate a random number between 0 and the last index in the array parameter

  let randomQuote = Math.floor(Math.random) * 

  // use the random number and box notation to grab a random item from the quotes array


  // return the random item

  return randomQuote; 


}




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.