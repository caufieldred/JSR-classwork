	'use strict';

var MyApp = {};

MyApp.coms = [
  {userName:"Erica Gilbert"}
];

MyApp.compileItem = function(item){
  var source = $('#com-template').html();
  var template =  Handlebars.compile(source);
  return template(item);
}

MyApp.addToComment = function(list,item){
  var itemObject = {userName:item.val()};
  MyApp.coms.push(itemObject);
  var compiledItem = MyApp.compileItem(itemObject);
  list.append(compiledItem);
}

MyApp.populateComments = function(list){
  for(var i=0;i<MyApp.coms.length;i++){
    var newItem = MyApp.compileItem(MyApp.coms[i]);
    list.append(newItem);
  }
}
// Remove both the data from the model/array and from the DOM
MyApp.removeFromComment = function($list, $item) {
  console.log($item);
  var itemIndex = $item.index();
  if (itemIndex > -1) {
    MyApp.coms.splice(itemIndex, 1);
  }
  $item.remove();
}

$(document).ready(function(){
  var $newCommentForm = $('.comment_form');
  var $commentList = $('ul.comments');

  MyApp.populateComments($commentList);

  $newCommentForm.submit(function(event){
    event.preventDefault();
    var $commentNameInput = $('#comment_name');
    MyApp.addToComment($commentList,$commentNameInput);
  });

  $commentList.on('click', '.delete', function(e) {
    e.preventDefault();
    var $listItem = $(this).parent();
    MyApp.removeFromComment($commentList, $listItem);
  });

});



// Blog App
// Use the todo app as an example of how this app should work.
// 1) Make it so that you can add a comment, use handlebars for templating. Add comment to a javascript array.
// 1a) Comment should include the users name, email address and their comment
// 2) Create list of existing comments and add them on page load to the comment section
// 3) Make it so that a comment can get deleted, also deleting it from the array
// 4) BONUS: Make the other comment section work
// 5) BONUS: Make it so that you can edit a comment








