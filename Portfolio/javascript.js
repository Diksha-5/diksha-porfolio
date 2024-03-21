function myFunction() {
  let hideMenu = document.getElementById("menu-wrap");
  let hamBurger = document.getElementById("open-button");
  if (hideMenu.classList.contains("display-none")) {
    hideMenu.classList.remove("display-none");
  } else {
    hideMenu.classList.add("display-none");
  }

  if (hamBurger.classList.contains("is-active")) {
    hamBurger.classList.remove("is-active");
  } else {
    hamBurger.classList.add("is-active");
  }
}
