$(document).ready(function() {
    var button = $('#new-thing-button');
    var thingList = $('#fav-list');
    var newThingInput = $('#new-thing');

    button.click(function(event) {
        event.preventDefault();
        var newthing = newThingInput.val();
        addToList(thingList, newThing);

        newThingInput.val("");
    });

    function addToList(list, newThing) {
        var newThingLi = $('<li>');
        newThingLi.text(newThing);
        list.append(newThingLi);
    }
});

/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

/*function addToList(list, newThing) {
  var newThingLi = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);
}

window.onload = function() {

  var button = document.getElementById('new-thing-button');
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    addToList(thingList, newThing);

    // bonus version -- instead of line 28:

    // if (newThing === "") {
    //   alert("You must type in a value!");
    // } else {
    //   addToList(thingList, newThing);
    //   newThingInput.value = "";
    // }

    newThingInput.value = "";
  };
};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/
