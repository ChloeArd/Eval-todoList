
export const EditButton = function (parent, idName) {
    let editButton = document.createElement("span");
    editButton.id = idName;
    editButton.innerHTML = "<i class=\"far fa-edit\"></i>";
    parent.appendChild(editButton);
}