const listDOM = document.querySelector("#list")
const taskDom = document.querySelector("#task")
localStorage.setItem("list", JSON.stringify(taskDom))
function newElement() {
    if (taskDom.value != "") {

        const DIVDOM = document.createElement("div")
        DIVDOM.classList.add("list-item")
        listDOM.append(DIVDOM)

        const liDOM = document.createElement("li");
        liDOM.classList.add("todo-item")
        liDOM.innerHTML = taskDom.value;
        DIVDOM.append(liDOM);
        $('.dolu').toast('show')

        const Close = document.createElement("span")
        Close.classList.add("button")
        Close.textContent = "X";
        DIVDOM.append(Close)

        Close.addEventListener("click", removelisk)
        liDOM.addEventListener("click", finishToDo)
        

        taskDom.value = "";
    } else {
        $('.bos').toast('show')
    }



    }

function removelisk() {
    this.parentElement.remove();
}

function finishToDo() {
    this.classList.toggle("checked")
}

localStorage.setItem("list", JSON.stringify(taskDom))



