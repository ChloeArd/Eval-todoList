
export const DeleteButton = function (parent, idName) {
    let deleteButton = document.createElement("span");
    deleteButton.id = idName;
    deleteButton.innerHTML = "<i class=\"far fa-times-circle\"></i>";
    parent.appendChild(deleteButton);
}