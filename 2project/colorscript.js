const taskAddBtn = document.getElementById('taskBtn')
const taskArea = document.getElementById('taskBtn')
const todoBoard = document.getElementById('todoContainer')

taskAddBtn.addEventListener('click',() => {
    const input = document.getElementById('inputbtn') 
    if(!input) return
    const taskCard = document.createElement('btn')
    taskCard.classList.add('item')

})