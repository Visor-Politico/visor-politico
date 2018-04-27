const express = require("express")
const app = express()


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
require('./routes/routes.js')(app);

const port = 8080;
app.listen(port, () => console.log('Example app listening on port '+port+'!'));
