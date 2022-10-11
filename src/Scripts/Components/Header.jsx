import $ from "jquery";

export function initTodoList(controllerAction) {
  // Loads the TodoList component on the header bar, when the user clicks on the button
  $(document).ready(function () {
    $("#header-todo").click(function () {
      if ($(".my-todo-list").is(":visible")) {
        $(".my-todo-list").fadeOut("fast");
      } else {
        if ($(".my-todo-list").children().length !== 0) {
          $(".my-todo-list").fadeIn("fast");
        } else {
          $(".my-todo-list").load(controllerAction, null, function () {
            $(".my-todo-list").fadeIn("fast");
          });
        }
      }
    });
  });
}
