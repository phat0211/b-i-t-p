let count = 0;
let resetTimeout;
const btn = document.getElementById("btn");
const saveUserBtn = document.getElementById("saveUser");
const clearUserBtn = document.getElementById("clearUser");
const userList = document.getElementById("userList");

function renderUserList() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    userList.innerHTML = "";
    users.forEach((user, idx) => {
        const li = document.createElement("li");
        li.textContent = user;
        userList.appendChild(li);
    });
}

btn.addEventListener("click", () => {
    count++;
    btn.textContent = `Clicked ${count} times`;
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => {
        count = 0;
        btn.textContent = "Click me";
    }, 3000); // 3 giây không click sẽ reset
});

saveUserBtn.addEventListener("click", () => {
    const user = prompt("Nhập tên người dùng:");
    if (user) {
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        renderUserList();
        alert("Đã lưu người dùng: " + user);
    }
});

clearUserBtn.addEventListener("click", () => {
    localStorage.removeItem("users");
    renderUserList();
    alert("Đã xóa thông tin người dùng!");
});


renderUserList();

localStorage.setItem("token", "test local Storage")