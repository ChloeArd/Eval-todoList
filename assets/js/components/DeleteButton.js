export const DeleteButton = function (parent) {

    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = "<i class=\"far fa-times-circle\"></i>";
    parent.appendChild(deleteButton);

}