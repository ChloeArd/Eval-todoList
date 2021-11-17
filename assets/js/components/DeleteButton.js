
export const DeleteButton = function (parent, idName, table) {
    // create a delete button
    let deleteButton = document.createElement("span");
    deleteButton.id = idName;
    deleteButton.innerHTML = "<i class=\"far fa-times-circle\"></i>";
    parent.appendChild(deleteButton);

    sessionStorage.delete = 0;

    for (let i = 0; i < table.length; i++) {
        document.getElementById("delete" + i).addEventListener("click", function () {
            let x = this.id;
            let recupId = x.replace("delete", "");
            // delete a list
            document.getElementById("list" + recupId).remove();
            // delete a list of table
            table.splice(parseInt(recupId), parseInt(recupId + 1));
            // Stores the number of lists that have been deleted
            sessionStorage.delete++;
        });
    }

}