function printObject(o) {
    var out = '';
    for (var p in o) {
        out += p + ': ' + o[p] + '\n';
    }
    alert(out);
}

function thousandsSep (num) {
	  num = String(num).replace(/\D/g, "");
    return num === '' ? num : Number(num).toLocaleString();
}

Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

Highcharts.chart('followers_display', {
        chart: {
            type: 'column',
            marginTop: 40,
            borderColor: '#3b5998',
            borderWidth: 1,
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            title: {
                text: 'Seguidores'
            },
            labels: {
                format: '{value:,f}'
            },
//            max: 4000000
        },
        colors: [
                                    '#1c66b2',                                        
                                    '#4b7022',                                        
                                    '#8d200a',                                        
                                    '#c9c9c9',                                        
                                    '#454545',                                        
                            ],
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
                            tooltipY = point.plotY - (alturaImagen + 20);    
                            return {
                                x: tooltipX,
                                y: tooltipY
                            };
                        },
            headerFormat: '<span style="font-size:11px; color:{point.color}"><b>{point.name}</b></span><br>',
            pointFormatter: function() {
                if(this.index == 4 || this.index == 5) {
                    return '<span style="font-size:11px; color:#454545">'+this.name+': </span> <br> <b>'+thousandsSep(this.y)+'</b> seguidores <br/>';
                }
                return '<span style="font-size:11px; color:'+this.color+'">'+this.name+': </span> <br> <b>'+thousandsSep(this.y)+'</b> seguidores <br/>'; },
            borderRadius: 5,  
            hideDelay: 0,

        },
        series: [{
            colorByPoint: true,
            data: filterData(),
            //type: 'scatter'
        }],
});


function filterData() {
    
    //alert(jsonData);
    //return [5];
    candidates = [];
    currentCandidate = {};
    var idx = 0;
    //alert(jsonData);
    for (var candidate in jsonData) {
        candidates.push(
            {
                "name": jsonData[candidate].name,
                "y": jsonData[candidate].followers,
                "marker": {
                    "symbol": jsonData[candidate].picture
                },
                //"key": jsonData[candidate].followers,
                //"dataLabels" : {
                    //enabled: true,
                    //useHTML: true,
                    //formatter: function funcionsita() { alert(printObject(this))},
                    /*"formatter": function  () {
                        text = '<div><img src="'+jsonData[candidate].picture+'" height="50" width="50" class="img-candidato-grafica'+idx+'" alt=""/> </div>';
                        return text
                    },*/
                //},
            }
        )
        //alert(candidate)
        //currentCandidate.name = jsonData[candidate].name;
        //alert(currentCandidate.name);
        //alert(jsonData.candidate.name);
        //currentCandidate.y = jsonData[candidate].followers;
        /*currentCandidate.dataLabels = {
            enabled: true,
            useHTML: true,
            formatter: function() {
                return '<div><img src="/img/candidatos/'+jsonData.candidate.name+'.jpg height="50" width="50" class="img-candidato-grafica'+idx+'" alt=""/> </div>';
            },
        }*/
        idx++;
        //candidates.push(currentCandidate);
    }
    return candidates
}
/*
    return [
                                    {
                        name: 'Ricardo Anaya Cortés',
                        y: RicardoY,
                        dataLabels: {
                                enabled: true,
                                useHTML: true,
                                formatter: function() {
                                  return '<div><img src="/img/candidatos/ricardo-anaya.jpg" height="50" width="50" class="img-candidato-grafica 0" alt=""/> </div>'; 
                                },
                            }
                    },                                             
                                   {
                        name: 'José Antonio Meade Kuribreña',
                        y: JoseAntonioY,
                        dataLabels: {
                                enabled: true,
                                useHTML: true,
                                formatter: function() {
                                  return '<div><img src="/img/candidatos/jose-meade.jpg" height="50" width="50" class="img-candidato-grafica 1" alt=""/> </div>'; 
                                },
                            }
                    },                                             
                                   {
                        name: 'Andrés Manuel López Obrador',
                        y: ManuelLopezY,
                        dataLabels: {
                                enabled: true,
                                useHTML: true,
                                formatter: function() {
                                  return '<div><img src="/img/candidatos/andres-lopez.jpg" height="50" width="50" class="img-candidato-grafica 2" alt=""/> </div>'; 
                                },
                            }
                                   },                                              {
                                       name: 'Carlos Huguez Murrieta',
                                       y: huguez,
                                       dataLabels: {
                                           enabled: true,
                                           useHTML: true,
                                           formatter: function() {
                                               return '<div><img src="/img/candidatos/carlos-huguez.jpg" height="50" width="50" class="img-candidato-grafica 3" alt=""/> </div>'; 
                                           },
                                       }
                                   },
                                   {
                        name: 'Margarita Ester Zavala Gómez del Campo',
                        y: MargaritaY,
                        dataLabels: {
                                enabled: true,
                                useHTML: true,
                                formatter: function() {
                                  return '<div><img src="/img/candidatos/margarita-zavala.jpg" height="50" width="50" class="img-candidato-grafica 3" alt=""/> </div>'; 
                                },
                            }
                    },                                             
                                   {
                        name: 'Jaime Heliodoro Rodríguez Calderón',
                        y: elotromen,
                        dataLabels: {
                                enabled: true,
                                useHTML: true,
                                formatter: function() {
                                  return '<div><img src="/img/candidatos/jaime-rodriguez.jpg" height="50" width="50" class="img-candidato-grafica 4" alt=""/> </div>'; 
                                },
                            }
                    },                                       
            ]

        }]
    }
*/
