const title = document.getElementById("main-title");
title.innerText = "Chào mừng bạn đến với khóa học JavaScript!";

const desc = document.querySelector(".description");
desc.innerHTML = "Bạn sẽ học về <strong>DOM, Events</strong>";

function sayHello() {
  const name = document.getElementById("student-name").value.trim();
  const greeting = document.getElementById("greeting");
  if (name) {
    greeting.innerText = `Xin chào, ${name}!`;
  } else {
    greeting.innerText = "Vui lòng nhập tên!";
  }
}
