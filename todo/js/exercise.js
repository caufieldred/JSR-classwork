    'use strict';

    var MyApp = {};

    //addToList, removeFromList

    MyApp.compileItem = function(item) {
        var source = $('#todo-template').html();
        var template = Handlebars.compile(source);
        return template(item);
    }

    MyApp.addToList = function(list, item) {
        var itemObject = { toDo: item.val() };
        var compiledItem = MyApp.compileItem(itemObject);
        list.append(compiledItem);
    }

    $(document).ready(function() {
        var $newTaskForm = $('#new_task');
        var $taskList = $('#task_list');
        $newTaskForm.submit(function(event) {
            event.preventDefault();
            var $newTaskInput = $('#new_task_input');
            MyApp.addToList($taskList, $newTaskInput);
        });
        $(document).on('change', '.new_complete_submit', function() {
            if (this.checked) {
                $("li.new_task").addClass('completed');
            }
        });
    });
