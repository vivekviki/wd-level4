/*eslint-disable no-undef*/
const todoList = require("../todo");
const { list1, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Testing the todo list", () => {
  beforeAll(() => {
    add({
      title: "attending os lab",
      completed: true,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  add({
    title: "finish the assignment",
    completed: false,
    dueDate: new Date().toLocaleDateString("en-CA"),
  });
  add({
    title: "write the record",
    completed: true,
    dueDate: new Date().toLocaleDateString("en-CA"),
  });
  let length = list1.length;
  test("checks for creation of the todo", () => {
    expect(list1.length).toBe(3);
  });
  test("checks marking a todo as completed.", () => {
    markAsComplete(1);
    expect(list1[1].completed).toBe(true);
  });

  let listofoverdue = overdue();
  test("checks retrieval of overdue items.", () => {
    expect(
      listofoverdue.every((todo) => {
        return todo.dueDate < new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
  let listofduetoday = dueToday();
  test("checks retrieval of due today items.", () => {
    expect(
      listofduetoday.every((todo) => {
        return todo.dueDate === new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
  let listofduelater = dueLater();
  test("checks retrieval of due later items.", () => {
    expect(
      listofduelater.every((todo) => {
        return todo.dueDate > new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
});
