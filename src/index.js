import Lists from "./scripts/lists.js";
import dom from "./scripts/dom.js";
import event from "./scripts/event.js";

import "./styles/style.css";
import "./styles/navbar.css";
import "./styles/form.css";
import "./styles/side-menu.css";
import "./styles/todo.css";
import "./styles/footer.css";

function populateStorage() {
  localStorage.setItem("Lists", JSON.stringify(Lists.getLists()));
}

function setLists() {
  const localLists = JSON.parse(localStorage.getItem("Lists"));
  Lists.updateLists(localLists);
}

if (!localStorage.getItem("Lists")) {
  populateStorage();
} else {
  setLists();
}
window.onbeforeunload = function () {
  populateStorage();
};
