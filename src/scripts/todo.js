const Todo = (name, note, due, priority, list) => {
  let id = Math.floor(Math.random() * 1000);
  let completed = false;
  function editTodo(name, note, due, priority, list) {
    this.name = name;
    this.note = note;
    this.due = due;
    this.priority = priority;
    this.list = list;
  }
  return {
    name,
    note,
    due,
    priority,
    list,
    id,
    completed,
    editTodo,
  };
};

const createTodo = (name, note, due, priority, list) => {
  const todo = Todo(name, note, due, priority, list);
  return todo;
};

export default createTodo;
