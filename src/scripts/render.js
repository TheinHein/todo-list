import dom from "./dom";
import Lists from "./lists";

const render = (() => {
  const renderLists = () => {
    while (dom.lists.firstChild) {
      dom.lists.removeChild(dom.lists.firstChild);
    }
    while (dom.listSelect.firstChild) {
      dom.listSelect.removeChild(dom.listSelect.firstChild);
    }
    while (dom.listNSelect.firstChild) {
      dom.listNSelect.removeChild(dom.listNSelect.firstChild);
    }
    for (let list in Lists.getLists()) {
      if (list !== "Inbox" && list !== "Today") {
        const div = document.createElement("div");
        div.setAttribute("role", "button");
        div.setAttribute("tabindex", "0");
        div.addEventListener("click", (e) => {
          dom.title.textContent = `${list}`;
          renderContent(list);
        });
        div.textContent = `${list}`;
        dom.lists.appendChild(div);
      }
      if (list !== "Today") {
        const option = document.createElement("option");
        option.value = `${list}`;
        console.log(option.value);
        option.textContent = `${list}`;
        dom.listSelect.appendChild(option.cloneNode(true));
        dom.listNSelect.appendChild(option.cloneNode(true));
      }
    }
  };
  const renderContent = (list) => {
    while (dom.content.firstChild) {
      dom.content.removeChild(dom.content.firstChild);
    }
    for (let todo of Lists.getList(list)) {
      const div = document.createElement("div");
      div.classList.add("todo");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div3");
      div2.appendChild(div3);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", "todo");
      checkbox.addEventListener("click", () => {
        todo.completed = !todo.completed;
        if (todo.completed) {
          name.style.setProperty("text-decoration", "line-through");
        } else {
          name.style.removeProperty("text-decoration", "line-through");
        }
      });
      const name = document.createElement("label");
      name.textContent = `${todo.name}`;
      if (todo.completed) {
        checkbox.setAttribute("checked", true);
        name.style.setProperty("text-decoration", "line-through");
      }
      div3.appendChild(checkbox);
      div3.appendChild(name);
      const priorityDiv = document.createElement("span");
      const starColors = [, "grey", "orange", "green", "red"];
      priorityDiv.style.setProperty("color", starColors[todo.priority]);
      priorityDiv.style.setProperty("margin-right", "20px");
      let stars = "";
      for (let i = 1; i <= todo.priority; i++) {
        let star = '<i class="fas fa-star fa-sm"></i>';
        stars = stars + star;
      }
      priorityDiv.innerHTML = stars;

      const div4 = document.createElement("div");
      div4.appendChild(priorityDiv);

      const edit = document.createElement("a");
      edit.textContent = "Edit";
      edit.innerHTML = '<i class="fas fa-edit"></i>';
      edit.addEventListener("click", (e) => {
        dom.toggle(dom.updateContainer);
        dom.shield.classList.add("toggle");
        dom.update.dataset.id = todo.id;
        dom.update.dataset.list = `${todo.list}`;
        for (let ele of dom.update.childNodes) {
          if (ele.id === "nameN") {
            ele.value = todo.name;
          } else if (ele.id === "noteN") {
            ele.value = todo.note;
          } else if (ele.id === "dueN") {
            ele.value = todo.due;
          } else if (ele.id === "priorityN") {
            ele.childNodes.forEach((option) => {
              if (option.value === todo.priority) {
                option.setAttribute("selected", true);
              }
            });
          } else if (ele.id === "listN") {
            ele.childNodes.forEach((option) => {
              if (option.value === todo.list) {
                option.setAttribute("selected", true);
              }
            });
          }
        }
      });
      const del = document.createElement("a");
      del.innerHTML = '<i class="fas fa-trash-alt"></i>';
      del.addEventListener("click", () => {
        // console.log(todo.id);
        Lists.deleteTodo(todo.id, todo.list);
        renderContent(todo.list);
      });
      div4.appendChild(edit);
      div4.appendChild(del);
      div2.appendChild(div4);
      div.appendChild(div2);
      if (todo.note) {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        const noteTitle = document.createElement("div");
        noteTitle.textContent = "Note:";
        noteDiv.appendChild(noteTitle);
        const noteDetail = document.createElement("div");
        noteDetail.textContent = `${todo.note}`;
        noteDiv.appendChild(noteDetail);
        div.appendChild(noteDiv);
      }
      const div5 = document.createElement("div");
      div.appendChild(div5);
      const div6 = document.createElement("div");
      const calender = document.createElement("a");
      calender.innerHTML = '<i class="fas fa-calendar-day"></i>';
      div6.appendChild(calender);
      const due = document.createElement("span");
      due.textContent = `${todo.due}`;
      div6.appendChild(due);
      div5.appendChild(div6);
      const div7 = document.createElement("div");

      const listIcon = document.createElement("a");
      listIcon.innerHTML = '<i class="fas fa-clipboard-list"></i>';
      div7.appendChild(listIcon);
      const list = document.createElement("span");
      list.textContent = `${todo.list}`;
      div7.appendChild(list);
      div5.appendChild(div7);
      dom.content.appendChild(div);
    }
  };
  return {
    renderLists,
    renderContent,
  };
})();

export default render;
