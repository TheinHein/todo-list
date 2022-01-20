import createTodo from "./todo";

const Lists = (() => {
  const lists = Object.create(null);

  const createList = (name) => {
    lists[name] = [];
    return lists;
  };

  const addToList = (todo, list) => {
    lists.Inbox.push(todo);
    if (list !== "Inbox") lists[list].push(todo);
  };

  const deleteTodo = (id, list) => {
    lists.Inbox = lists.Inbox.filter((todo) => todo.id !== id);
    lists[list] = lists[list].filter((todo) => todo.id !== id);
  };

  const filterByToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    lists.Today = lists.Inbox.filter((todo) => {
      return todo.due === today;
    });
  };

  const getLists = () => lists;

  const getList = (name) => lists[name];

  return {
    createList,
    addToList,
    deleteTodo,
    filterByToday,
    getLists,
    getList,
  };
})();

export default Lists;

// let AllList = {
//   inbox: [
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//   ],
//   work: [
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//   ],
//   personal: [
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//     { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//   ],
// };

Lists.createList("Inbox");
Lists.createList("Work");
Lists.createList("Personal");
Lists.createList("Today");

// let todo1 = createTodo("say prayer", "a lot", "2022-01-24", 3, "work");
// let todo2 = createTodo("say prayer2", "a lot", "2022-01-24", 3, "work");
// Lists.addToList(todo1, todo1.list);
// Lists.addToList(todo2, todo2.list);

// Lists.addToList(
//   { name: "do laundry", note: "all clothings", due: "2022-01-22" },
//   "inbox"
// );

// Lists.addToList(
//   { name: "hello laundry", note: "all clothings", due: "2022-01-22" },
//   "work"
// );

// console.log(Lists.getLists());
// for (let list in Lists.getLists()) {
//   console.log(list);
// }

// console.log(Lists.getList("inbox"));
// console.log(Lists.getList("work"));

// console.log(Lists.getList("work")[0].editTodo("note", "every night"));
// console.log(Lists.getList("work")[0]);
