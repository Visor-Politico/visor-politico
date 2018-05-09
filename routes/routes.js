module.exports = function (app){
    app.get('/', function(req, res) {
		    res.render('index');
	  });

    app.get('/sede/:sede', function(req, res) {
        var fs = require('fs');
        var obj = JSON.parse(fs.readFileSync(__dirname + '/../public/json/Data.json', 'utf8'));
        var obj2 = JSON.parse(fs.readFileSync(__dirname + '/../public/json/Data2.json', 'utf8'));

        var sede = {};
        var sede2 = {};
        for (var iter in obj) {
            if (obj[iter]["data"].sede.toLowerCase() == req.params.sede.toLowerCase()) {
                sede[iter] = obj[iter];
                sede2[iter] =obj2[iter];
            }
        }
		    res.render('sede',{data:sede,data2:sede2,dataWords:["esperanza","educacion","salud","trabajo","seguridad"],sede:capitalizeFirstLetter(req.params.sede)});
	  });
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
