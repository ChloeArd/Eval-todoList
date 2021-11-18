import '@fortawesome/fontawesome-free/js/all.js';

export const DeleteButton = function (parent, idName, table) {
    // create a delete button
    let deleteButton = document.createElement("span");
    deleteButton.id = idName;
    deleteButton.innerHTML = "<i class=\"far fa-times-circle\"></i>";
    parent.appendChild(deleteButton);

    let deleteList = 0;
    const storage = window.localStorage;
    storage.setItem("delete", deleteList);

    for (let i = 0; i < table.length; i++) {
        document.getElementById("delete" + i).addEventListener("click", function () {
            let x = this.id;
            let recupId = x.replace("delete", "");
            // delete a list
            document.getElementById("list" + recupId).remove();
            // delete a list of table
            table.splice(parseInt(recupId), parseInt(recupId + 1));
            // Stores the number of lists that have been deleted
            parseInt(deleteList++);
            console.log("deleteList : " + deleteList);

            storage.setItem("delete", deleteList);

            let value = storage.getItem("delete");
            console.log(value);
        });
    }

}