import {Button} from "./Button";

export let tableList = [];

export const List = function (parent) {

    this.parent = parent;

    this.list = function () {
        document.getElementById("input2").addEventListener("click", function () {
            // get the value of the input
            let input1 = document.getElementById("input1").value.trim();
            let x = tableList.length;

            if (input1 !== "") {
                tableList.push(input1);
                localStorage.setItem("table", JSON.stringify(tableList));
                let tableLocalStorage = JSON.parse(localStorage.getItem("table"));

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

                const button = new Button(div, "check" + x, "edit" + x, "delete" + x, tableList, x);
                button.checkButton();
                button.editButton();
                button.deleteButton();

                document.getElementById("input1").value = "";
            }
        });
    }
}