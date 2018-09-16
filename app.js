var express = require('express');
var mongoose = require ('mongoose');
var nunjucks = require('nunjucks');

mongoose.connect('mongodb://localhost/pokedex');

require('./models/Pokemon');
require('./models/Type');

var app = express();

//permet d'importer boostrap via le layout
app.use('/css' , express.static( __dirname + '/node_modules/bootstrap/dist/css'));

app.use('/' , require('./routes/pokemons'));
app.use('/types' , require('./routes/types'));

//definition nouvelle route
/*app.get('/' , (req, res) => {
	//execute la fonction
	res.send('salut')
})*/

//on passe le chemin du dossier views 
nunjucks.configure('views' ,{
	autoescape:true,
	express:app
});

//cela va ecrire sur la console du cmd 
console.log('Pokédex sur le port 3000');
//lancement de l'application sur le port 3000
app.listen(3000)