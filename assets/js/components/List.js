import {CheckButton} from "./CheckButton";
import {EditButton} from "./EditButton";
import {DeleteButton} from "./DeleteButton";

export const List = function (parent) {
    document.getElementById("input2").addEventListener("click", function () {
        let input1 = document.getElementById("input1").value;

        if (input1 !== "") {
            let div = document.createElement("div");
            div.classList = "list";
            parent.appendChild(div);

            let valueInput = document.createElement("div");
            valueInput.classList = "valueList";
            valueInput.innerHTML = input1;
            div.appendChild(valueInput);

            CheckButton(div);
            EditButton(div);
            DeleteButton(div);

            document.getElementById("input1").value = "";
        }

    });


    //const checkButton = new CheckButton();
}