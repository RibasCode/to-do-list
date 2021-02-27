'use strict'

const addBtn = document.getElementById("add-btn")
const templateToDoList = document.getElementById('template-to-do-list').content

const cards = document.getElementById('cards')
const fragment = document.createDocumentFragment()



addBtn.addEventListener('click', () => {
    pintarToDoList();
});



const pintarToDoList = () => {

    const clone = templateToDoList.cloneNode(true)
    
    fragment.appendChild(clone)
    cards.appendChild(fragment)

}



let list = ["task 1"]