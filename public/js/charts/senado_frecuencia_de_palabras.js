

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

function sum_arrays(arr1,arr2) {
	arr3 = [0,0,0,0,0];
	for (let i = 0; i < arr1.length; i++) {
		arr3[i] += arr2[i] + arr1[i];
	}
	return arr3;
}

function get_color_by_key(actor_politico) {
	if (actor_politico === 'Por M\u00e9xico al frente') {
		return 'red';
	} else if (actor_politico === 'Todos por M\u00e9xico') {
		return 'blue';
	}
	return 'brown';
}


function getData() {


	data = [];
	names = {};

	for (let candidato in jsonData) {
		if (names[jsonData[candidato]["data"]["actor_politico"]]) {
			arr1 = names[jsonData[candidato]["data"]["actor_politico"]];
			arr2 = jsonData[candidato]["palabras_clave"][0];

			sum = sum_arrays(arr1,arr2);

			names[jsonData[candidato]["data"]["actor_politico"]] = sum;

		} else {
			names[jsonData[candidato]["data"]["actor_politico"]] = jsonData[candidato]["palabras_clave"][0];
		}
	}

	for (let ap in names) {
		color = get_color_by_key(ap);
		data.push({
			"name": ap,
			"data": names[ap],
			"color": color
		})
	}

	return data;
}
