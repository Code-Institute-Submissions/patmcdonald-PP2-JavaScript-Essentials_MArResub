// taskie is a task list app
// Some basic functions for the app

// Wait for the DOM to load 
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed')
// })


// Code adapted from "https://code-boxx.com/simple-javascript-to-do-list"
// Used under MIT licence


let task = {
    // (A) INITIALIZE TO DO LIST
    data : [], // task list data array
    hAdd : null, // html add item text field
    hTemplate : null, // html item row template
    hList : null, // html to do list
    init : () => {
      // (A1) INIT LOCALSTORAGE
      if (localStorage.task == undefined) { localStorage.task = "[]" }
  
      // (A2) RESTORE PREVIOUS SESSION
      task.data = JSON.parse(localStorage.task)
  
      // (A3) GET HTML ELEMENTS
      task.hAdd = document.getElementById("task-input")
      task.hTemplate = document.getElementById("task-template").content
      task.hList = document.getElementById("task-list")
  
      // (A4) "ENABLE" ADD ITEM FORM
      document.getElementById("task-form").onsubmit = task.add
  
      // (A5) DRAW TO DO LIST
      task.draw()
    },
  
    // (B) DRAW TO DO LIST
    draw : () => {
      // (B1) RESET LIST
      task.hList.innerHTML = ""
  
      // (B2) LOOP & GENERATE ROWS
      if (task.data.length>0) { for (let id in task.data) {
        let row = task.hTemplate.cloneNode(true)
        row.querySelector(".task-item").textContent = task.data[id][0]
        row.querySelector(".task-done").onclick = () => { task.toggle(id) }
        row.querySelector(".task-del").onclick = () => { task.del(id) }
        if (task.data[id][1]) {
          row.querySelector(".task-item").classList.add("task-ok")
        }
        task.hList.appendChild(row)
      }}
    },
  
    // (C) HELPER - SAVE DATA INTO LOCAL STORAGE
    save: () => {
      localStorage.task = JSON.stringify(task.data)
      task.draw()
    },
  
    // (D) ADD A NEW ITEM TO THE LIST
    add : () => {
      task.data.push([task.hAdd.value, false])
      task.hAdd.value = ""
      task.save()
      return false
    },
  
    // (E) UPDATE task ITEM DONE/NOT YET
    toggle: (id) => {
      task.data[id][1] = !task.data[id][1]
      task.save()
    },
  
    // (F) DELETE ITEM
    del: (id) => { if (confirm("Delete task?")) {
      task.data.splice(id, 1)
      task.save()
    }}
  }
  
  // (G) PAGE INIT
  window.addEventListener("load", task.init)
  








// // task input method
// const taskForm = document.querySelector('.task-form')
// let task= {
//     data
// }

// taskForm.addEventListener('submit', function(f)) {
//     f.preventDefault()

// }



// let submitBtn = document.querySelector('.submit-btn')

// let taskList = document.querySelector('.task-list')

// let taskInput = document.querySelector('task-input')

// localStorage functionality
// save a task
// function saveTask() {
//     let taskInput = document.getElementById('task-input').onclick.submitBtn
//     localStorage.setItem('task', JSON.stringify(this.taskInput))
// }



// submitBtn.addEventListener('click', saveTask)
// // taskList.addEventListener() //check back here!

// function mySave() {
//     var myContent = document.getElementById("myTextarea").value
//     localStorage.setItem("myContent", myContent)
//   }
//   function myLoad() {
//     var myContent = localStorage.getItem("myContent")
//     document.getElementById("myTextarea").value = myContent
//   }

// // define what a task is
// let task = taskInput
// // input task in textfield


// // store a tasks in an array
// let tasks = []

// // add a task
// function addTask() {
//     document.getElementById('task-input')

// }

// // display a task
// function displaytask()

// // store a task in taskie
// function storeTask()

// // edit task
// function editTask()

// // delete/remove task
// function deleteTask()

// // https://medium.com/swlh/using-local-storage-with-javascript-cb3713ca56c4
// // Code below is adapted from above to work with html elements for testing

// const storageInput = document.querySelector('.task-input')

// const button = document.querySelector('.submit-task')

// // Event Listener that listens to input
// storageInput.addEventListener('.task-input', name => {
//     text.textContent = name.target.value
// })

// // Saving to localstorage

// const saveToLocal = () => {
//     // What this does is to save to localStorage the textContent of the paragraph field. But remember we are getting the textContent value from the input field.
//     localStorage.setItem('task', text.textContent)
// }

// button.addEventListener('click', saveToLocal)

// const storedInput = localStorage.getItem('task')

// if (storageInput) {
//     text.textContent = storedInput
// }
