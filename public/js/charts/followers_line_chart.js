Highcharts.chart('followers_line_chart', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Seguidores en el tiempo'
    },
    subtitle: {
        text: 'candidatos'
    },
    /*xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
        },*/
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        }
    },
    
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000*24*7, // one hour
            pointStart: Date.UTC(2018, 4, 20, 0, 0, 0)
        }
    },
    yAxis: {
        title: {
            text: 'Seguidores'
        },
       
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    
    series: validateData()
});

function validateData() {
    candidates = [];
    currentCandidate = {};

    /*for (var candidate in jsonData) {
        currentCandidate["name"] = candidate["name"];
        currentCandidate["data"] = candidate["data"];
        candidates.append(currentCandidate);
    }

    return candidates;*/
    return [{
        name: "Winter 2014-2015",
        data: [
            [Date.UTC(1970, 10, 25), 0],
            [Date.UTC(1970, 11,  6), 0.25],
            [Date.UTC(1970, 11, 20), 1.41],
            [Date.UTC(1970, 11, 25), 1.64],
            [Date.UTC(1971, 0,  4), 1.6],
            [Date.UTC(1971, 0, 17), 2.55],
            [Date.UTC(1971, 0, 24), 2.62],
            [Date.UTC(1971, 1,  4), 2.5],
            [Date.UTC(1971, 1, 14), 2.42],
            [Date.UTC(1971, 2,  6), 2.74],
            [Date.UTC(1971, 2, 14), 2.62],
            [Date.UTC(1971, 2, 24), 2.6],
            [Date.UTC(1971, 3,  1), 2.81],
            [Date.UTC(1971, 3, 11), 2.63],
            [Date.UTC(1971, 3, 27), 2.77],
            [Date.UTC(1971, 4,  4), 2.68],
            [Date.UTC(1971, 4,  9), 2.56],
            [Date.UTC(1971, 4, 14), 2.39],
            [Date.UTC(1971, 4, 19), 2.3],
            [Date.UTC(1971, 5,  4), 2],
            [Date.UTC(1971, 5,  9), 1.85],
            [Date.UTC(1971, 5, 14), 1.49],
            [Date.UTC(1971, 5, 19), 1.27],
            [Date.UTC(1971, 5, 24), 0.99],
            [Date.UTC(1971, 5, 29), 0.67],
            [Date.UTC(1971, 6,  3), 0.18],
            [Date.UTC(1971, 6,  4), 0]
        ]
    }, {
        name: "Winter 2015-2016",
        data: [
            [Date.UTC(1970, 10,  9), 0],
            [Date.UTC(1970, 10, 15), 0.23],
            [Date.UTC(1970, 10, 20), 0.25],
            [Date.UTC(1970, 10, 25), 0.23],
            [Date.UTC(1970, 10, 30), 0.39],
            [Date.UTC(1970, 11,  5), 0.41],
            [Date.UTC(1970, 11, 10), 0.59],
            [Date.UTC(1970, 11, 15), 0.73],
            [Date.UTC(1970, 11, 20), 0.41],
            [Date.UTC(1970, 11, 25), 1.07],
            [Date.UTC(1970, 11, 30), 0.88],
            [Date.UTC(1971, 0,  5), 0.85],
            [Date.UTC(1971, 0, 11), 0.89],
            [Date.UTC(1971, 0, 17), 1.04],
            [Date.UTC(1971, 0, 20), 1.02],
            [Date.UTC(1971, 0, 25), 1.03],
            [Date.UTC(1971, 0, 30), 1.39],
            [Date.UTC(1971, 1,  5), 1.77],
            [Date.UTC(1971, 1, 26), 2.12],
            [Date.UTC(1971, 3, 19), 2.1],
            [Date.UTC(1971, 4,  9), 1.7],
            [Date.UTC(1971, 4, 29), 0.85],
            [Date.UTC(1971, 5,  7), 0]
        ]
    }, {
        name: "Winter 2016-2017",
        data: [
            [Date.UTC(1970, 9, 15), 0],
            [Date.UTC(1970, 9, 31), 0.09],
            [Date.UTC(1970, 10,  7), 0.17],
            [Date.UTC(1970, 10, 10), 0.1],
            [Date.UTC(1970, 11, 10), 0.1],
            [Date.UTC(1970, 11, 13), 0.1],
            [Date.UTC(1970, 11, 16), 0.11],
            [Date.UTC(1970, 11, 19), 0.11],
            [Date.UTC(1970, 11, 22), 0.08],
            [Date.UTC(1970, 11, 25), 0.23],
            [Date.UTC(1970, 11, 28), 0.37],
            [Date.UTC(1971, 0, 16), 0.68],
            [Date.UTC(1971, 0, 19), 0.55],
            [Date.UTC(1971, 0, 22), 0.4],
            [Date.UTC(1971, 0, 25), 0.4],
            [Date.UTC(1971, 0, 28), 0.37],
            [Date.UTC(1971, 0, 31), 0.43],
            [Date.UTC(1971, 1,  4), 0.42],
            [Date.UTC(1971, 1,  7), 0.39],
            [Date.UTC(1971, 1, 10), 0.39],
            [Date.UTC(1971, 1, 13), 0.39],
            [Date.UTC(1971, 1, 16), 0.39],
            [Date.UTC(1971, 1, 19), 0.35],
            [Date.UTC(1971, 1, 22), 0.45],
            [Date.UTC(1971, 1, 25), 0.62],
            [Date.UTC(1971, 1, 28), 0.68],
            [Date.UTC(1971, 2,  4), 0.68],
            [Date.UTC(1971, 2,  7), 0.65],
            [Date.UTC(1971, 2, 10), 0.65],
            [Date.UTC(1971, 2, 13), 0.75],
            [Date.UTC(1971, 2, 16), 0.86],
            [Date.UTC(1971, 2, 19), 1.14],
            [Date.UTC(1971, 2, 22), 1.2],
            [Date.UTC(1971, 2, 25), 1.27],
            [Date.UTC(1971, 2, 27), 1.12],
            [Date.UTC(1971, 2, 30), 0.98],
            [Date.UTC(1971, 3,  3), 0.85],
            [Date.UTC(1971, 3,  6), 1.04],
            [Date.UTC(1971, 3,  9), 0.92],
            [Date.UTC(1971, 3, 12), 0.96],
            [Date.UTC(1971, 3, 15), 0.94],
            [Date.UTC(1971, 3, 18), 0.99],
            [Date.UTC(1971, 3, 21), 0.96],
            [Date.UTC(1971, 3, 24), 1.15],
            [Date.UTC(1971, 3, 27), 1.18],
            [Date.UTC(1971, 3, 30), 1.12],
            [Date.UTC(1971, 4,  3), 1.06],
            [Date.UTC(1971, 4,  6), 0.96],
            [Date.UTC(1971, 4,  9), 0.87],
            [Date.UTC(1971, 4, 12), 0.88],
            [Date.UTC(1971, 4, 15), 0.79],
            [Date.UTC(1971, 4, 18), 0.54],
            [Date.UTC(1971, 4, 21), 0.34],
            [Date.UTC(1971, 4, 25), 0]
        ]
    }]

}

/*
Highcharts.chart('followers', {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Seguidores en Twitter'
    },
    subtitle: {
        text: 'Línea del tiempo de los seguidores de los candidatos'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Número de seguidores'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: true,
    },
    tooltip: {
        valueSuffix: ' m/s'
    },
   
    series: [{
        //colorByPoint: true,
        name: 'Hestavollane',
        data: [
            3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
            6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
            9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
            10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
            10.1
        ]

    }, {
        name: 'Vik',
        data: [
            0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
            0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
            0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
            0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
            1.5
        ]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});
*/
