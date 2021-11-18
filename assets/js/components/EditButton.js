import '@fortawesome/fontawesome-free/js/all.js';

export const EditButton = function (parent, idName, table) {
    let editButton = document.createElement("span");
    editButton.id = idName;
    editButton.innerHTML = "<i class=\"far fa-edit\"></i>";
    parent.appendChild(editButton);

    for (let i = 0; i < table.length; i++) {
        document.getElementById("edit" + i).addEventListener("click", function () {
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

                // edit a list
                document.getElementById("ok" + recupId).addEventListener("click", function () {
                    let value = document.getElementById("inputEdit" + recupId).value;
                    let valueList = document.getElementById("valueList" + recupId);
                    valueList.innerHTML = value;
                    table[recupId] = value;
                    document.getElementById("cancel" + recupId).remove();
                    document.getElementById("ok" + recupId).remove();
                })

                // cancel a edit list
                document.getElementById("cancel" + recupId).addEventListener("click", function () {
                    let valueList = document.getElementById("valueList" + recupId);
                    valueList.innerHTML = table[recupId];
                    document.getElementById("cancel" + recupId).remove();
                    document.getElementById("ok" + recupId).remove();
                })
            }
        });
    }
}