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
