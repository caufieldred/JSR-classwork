    'use strict';

var MyApp = {};

//addToList, removeFromList

MyApp.compileItem = function(item){
  var source = $('#todo-template').html();
  var template =  Handlebars.compile(source);
  return template(item);
}

MyApp.addToList = function(list,item){
  var itemObject = {toDo:item.val()};
  var compiledItem = MyApp.compileItem(itemObject);
  list.append(compiledItem);
}

$(document).ready(function(){
  var $newTaskForm = $('#new_task');
  var $taskList = $('#task_list');
  var $itemRemoveBox = $('li.new_task.checkBox');
  $newTaskForm.submit(function(event){
    event.preventDefault();
    var $newTaskInput = $('#new_task_input');
    MyApp.addToList($taskList,$newTaskInput);
  });
  $('input[type="checkbox"]').on('click', function(){
    if ( $(this).is(':checked') ) {
    	console.log('I clicked on this');
        $( "li.new_task" ).addClass('completed');
    } 
    else {
        return;
    }
});
});