String.prototype.capitalize = function() {
    return this.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}

Highcharts.chart('keyWords_stacked_chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: Words["palabras_clave"]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Número total'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'porcentaje'
        }
    },
    series: getData()
});

function getData() {


    data = [];

    for (var candidato in Words["candidatos_palabras"]) {
        data.push({
            "name": candidato.capitalize(),
            "data": Words["candidatos_palabras"][candidato]
        });
    }

    return data;
}
