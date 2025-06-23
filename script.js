function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value === "") return;
  let li = document.createElement("li");
  li.textContent = input.value;
  li.onclick = () => li.remove(); // remove task on click
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}