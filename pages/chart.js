google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Create the data table.
const data = new google.visualization.DataTable();
data.addColumn('string', 'Topping');
data.addColumn('number', 'Slices');
data.addRows([
['Jan', 3],
['Fev', 1],
['Mar', 1],
['Abr', 1],
['Mai', 2],
['Jun', 2],
['Jul', 2],
['Ago', 2],
['Set', 2],
['Out', 2],
['Nov', 2],
['Dez', 2]
]);

// Set chart options
let options = {'title':'Previsão de Geração de Energia',
                   'width':600,
                   'height':500};
// Instantiate and draw our chart, passing in some options.
let chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}