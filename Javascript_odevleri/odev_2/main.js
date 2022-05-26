const listDOM = document.querySelector("#list")
const taskDom = document.querySelector("#task")



function newElement () {

    const liDOM = document.createElement("li");
    liDOM.innerHTML =taskDom.value;
    listDOM.append(liDOM);
    taskDom.value="";   
}