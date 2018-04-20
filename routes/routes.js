module.exports = function (app){
    app.get('/', function(req, res) {
        var fs = require('fs');
        var obj = JSON.parse(fs.readFileSync(__dirname + '/../public/json/twitter-candidatos-seguidores.json', 'utf8'));
        console.log("obj: ", obj)
		    res.render('index',{json:obj})
	  });
}
