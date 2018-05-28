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
		categories: ['Por M\u00e9xico al frente', 'Todos por M\u00e9xico', 'Juntos haremos historia'],
		/*labels: {
			enabled: true,
			formatter: function() { console.log(this);return this.value.capitalize() + '<br>' + jsonData[this.value]["data"]["twitter"]; }
		}*/
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
			return {
				x: 0+labelWidth  ,
				y: 0
			};
		},
		headerFormat: '<span  style="font-size:11px;z-index:999999999; color:{point.color}"><b>{point.name}</b></span><br>',
		pointFormatter: function() {
			var tw = "";
			if (!jsonData[this.name]["data"].twitter) {
				tw = "(Sin Twitter)";
			}
			return '<div style="z-index:9999;"><span style="font-size:11px;color:'+this.color+'">'
				+this.name.capitalize()
				+','
				+ jsonData[this.name]["data"].actor_politico
				+': <br><br>'
				+jsonData[this.name]["data"]["twitter"]+ '</span> <br> <b>'
				+thousandsSep(this.y)+'</b> seguidores '
				+tw
				+'<br/></div>';
			},
		borderRadius: 5,
		hideDelay: 0
	},
	series: filterData()

});

function filterData() {

	candidates = [];
	idx = 0;
	for (var candidate in jsonData) {
		_formatter.push(jsonData[candidate]["data"].picture);
		candidates.push({
			"name": candidate,
			"y": jsonData[candidate]["data"].followers,
			"colorIndex": idx,
			"dataLabels": {
				enabled: true,
				useHTML: true,
				formatter: function () {
					return '<img class="image" src="' + _formatter[this.colorIndex] + '" height="50px" width="50px"/>';
				}
			}
		});
		idx++;
	}


	return [{
		name: 'Subset A',
		data: [candidates[0], candidates[2], candidates[4]]
	}, {
		name: 'Subset B',
		data: [candidates[1], candidates[3], candidates[5]]
	}]

	/*candidates = [];
	for (var candidate in jsonData) {
		_formatter.push(jsonData[candidate]["data"].picture);

		actor_politico = jsonData[candidate]["data"]["actor_politico"];

		data = [0,jsonData[candidate]["data"].followers,0];

		if ( actor_politico === "Por M\u00e9xico al frente") {
			data = [jsonData[candidate]["data"].followers,0,0];
		} else if (actor_politico === "Juntos haremos historia") {
			data = [0,0,jsonData[candidate]["data"].followers];
		}

		candidates.push({
			"name": candidate,
			"data": data,
			"dataLabels" : {
				enabled: true,
				useHTML: true,
				formatter: function () {
					return '<div><img src="'+_formatter[this.colorIndex]+' " height="50" width="50" class="img-candidato-grafica '+this.colorIndex+'" alt=""/> </div>';
				}
			}
		});
	}
	return candidates;*/
}
