import "./css/front.css";
import {TodoItem} from "./js/components/TodoItem";
import {Chart} from "chart.js/auto";
import {getRelativePosition} from "chart.js/helpers";

TodoItem();

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["bonjour", "BONSOIR"],
        datasets: [{
            label: 'Nombre d\'éléments ayant été supprimés de la TODO List',
            data: [2, 8],
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
