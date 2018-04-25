<<<<<<< HEAD
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
=======
Highcharts.chart('keyWords_stacked_chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: Words
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
  
    for (var candidato in jsonData) {
        data.push({
            "name": candidato,
            "data": jsonData[candidato]["palabras_clave"][0]
        });
    }

    return data;
}
>>>>>>> 3be2acb2f7b8aa8a2cbabd0da9f12667f462696e
