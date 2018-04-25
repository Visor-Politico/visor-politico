<<<<<<< HEAD
String.prototype.capitalize = function() {
    return this.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}

Highcharts.chart('tweets_line_week_chart', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: 'Candidatos'
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
            pointInterval: 3600000, // one hour
            //pointStart: Date.UTC(2018, 4, 20, 0, 0, 0)
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
    
    for (var candidate in DatosSemanales) {
        candidates.push({
            name: candidate.capitalize(),
            data: DatosSemanales[candidate]["tweets_semana"]
        });
    }

    return candidates;
    
}
=======
Highcharts.chart('tweets_line_week_chart', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
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
            pointInterval: 3600000, // one hour
            //pointStart: Date.UTC(2018, 4, 20, 0, 0, 0)
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
    
    for (var candidate in jsonData) {
        candidates.push({
            name: candidate,
            data: jsonData[candidate]["tweets_semana"]
        });
    }

    return candidates;
    
}

>>>>>>> 3be2acb2f7b8aa8a2cbabd0da9f12667f462696e
