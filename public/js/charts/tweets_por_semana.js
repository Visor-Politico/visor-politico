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

		data = [];
		names = {};

		for (let candidato in jsonData) {
			if (names[jsonData[candidato]["data"]["actor_politico"]]) {
				arr1 = names[jsonData[candidato]["data"]["actor_politico"]][1];
				arr2 = jsonData[candidato]["tweets_semana"][1];

				sum = arr1+arr2;

				names[jsonData[candidato]["data"]["actor_politico"]] = [jsonData[candidato]["tweets_semana"][0],sum];

			} else {
				names[jsonData[candidato]["data"]["actor_politico"]] = jsonData[candidato]["tweets_semana"];
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


