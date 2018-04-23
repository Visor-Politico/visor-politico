module.exports = function (app){
    app.get('/', function(req, res) {
		    res.render('index');
	  });

    app.get('/sede/:sede', function(req, res) {
        var fs = require('fs');
        var obj = JSON.parse(fs.readFileSync(__dirname + '/../public/json/twitter-candidatos-seguidores.json', 'utf8'));

        var sede = {};

        for (var iter in obj) {
            if (obj[iter].sede.toLowerCase() == req.params.sede.toLowerCase()) {
                sede[iter] = obj[iter];
            }
        }
		    res.render('sede',{json:sede});
	  });
}
