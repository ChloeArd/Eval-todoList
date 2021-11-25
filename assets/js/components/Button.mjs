import '/@fortawesome/fontawesome-free/js/all.js';
import {tableList} from "./List.mjs";

localStorage.delete = 0;

export const Button = function (parent, idName1, idName2, idName3, table, i) {
    this.parent = parent;
    this.idName1 = idName1;
    this.idName2 = idName2;
    this.idName3 = idName3;
    this.table = table;
    this.number = i;

    // Check button
    this.checkButton = function () {
        let checkButton = document.createElement("span");
        checkButton.id = this.idName1;
        checkButton.innerHTML = "<i class=\"far fa-check-circle\"></i>";
        this.parent.appendChild(checkButton);

        // Retrieve the id of the element that is checked, for the crossed out
        document.getElementById("check" + this.number).addEventListener("click", function () {
            let x = this.id;
            let recupId = x.replace("check", "");
            document.getElementById("valueList" + recupId).style.textDecoration = "line-through"
        });
    };

    // Edit button
    this.editButton = function () {
        let editButton = document.createElement("span");
        editButton.id = this.idName2;
        editButton.innerHTML = "<i class=\"far fa-edit\"></i>";
        this.parent.appendChild(editButton);

        document.getElementById("edit" + this.number).addEventListener("click", function () {
            let x = this.id;
            let recupId = x.replace("edit", "");

            // Check if the list is already checked
            if (document.getElementById("valueList" + recupId).style.textDecoration !== "line-through") {
                let valueList = document.getElementById("valueList" + recupId);
                valueList.innerHTML = "";
                let inputEdit = document.createElement("input");
                inputEdit.value = table[recupId];
                inputEdit.classList = "inputEdit";
                inputEdit.id = "inputEdit" + recupId;
                inputEdit.maxLength = "40";
                valueList.appendChild(inputEdit);

                // button ok for edit
                let ok = document.createElement("button");
                ok.id = "ok" + recupId;
                ok.classList = "ok";
                ok.innerHTML = "Ok"
                valueList.appendChild(ok);

                // button cancel edit
                let cancel = document.createElement("button");
                cancel.id = "cancel" + recupId;
                cancel.classList = "cancel";
                cancel.innerHTML = "Annuler";
                valueList.appendChild(cancel);

                let buttonCancel = document.getElementById("cancel" + recupId);
                let buttonOk = document.getElementById("ok" + recupId);

                // edit a list
                buttonOk.addEventListener("click", function () {
                    let value = document.getElementById("inputEdit" + recupId).value;
                    let valueList = document.getElementById("valueList" + recupId);
                    valueList.innerHTML = value;
                    table[recupId] = value;
                    buttonCancel.remove();
                    buttonOk.remove();
                })

                // cancel a edit list
                buttonCancel.addEventListener("click", function () {
                    let valueList = document.getElementById("valueList" + recupId);
                    valueList.innerHTML = table[recupId];
                    buttonCancel.remove();
                    buttonOk.remove();
                })
            }
        });
    };

    // Delete button
    this.deleteButton = function () {
        // create a delete button
        let deleteButton = document.createElement("span");
        deleteButton.id = this.idName3;
        deleteButton.innerHTML = "<i class=\"far fa-times-circle\"></i>";
        this.parent.appendChild(deleteButton);

        document.getElementById("delete" + this.number).addEventListener("click", function () {
            let x = this.id;
            let recupId = x.replace("delete", "");

            // delete a list
            let list = document.getElementById("list" + i);
            list.remove();

            // delete a list of table
            table.splice(parseInt(recupId), 1, "");

            // Stores the number of lists that have been deleted
            localStorage.delete = parseInt(localStorage.delete) + 1;
            document.getElementById("numberDelete").innerHTML = "Nombre d'éléments supprimés : " + localStorage.delete;
        });
    };

    // clear button for clear all the list
    this.clearButton = function () {
        tableList;

        let clearButton = document.createElement("input");
        clearButton.id = "clear";
        clearButton.type = "submit";
        clearButton.value = "Clear Items";
        this.parent.appendChild(clearButton);

        // delete a list of a table
        document.getElementById("clear").addEventListener("click", function () {
            for (let i = 0; i < tableList.length; i++) {
                // delete all list
                if (tableList[i] !== "") {
                    let list = document.getElementById("list" + i);
                    list.remove();
                    localStorage.delete = parseInt(localStorage.delete) + 1;
                    document.getElementById("numberDelete").innerHTML = "Nombre d'éléments supprimés : " + localStorage.delete;
                }
            }
            // delete a values of a table
            tableList.splice(0, tableList.length);
        });
    }
}


