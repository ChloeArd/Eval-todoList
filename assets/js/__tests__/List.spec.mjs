import {List} from "../components/List.mjs";
import '../../../@fortawesome/fontawesome-free/js/all.js';


describe("Test de la méthode List", function () {

    const list = new List();

    beforeAll(function () {
        list.parent = document.getElementById("containerList");
    })

    it('Vérifiacation du parent de la fonction', function () {
        const parent = document.getElementById("containerList");
        expect(list.parent).toBe(parent);
    });
})