import "./css/front.css";
import {TodoItem} from "./js/components/TodoItem";
import Chart from "chart.js/auto";
import {getRelativePosition} from "chart.js/helpers";

const todo = new TodoItem();
todo.todo();

let para = document.createElement("p");
para.innerHTML = "Nombre d'éléments supprimés : " + localStorage.delete;
para.id = "numberDelete";
document.body.append(para);

let canva = document.createElement("canvas");
canva.id = "myChart";
document.body.append(canva);

let update = document.createElement("button");
update.id = "buttonUpdate";
update.innerHTML = "Graphic / update";
document.body.append(update);

let dataDelete = localStorage.delete;

document.getElementById("buttonUpdate").addEventListener("click", function () {
    dataDelete = localStorage.delete;

    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Supprimé"],
            datasets: [{
                label: 'Nombre d\'éléments ayant été supprimés de la TODO List',
                data: [dataDelete],
                backgroundColor: [
                    'rgba(149, 214, 183, 0.2)'
                ],
                borderColor: [
                    'rgba(51, 184, 120, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            onClick: (e) => {
                const canvasPosition = getRelativePosition(e, chart);

                // Substitute the appropriate scale IDs
                const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
            }
        }
    });
});


