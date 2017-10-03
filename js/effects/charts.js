/**
 * Created by Jose on 2016-09-23.
 */
google.charts.load("current", {packages:["corechart"]});

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawPieChart);

function drawChart() {

    var data = new google.visualization.arrayToDataTable([
        ['Languages', 'Skills', {role: 'style'}],
        ['Java', 8, 'red'],
        ['HTML', 9, 'orange'],
        ['CSS', 9, 'yellow'],
        ['JavaScript', 7, 'green'],
        ['PHP', 5, 'blue'],
        ['Bash', 3, 'indigo'],
        ['Assembly', 4, 'violet']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var options = {
        title: "Technical Skills",
        bar: {groupWidth: "95%"},
        legend: { position: "none" }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
    chart.draw(view, options);
}


function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Languages', 'Skills', {role: 'style'}],
        ['Java', 8, 'red'],
        ['HTML', 9, 'orange'],
        ['CSS', 9, 'yellow'],
        ['JavaScript', 7, 'green'],
        ['PHP', 5, 'blue'],
        ['Bash', 3, 'indigo'],
        ['Assembly', 4, 'violet']
    ]);

    var options = {
        title: 'Technical Skills',
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
    chart.draw(data, options);
}