console.log("Hello World");

/*
CREATE FIRST VARIABLE
Always use cosnt if you can get away with it; use let if you have to; never use var.
const catches error more than let

'const' Rule 1: Have to assign a value when declaring.
const me; -> wrong

*/
const me = {
  /* 
    Key: vlaue
    === key-value pairs
    */
  name: "Previous Andrea",
};

/*
What is const? 
it is not constant because you cannot change constants. 
'const' Rule 2: const cannot be riassigned
we can change const by adding 'key' to it
*/
me.name = "Andrea";

console.log(me);

/*
Another object that we can change after declaration is an array
*/
const hobbies = ["Football", "Cooking"];
hobbies.push("Gaming");
me.hobbies = hobbies;

//QUOTES
const hobbyOne = "Football skill level: '2'";
const hobbyTwo = 'Cooking skill level "3"';
const hobbyThree = `Gaming Skill Level: ${2 + 2}`; // (string template literal)string interpolation  done with backticks (opt + \) + dollar sign ($) + curly braces ({}). The code inside the interpolation is executed
