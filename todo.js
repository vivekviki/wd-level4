const todoList = () => {
  list1 = [];
  const add = (todoItem) => {
    list1.push(todoItem);
  };
  const markAsComplete = (index) => {
    list1[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");
  // let today = new Date().toISOString().split("T")[0];

  const overdue = () => {
    return list1.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const dueToday = () => {
    return list1.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const dueLater = () => {
    return list1.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    list1,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
