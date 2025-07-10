function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim(); 
    if (!task) return;
  
    const li = document.createElement("li");
    li.textContent = task;
  
    const btn = document.createElement("button");
    btn.textContent = "Xoá";
    btn.onclick = () => li.remove(); 
  
    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
  
    input.value = "";
  }

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    const title = document.getElementById("title");
    if (document.body.classList.contains("dark")) {
      title.textContent = "Chế độ nền tối";
    } else {
      title.textContent = "Chế độ nền sáng";
    }
  }