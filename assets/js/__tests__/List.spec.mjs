import {List} from "../components/List.mjs";

describe("Test de la méthode List", function () {

    const list = new List();

    beforeAll(function () {
        list.parent = document.getElementById("containerList");
    })

    it('Vérification du parent de la fonction', function () {
        const parent = document.getElementById("containerList");
        expect(list.parent).toBe(parent);
    });
});

/*describe("Test de la méthode List", function () {
    it("test", function () {
        expect(true).toBe(true);
    })
});*/