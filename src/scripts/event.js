import dom from "./dom";
import render from "./render";
import Lists from "./lists";
import createTodo from "./todo";

const event = (() => {
  dom.formBtn.addEventListener("click", () => {
    dom.toggle(dom.formContainer);
    dom.shield.classList.add("toggle");
  });

  dom.sideMenuBtn.addEventListener("click", () => {
    dom.toggle(dom.sideMenu);
    dom.shield.classList.add("toggle");
  });
  dom.shield.addEventListener("click", dom.clickShield);
  dom.listsBtn.addEventListener("click", () => {
    dom.toggle(dom.lists);
  });

  dom.menus.forEach((n) => {
    if (n.id !== "today") {
      n.addEventListener("click", (e) => {
        dom.addStyle(n, dom.menus);
        if (n.textContent !== "Lists") {
          dom.title.textContent = `${n.textContent}`;
          render.renderContent(n.textContent);
        }
        dom.options.forEach((option) => {
          if (option.textContent === n.textContent) {
            console.log(option);
            option.setAttribute("selected", true);
          }
        });
      });
    }
  });

  dom.createListBtn.addEventListener("click", () => {
    Lists.createList(dom.listName.value);
    render.renderLists();
    dom.lists.classList.add("toggle");
    dom.listName.value = "";
  });

  dom.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {};
    for (let ele of form) {
      formData[ele.name] = ele.value;
    }
    const todo = createTodo(
      formData.name,
      formData.note,
      formData.due,
      formData.priority,
      formData.list
    );
    form.reset();
    console.log(todo.list);
    Lists.addToList(todo, todo.list);
    render.renderContent(todo.list);
    dom.toggle(dom.formContainer);
    dom.shield.classList.remove("toggle");
    dom.title.textContent = `${todo.list}`;
  });

  dom.update.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {};
    for (let ele of update) {
      formData[ele.name] = ele.value;
    }
    // console.log(formData);
    // Lists.getList(formData.list);
    // console.log(Lists.getList(formData.list));
    // console.log(dom.update.dataset["list"]);
    // console.log(dom.update.dataset["id"]);
    const list = Lists.getList(dom.update.dataset["list"]);
    // console.log(list);
    const todo = list.find((todo) => {
      return todo.id === parseInt(dom.update.dataset["id"]);
    });
    todo.editTodo(
      formData.name,
      formData.note,
      formData.due,
      formData.priority,
      formData.list
    );
    // console.log(todo);
    if (dom.update.dataset["list"] !== formData.list) {
      console.log(list);
      Lists.deleteTodo(todo.id, dom.update.dataset["list"]);
      Lists.addToList(todo, todo.list);
    }

    render.renderContent(todo.list);
    dom.title.textContent = `${todo.list}`;
    // console.log(list);

    update.reset();
    dom.toggle(dom.updateContainer);
  });

  dom.todayBtn.addEventListener("click", () => {
    dom.addStyle(dom.todayBtn, dom.menus);
    dom.title.textContent = `${dom.todayBtn.textContent}`;
    render.renderContent("Today");
  });
  dom.homeBtn.addEventListener("click", () => {
    dom.addStyle(dom.todayBtn, dom.menus);
    dom.title.textContent = `${dom.todayBtn.textContent}`;
    render.renderContent("Today");
  });
})();
