let folderOpenVariable1 = true;
let folderOpenVariable2 = true;
let folderOpenVariable3 = true;

function foldOpen1(){

    // let foldDiv1 = document.getElementById("foldDiv1");
    // foldDiv1.classList.add(foldDiv)

    if (folderOpenVariable1){
        document.getElementById("foldDiv1").className = "text-filde-div-show";
        folderOpenVariable1 = false;
    } else {
        document.getElementById("foldDiv1").className = "text-filde-div";
        folderOpenVariable1 = true;
    }
}

function foldOpen2(){

    if (folderOpenVariable2){
        document.getElementById("foldDiv2").className = "text-filde-div-show";
        folderOpenVariable2 = false;
    } else {
        document.getElementById("foldDiv2").className = "text-filde-div";
        folderOpenVariable2 = true;
    }
}

function foldOpen3(){

    if (folderOpenVariable3){
        document.getElementById("foldDiv3").className = "text-filde-div-show";
        folderOpenVariable3 = false;
    } else {
        document.getElementById("foldDiv3").className = "text-filde-div";
        folderOpenVariable3 = true;
    }
}

function addItem(){
    let inputFilde = document.getElementById("inputFilde");

    if (!inputFilde.value) {
        alert("Title is empty")
        return;
    }

    const listElement = document.getElementById("todoList");

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
    moveButton.innerHTML = "削除";
    removeButton.innerHTML = "移動";

    head.classList.add("event-content");
    date.classList.add("event-content");
    moveButton.classList.add("del-button");
    removeButton.classList.add("del-button");

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