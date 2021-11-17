import {tableList} from "./List";

export const ClearButton = function (parent) {
    tableList;

    let clearButton = document.createElement("input");
    clearButton.id = "clear";
    clearButton.type = "submit";
    clearButton.value = "Clear Items";
    parent.appendChild(clearButton);

    // delete a list of a table
    document.getElementById("clear").addEventListener("click", function () {
        tableList.splice(0, tableList.length);

    });
}