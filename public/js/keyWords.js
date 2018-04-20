Highcharts.chart('keyWords', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Palabras clave'
    },
    xAxis: {
        categories: ['Seguridad', 'Educación', 'Trabajo', 'Corrupción', 'Oportunidades']
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
    series: [{
        name: 'Ricardo',
        data: [5, 3, 9, 7, 2]
    }, {
        name: 'Manuel',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Huguez',
        data: [3, 4, 4, 2, 5]
    }]
});
