
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

		min: Date.UTC(2018,3,28)
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

function validateData() {

	data = [];
	names = {};

	for (let candidato in jsonData) {
		if (names[jsonData[candidato]["data"]["actor_politico"]]) {
			arr1 = names[jsonData[candidato]["data"]["actor_politico"]][1];
			arr2 = jsonData[candidato]["seguidores"][1];

			sum = arr1+arr2;

			names[jsonData[candidato]["data"]["actor_politico"]] = [jsonData[candidato]["seguidores"][0],sum];

		} else {
			names[jsonData[candidato]["data"]["actor_politico"]] = jsonData[candidato]["seguidores"];
		}
	}

	for (let ap in names) {
		data.push({
			"name": ap,
			"data": names[ap]
		})
	}

	return data;
}
