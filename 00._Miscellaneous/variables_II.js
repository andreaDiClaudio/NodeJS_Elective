"use strict mode";

totalGlobalVariable = "Never do this";
var globalVariable = "Also never do this";

//The problem is that var propagates outside its scope. so the following code will print "false". const has been introduced to solve the var problem
{
  var someValue = true;
  {
    var someValue = false;
  }
  console.log(someValue);
}

//call execution stack. everytime we open a new scope it opens a stack that stores all the varibales inside that scope. once the scope is closed the garbage collector will clean everything.
//In this case the result is "true"
{
  let otherValue = true;
  {
    let otherValue = false;
  }
  console.log(otherValue);
}

//classic coding interview question: "What i will be in the temrinal?"
for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); // it will print 6 times
  }, 1000);
}
//the solution to solve this problem is using let. Because let is boud to the scope, while var has a global scope
//const you can reassign it and you have to declare it
