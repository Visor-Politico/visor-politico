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

function get_color_by_key(actor_politico) {
	if (actor_politico === 'Por M\u00e9xico al frente') {
		return 'red';
	} else if (actor_politico === 'Todos por M\u00e9xico') {
		return 'blue';
	}
	return 'brown';
}

function filterData() {

	candidates = [];
	idx = 0;
	for (let candidate in jsonData) {
		_formatter.push(jsonData[candidate]["data"].picture);
		color = get_color_by_key(jsonData[candidate]["data"]["actor_politico"]);
		candidates.push({
			"name": candidate,
			"y": jsonData[candidate]["data"].followers,
			"colorIndex": idx,
			"color": color,
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


	order = ['Antonio Astiazaran','Leticia Cuesta','Manuel Acosta','Sylvana Beltrones','Alfonso Durazo','Lilly Tellez'];


	candidates.sort(function(a, b){
		return order.indexOf(a.name) - order.indexOf(b.name);
	});



	return [{
		name: 'Hombres',
		data: [candidates[0], candidates[2], candidates[4]]
	}, {
		name: 'Mujeres',
		data: [candidates[1], candidates[3], candidates[5]]
	}]

}
