function changeTheme() {
  let body = document.querySelector("body");
  body.classList.add("dark");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function lesson() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  alert(
    "Thank you for booking," +
      name +
      "We'll be in touch by email and we're looking forward to your first coaching session."
  );
}
let lessonButton = document.querySelector(".lesson-button");
lessonButton.addEventListener("click", lesson);
