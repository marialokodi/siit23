function showTab(index) {
  let activePage = document.querySelector("#pages > .page.active");
  if (activePage !== null) {
    activePage.classList.remove("active");
  }

  let pages = document.querySelectorAll("#pages > .page");
  pages[index].classList.add("active");

  let buttons = document.querySelectorAll("nav > button");
  buttons[index].classList.add("active");
  for (let button of buttons) {
    button.classList.remove("active");
  }
}
