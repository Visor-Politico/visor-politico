module.exports = function (app){
    app.get('/', function(req, res) {
		    res.render('index');
	  });

    app.get('/sede/:sede', function(req, res) {
        let fs = require('fs');
        let obj = JSON.parse(fs.readFileSync(__dirname + '/../public/json/Data.json', 'utf8'));
        let obj2 = JSON.parse(fs.readFileSync(__dirname + '/../public/json/Data2.json', 'utf8'));

        let sede = {};
        let sede2 = {};
        for (let iter in obj) {
            if (obj[iter]["data"].sede.toLowerCase() === req.params.sede.toLowerCase()) {
                sede[iter] = obj[iter];
                sede2[iter] =obj2[iter];
            }
        }
		    res.render('sede',{data:sede,data2:sede2,dataWords:["esperanza","educacion","salud","trabajo","seguridad"],sede:capitalizeFirstLetter(req.params.sede)});
	  });

    app.get('/senado', function (req,res) {
    	let fs = require('fs');
    	let data = JSON.parse(fs.readFileSync(__dirname + '/../public/json/senado.json', 'utf8'));
    	res.render('senado', {data:data,dataWords:["esperanza","educacion","salud","trabajo","seguridad"]});
    });
};


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
