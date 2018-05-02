

Highcharts.chart('keyWords_stacked_chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
        categories: Words
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Número total'
        }
    },
    tooltip: {
        formatter: function() {
            var s = [];
            s.push(this.x);
            this.points.forEach(function(point) {
                if (point.y > 0) {
                    s.push('<span style="color:'+point.series.color+'>'+point.series.name+'</span>: <b>'+point.y+'</b> ('+point.percentage+'%)');//'<b>' + point.series.name + '</b>: ' + point.y);
                } else {
                    s.push(null);
                }
                
            });

            return s;
        },
        split: true
        //pointFormat: '<span style="height: auto color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)',
        
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
            "name": candidato.capitalize() +'<br>'+ jsonData[candidato]["data"]["twitter"],
            "data": jsonData[candidato]["palabras_clave"][0]
        });
    }

    return data;
}
