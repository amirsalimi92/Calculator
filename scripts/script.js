//Set the theme
let main = document.querySelector("#main");
let dokme = document.querySelectorAll(".dokme");
let right = document.querySelector("#right");
let recent = document.querySelector("#recent");
let equal = document.querySelector("#equal");
let theme = document.querySelector("#theme");

//get the saved theme
let themeModeFirst = localStorage.getItem("themeMode");

//set the saved theme
if (themeModeFirst === "day") {
  dokme.forEach((e) => {
    e.classList.toggle("day-dokme");
  });
  right.classList.toggle("day-right");
  recent.classList.toggle("day-recent");
  equal.classList.toggle("day-equal");
  main.classList.toggle("day-main");

  localStorage.setItem("themeMode", "day");
  theme.innerHTML = "N";

  //for first ine we set the theme to night
} else if (themeModeFirst == null || themeModeFirst === "night") {
  localStorage.setItem("themeMode", "night");
  theme.innerHTML = "D";
}

//theme button operator
theme.addEventListener("click", () => {
  dokme.forEach((e) => {
    e.classList.toggle("day-dokme");
  });
  right.classList.toggle("day-right");
  recent.classList.toggle("day-recent");
  equal.classList.toggle("day-equal");
  main.classList.toggle("day-main");

  //give the current theme mode
  let themeMode = localStorage.getItem("themeMode");

  //set the new theme
  if (themeMode === "night") {
    localStorage.setItem("themeMode", "day");
    theme.innerHTML = "N";
  } else if (themeMode === "day") {
    localStorage.setItem("themeMode", "night");
    theme.innerHTML = "D";
  }
});
