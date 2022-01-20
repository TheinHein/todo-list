const dom = (() => {
  const formBtn = document.querySelector(".toggle-form");
  const formContainer = document.querySelector(".form-container");
  const updateContainer = document.querySelector(".update-container");
  const sideMenuBtn = document.querySelector("#menu-icon");
  const sideMenu = document.querySelector(".side-menu");
  const shield = document.querySelector(".shield");
  const listsBtn = document.querySelector(".lists-btn");
  const lists = document.querySelector(".lists");
  const menus = document.querySelectorAll(".side-menu div");
  const title = document.querySelector(".title");
  const createListBtn = document.querySelector(".create-list");
  const listName = document.querySelector("#list-name");
  const content = document.querySelector(".content");
  const listSelect = document.querySelector("#list");
  const listNSelect = document.querySelector("#listN");
  const options = document.querySelectorAll("#list > option");
  const form = document.querySelector("#form");
  const update = document.querySelector("#update");
  const todayBtn = document.querySelector("#today");
  const homeBtn = document.querySelector("#home");

  const toggle = (ele) => {
    ele.classList.toggle("toggle");
  };

  const clickShield = () => {
    formContainer.classList.remove("toggle");
    updateContainer.classList.remove("toggle");
    shield.classList.remove("toggle");
    sideMenu.classList.remove("toggle");
  };

  const addStyle = (node, nodeList) => {
    for (let node of nodeList) {
      node.removeAttribute("id", "current-page");
    }
    node.setAttribute("id", "current-page");
  };

  return {
    formBtn,
    formContainer,
    updateContainer,
    sideMenuBtn,
    sideMenu,
    shield,
    listsBtn,
    lists,
    menus,
    title,
    createListBtn,
    listName,
    content,
    listSelect,
    listNSelect,
    form,
    options,
    update,
    todayBtn,
    homeBtn,
    toggle,
    clickShield,
    addStyle,
  };
})();

export default dom;
