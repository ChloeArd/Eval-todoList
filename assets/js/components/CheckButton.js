import '@fortawesome/fontawesome-free/js/all.js';

export const CheckButton = function (parent, idName, table) {
    let checkButton = document.createElement("span");
    checkButton.id = idName;
    checkButton.innerHTML = "<i class=\"far fa-check-circle\"></i>";
    parent.appendChild(checkButton);

    // Retrieve the id of the element that is checked, for the crossed out
    for (let i = 0; i < table.length; i++) {
        document.getElementById("check" + i).addEventListener("click", function () {
            let x = this.id;
            let recupId = x.replace("check", "");
            document.getElementById("valueList" + recupId).style.textDecoration = "line-through";
        });
    }
}


