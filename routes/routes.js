module.exports = function (app){
    app.get('/', function(req, res) {
		    res.render('index');
	  });

    app.get('/sede/:sede', function(req, res) {
        var fs = require('fs');
        var obj = JSON.parse(fs.readFileSync(__dirname + '/../public/json/Data.json', 'utf8'));

        var sede = {};
        for (var iter in obj) {
            if (obj[iter]["data"].sede.toLowerCase() == req.params.sede.toLowerCase()) {
                sede[iter] = obj[iter];
            }
        }
		    res.render('sede',{data:sede,dataWords:["esperanza","educacion","salud","trabajo","seguridad"]});
	  });
}
