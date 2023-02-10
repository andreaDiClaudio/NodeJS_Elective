console.log(random(0, 10)); //in js this works because of hosting (lift up). it works becsue of the exctution-call stack.
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) - min);
}

//this is an anonymous function becaus it does not have a name
const randomAnonymousFunction = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) - min);
}; //the coma is here becase it is a variable assignment
console.log(randomAnonymousFunction(0, 10));

const randomArrowFunction = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) - min);
};

console.log(randomArrowFunction(0, 10));

//This implicitly returns. And this works only with one statement
const randomArrowFunctionCompact = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) - min);

//in jas function are first class citizens, that means we can pass other functions as parametere of a function
//this is call-back function (a function passed as argument that you call back (that is not necessary))
function genericActionPerformer(genericAction, genericName) {
  return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting`;

console.log(genericActionPerformer(subtract, "Thobias"));

const walk = (name) => `${name} is walking`;

console.log(genericActionPerformer(walk, "Nicolas"));

console.log(genericActionPerformer((name) => `${name} Cannot read`, "Andrea"));
