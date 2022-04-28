document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")

  form.addEventListener('submit', (e) => {
    e.preventDefault()
 buildATask(e.target.querySelector('#new-task-description').value)
  })
})