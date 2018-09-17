var router = require('express').Router();
var Pokemon = require('./../models/Pokemon');

router.get('/' , (req,res) => {
	Pokemon.find({}).populate('types').then(pokemons => {
		res.render('pokemons/index.html' , {pokemons : pokemons});
	});
})

router.get('/:id' , (req,res) => {
	//recupere l'id de la barre d'adresse
	Pokemon.findById(req.params.id).populate('types').then(pokemon => {
		res.render('pokemons/show.html' , {pokemons:pokemon})
	},
	err => res.status(500).send(err));
})

module.exports = router;