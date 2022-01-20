import Lists from "./lists.js";
import dom from "./dom.js";
import event from "./event.js";

import "./style.css";
import "./navbar.css";
import "./form.css";
import "./side-menu.css";
import "./todo.css";
import "./footer.css";

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
