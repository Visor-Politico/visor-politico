module.exports = function (app){
    app.get('/', function(req, res) {
        var fs = require('fs');
        var obj = JSON.parse(fs.readFileSync(__dirname + '/../public/json/twitter-candidatos-seguidores.json', 'utf8'));
		    res.render('index',{json:obj,title:"holis",user:"fran"})
	  });
}
