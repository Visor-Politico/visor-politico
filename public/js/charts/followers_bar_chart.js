function thousandsSep (num) {
	num = String(num).replace(/\D/g, "");
	return num === '' ? num : Number(num).toLocaleString();
}

var _formatter = [];


Highcharts.setOptions({
	lang: {
		thousandsSep: ','
	}
});

Highcharts.chart('followers_bar_chart', {
	chart: {
		type: 'column',
		marginTop: 60,
		borderColor: '#3b5998',
		borderWidth: 0
	},
	title: {
		text: ''
	            },
		            xAxis: {
        type: 'category',
        labels: {
            enabled: true,
            formatter: function() { return this.value.capitalize() + '<br>' + jsonData[this.value]["data"]["twitter"]; }
        }
    },
    yAxis: {
            title: {
                text: ' '
            },
            labels: {
                format: '{value:,f}'
            }
        },
    legend: {
        enabled: false
    },
    tooltip: {
        positioner: function (labelWidth, labelHeight, point) {
            var tooltipX, tooltipY;
            var chart = this.chart;
            /* Altura de la imagen del candidato */
            var alturaImagen = $('.img-candidato-grafica')[0].height;
            /* Ancho del tooltip (width) */
            var anchoTooltip = labelWidth;
            /* Espacio disponible para pintar el tooltip (width) */
            var espacioDisponible = chart.plotWidth - point.plotX;
            /* Espacio faltante para pintar el tooltip (width) */
            var espacioFaltante = labelWidth - espacioDisponible;
            /* Posición en X del tooltip */
            var posicionX = point.plotX + chart.plotLeft;
            if ((anchoTooltip/2) > espacioDisponible) {
                tooltipX = (posicionX - espacioFaltante) > 0 ? posicionX - espacioFaltante : 10;
            } else {
                tooltipX = (posicionX - (anchoTooltip/2)) > 0 ? (posicionX - (anchoTooltip/2)) : 10;
            }
            if (point.plotY < 54){
                alturaImagen = 0;
            }
            tooltipY = point.plotY - (alturaImagen);
            return {
                x: tooltipX,
                y: tooltipY
            };
        },
        headerFormat: '<span style="font-size:11px; color:{point.color}"><b>{point.name}</b></span><br>',
        pointFormatter: function() {
            var tw = "";
            if (!jsonData[this.name]["data"].twitter) {
                tw = "(Sin Twitter)";
            }
            return '<span style="font-size:11px; color:'+this.color+'">'+this.name.capitalize()+','+ jsonData[this.name]["data"].actor_politico+': </span> <br> <b>'+thousandsSep(this.y)+'</b> seguidores '+tw+'<br/>'; },
        borderRadius: 5,
        hideDelay: 0
    },
    series: [{
        colorByPoint: true,
        data: filterData()
    }]
});

function filterData() {
    candidates = [];
    for (var candidate in jsonData) {
        _formatter.push(jsonData[candidate]["data"].picture);
        candidates.push({
            "name": candidate,
            "y": jsonData[candidate]["data"].followers,
            "dataLabels" : {
                enabled: true,
                useHTML: true,
                formatter: function () {
                    return '<div><img src="'+_formatter[this.colorIndex]+' " height="50" width="50" class="img-candidato-grafica '+this.colorIndex+'" alt=""/> </div>';
                }
            }
        });
    }
    return candidates;
}
