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
  var $itemRemove = $('li.new_task').html();
  $newTaskForm.submit(function(event){
    event.preventDefault();
    var $newTaskInput = $('#new_task_input');
    MyApp.addToList($taskList,$newTaskInput);
  });
	$( "li.new_task.checkBox" ).click(function() {
	$( "li.new_task" ).remove();
  });
});