
export const EditButton = function (parent, idName, table) {
    let editButton = document.createElement("span");
    editButton.id = idName;
    editButton.innerHTML = "<i class=\"far fa-edit\"></i>";
    parent.appendChild(editButton);

    for (let i = 0; i < table.length; i++) {
        document.getElementById("edit" + i).addEventListener("click", function () {
            let x = this.id;
            let recupId = x.replace("edit", "");

        });
    }
}