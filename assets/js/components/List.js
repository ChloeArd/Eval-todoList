import {CheckButton} from "./CheckButton";
import {EditButton} from "./EditButton";
import {DeleteButton} from "./DeleteButton";

export let tableList = [];

export const List = function (parent) {
    document.getElementById("input2").addEventListener("click", function () {
        // get the value of the input
        let input1 = document.getElementById("input1").value;
        let x = tableList.length;

        //let table = JSON.parse(localStorage.getItem("table", tableList));

        if (input1 !== "") {
            tableList.push(input1);
            console.log(tableList);
            localStorage.setItem("table", JSON.stringify(tableList));
            var tableLocalStorage = JSON.parse(localStorage.getItem("table"));
            console.log("local : " + tableLocalStorage);

            // create a list
            let div = document.createElement("div");
            div.id = "list" + x;
            div.classList = "list";
            parent.prepend(div);

            let valueInput = document.createElement("div");
            valueInput.id = "valueList" + x;
            valueInput.classList = "valueList";
            valueInput.innerHTML = input1;
            div.prepend(valueInput);

            CheckButton(div, "check" + x, tableList);
            EditButton(div, "edit" + x, tableList);
            DeleteButton(div, "delete" + x, tableList);

            document.getElementById("input1").value = "";

        }

    });


    //const checkButton = new CheckButton();
}