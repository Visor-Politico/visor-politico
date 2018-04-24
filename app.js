const express = require("express")
const app = express()


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
require('./routes/routes.js')(app);


app.listen(80, () => console.log('Example app listening on port 3000!'))
