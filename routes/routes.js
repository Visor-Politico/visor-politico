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

        var keyWords = JSON.parse(fs.readFileSync(__dirname + '/../public/json/twitter-candidatos-palabras-clave.json', 'utf8'));
        var followers_per_week = JSON.parse(fs.readFileSync(__dirname + '/../public/json/twitter-candidatos-datos-semanales.json', 'utf8'));

        var cleared = {};
        var seguidores_semanales = {};

        cleared["palabras_clave"] = keyWords["palabras_claves"];
        cleared["candidatos_palabras"] = {};
        for (var candidato in sede) {
            if (keyWords["Candidatos"][candidato]) {
                cleared["candidatos_palabras"][candidato] = keyWords["Candidatos"][candidato];
            }
            if (followers_per_week[candidato]) {
                seguidores_semanales[candidato] = followers_per_week[candidato];
            }
        }

		    res.render('sede',{json:sede,keyWords:cleared,followers_per_week:seguidores_semanales});
	  });
}
