
Highcharts.chart('followers_line_chart', {
	chart: {
		type: 'spline'
	},
	title: {
		text: ' '
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
			},
			//pointInterval: 3600000, // one hour
			//pointStart: Date.UTC(2018, 4, 20, 0, 0, 0)
		}
	},
	yAxis: {
		title: {
			text: 'Seguidores'
		},

	},
	tooltip: {
		crosshairs: false,
		//shared: true
	},

	series: validateData()
});


function sum_arrays_on_time(arr1,arr2) {
	arr3 = [];
	for (let i = 0; i < arr1.length; i++) {
		console.log(arr1,arr2)
		arr3.push([ arr1[i][0], arr1[i][1] + arr2[i][1] ]);
	}

	//console.log(arr3);
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

function validateData() {

	data = [];
	names = {};

	for (let candidato in jsonData) {
		if (names[jsonData[candidato]["data"]["actor_politico"]]) {
			arr1 = names[jsonData[candidato]["data"]["actor_politico"]];
			arr2 = jsonData[candidato]["seguidores"];

			sum = sum_arrays_on_time(arr1,arr2);

			names[jsonData[candidato]["data"]["actor_politico"]] = sum;

		} else {
			names[jsonData[candidato]["data"]["actor_politico"]] = jsonData[candidato]["seguidores"];
			console.log("Candidato: ", candidato, "  ", names)
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


