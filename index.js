let opendFold = [];

function foldOpen(id) {
    var index = opendFold.indexOf(id);

    if( -1 >= index) {
        document.getElementById(id).className = "text-filde-div-show";
        opendFold.push(id);
    } else {
        document.getElementById(id).className = "text-filde-div";
        opendFold.splice(index, 1);
    }
}

function addItem(){
    let inputFilde = document.getElementById("inputFilde");

    if (!inputFilde.value) {
        alert("Title is empty")
        return;
    }

    const listElement = document.getElementById("todoList");
    const doingList = document.getElementById("doingList");

    const div = document.createElement("div");
    const head = document.createElement("p");
    const date = document.createElement("p");
    const moveButton = document.createElement("button");
    const removeButton = document.createElement("button");

    let inputFildeValue = document.createTextNode(inputFilde.value);

    let today = new Date()

    let month = today.getMonth() + 1;  // 0월이 1월
    let day = today.getDate();  // 날짜

    head.appendChild(inputFildeValue);

    date.innerHTML = month + "/" + day;
    moveButton.innerHTML = "移動";
    removeButton.innerHTML = "削除";

    head.classList.add("event-content");
    date.classList.add("event-content");
    moveButton.classList.add("del-button");
    removeButton.classList.add("del-button");

    removeButton.addEventListener("click", function () {
        div.remove()
    });

    moveButton.addEventListener("click", function(){
        div.appendChild(doingList);
        div.remove();
    });

    div.appendChild(head);
    div.appendChild(date);
    div.appendChild(moveButton);
    div.appendChild(removeButton);

    listElement.appendChild(div);
}

function delItem(){

}

function moveItem(){

}

// var input = document.getElementById("myInput");

//     input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("myBtn").click();
//   }
// }); 