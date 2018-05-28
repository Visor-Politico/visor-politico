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

Highcharts.chart('tweets_bar_chart', {
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
		headerFormat: '<span style="font-size:11px; color:{point.color}"><b>{point.name}</b></span><br>',
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
				+thousandsSep(this.y)+'</b> tweets '
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
	for (let candidate in jsonData) {
		_formatter.push(jsonData[candidate]["data"].picture);
		candidates.push({
			"name": candidate,
			"y": jsonData[candidate]["data"].tweets,
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

	order = ['Antonio Astiazarán','Leticia Cuesta','Manuel Acosta','Sylvana Beltrones','Alfonso Durazo','Lilly Téllez'];


	candidates.sort(function(a, b){
		return order.indexOf(a.name) - order.indexOf(b.name);
	});

	return [{
		name: 'hombre',
		data: [candidates[0], candidates[2], candidates[4]]
	}, {
		name: 'mujer',
		data: [candidates[1], candidates[3], candidates[5]]
	}]
}
