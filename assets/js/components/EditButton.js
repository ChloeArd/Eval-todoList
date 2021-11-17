export const EditButton = function (parent) {

    let editButton = document.createElement("span");
    editButton.innerHTML = "<i class=\"far fa-edit\"></i>";
    parent.appendChild(editButton);

}