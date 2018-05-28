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
        },
	    min: Date.UTC(2018,4,19)
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
            }
        }
    },
    yAxis: {
        title: {
            text: 'Tweets'
        },
       
    },
    tooltip: {
        crosshairs: true
        //shared: true
        
    },
    
    series: validateData()
});

function validateData() {
    candidates = [];

    for (var candidate in jsonData) {
        candidates.push({
            name: candidate.capitalize() +'<br>'+ jsonData[candidate]["data"]["twitter"],
            data: jsonData[candidate]["tweets_semana"]
        });
    }

    return candidates;

}

