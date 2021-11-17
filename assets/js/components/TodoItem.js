import {List, tableList} from "./List";
import {ClearButton} from "./ClearButton";

export const TodoItem = function () {
    // create a container of a to do list
    let containerDiv = document.createElement("div");
    containerDiv.classList = "containerDiv";
    document.body.appendChild(containerDiv);

    // create a title
    let h1 = document.createElement("h1");
    h1.innerHTML = "To Do List";
    containerDiv.appendChild(h1);

    let divInput = document.createElement("div");
    divInput.id = "containerInput";
    containerDiv.appendChild(divInput);

    let input1 = document.createElement("input");
    input1.id = "input1";
    input1.type = "text";
    input1.placeholder = "Name...";
    divInput.appendChild(input1);

    let input2 = document.createElement("input");
    input2.id = "input2";
    input2.type = "submit";
    input2.value = "Add Item";
    divInput.appendChild(input2);

    tableList;

    let containerList = document.createElement("div");
    containerList.id = "containerList";
    containerDiv.appendChild(containerList);
    List(containerList);

    ClearButton(containerDiv);




    //const checkButton = new CheckButton();
}