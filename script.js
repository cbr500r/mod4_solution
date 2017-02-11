// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // input function to Array.prototype.map
  var mapspeak = function(d){
    if (d[0].toLowerCase() == "j") {
      return byeSpeaker.speakSimple(d);
    } else {
      return helloSpeaker.speakSimple(d);
    }
  }
  // create the new array with the mapped values
  var namespeak = names.map(mapspeak);
 
  // input function for reduce
  var reducespeak = function(a,b){
    if (b[0].toLowerCase()=="j"){
      a.bye.push(byeSpeaker.speakSimple(b));
    } else {
      a.hello.push(helloSpeaker.speakSimple(b));
    }
    return a;
  }

  // create two arrays with hello/goodbye seperated
  var reduced = names.reduce(reducespeak,{hello: [], bye: []});

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using the 'speak' method or either helloSpeaker's or byeSpeaker's
  // 'speak' method.
  // See Lecture 50, part 1
  console.log("Printing the standard set");
  for (var name in names) {

    // STEP 11:
    // Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    // Look up these methods on Mozilla Developer Network web site if needed.
    var firstLetter = names[name].substr(0,1);
    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter.toLowerCase() == "j") {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }

  // print out the mapped list of greetings
  console.log("Printing the mapped set");
  for (var name in namespeak){
    console.log(namespeak[name]);    
  }

  console.log("Printing the reduced set (seperately)");
  // hellos
  for (var name in reduced.hello){
    console.log(reduced.hello[name]);
  }
  // byes
  for (var name in reduced.bye){
    console.log(reduced.bye[name]);
  }
})();
