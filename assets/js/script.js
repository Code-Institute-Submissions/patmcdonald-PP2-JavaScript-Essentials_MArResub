// taskie is a ToDo list app
// Some basic functions for the app

// Wait for the DOM to load 
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
})

// task input method
const taskForm = document.querySelector('.task-form')
let tasks = []

taskForm.addEventListener('submit', function(f)) {
    f.preventDefault()

}



let submitBtn = document.querySelector('.submit-btn')

let taskList = document.querySelector('.task-list')

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
//     var myContent = document.getElementById("myTextarea").value;
//     localStorage.setItem("myContent", myContent);
//   }
//   function myLoad() {
//     var myContent = localStorage.getItem("myContent");
//     document.getElementById("myTextarea").value = myContent;
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
//     text.textContent = storedInput;
// }
