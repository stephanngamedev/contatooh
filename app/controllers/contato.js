module.exports = function( app ) {
	var controller = {};

	var Contato = app.models.contato;

	controller.listaContatos = function( req, res ) {
		Contato.find( function( error, contatos ){
			if( error ){
				console.log(error);
				res.status(500).json( error );
				return error;
			}

			res.json( contatos );
		});	
	};

	controller.mostraContato = function( req, res) {
		var _id = req.params.id;
		Contato.findById( _id, function( error, contato ) {
			if( error ){
				console.log(error);
				res.status(404).json( error );
				return error;
			}

			if( !contato ) throw new Error("Contato não encontrado!");
			
			res.json( contato );
		})
	};

	controller.salvaContato = function( req, res ) {
		var _id = req.body._id;

		req.body.emergencia = req.body.emergencia || null;
		
		if( _id ){
			Contato.findByIdAndUpdate(_id, req.body, function( error, contato ) {
				if( error ){
					console.log(error);
					res.status(500).json( error );
					return error;
				};

				res.json( contato );
			});
		} else {
			Contato.create( req.body, function( error, contato ) {
				if( error ){
					console.log(error);
					res.status(500).json( error );
					return error;
				};

				res.status(201).json(contato);
			})
		}
	};

	controller.removeContato = function( req, res ) {
		var _id = req.params.id;
		Contato.remove({"_id" : _id}, function( error ) {
			if( error ){
				console.log(error);
				return error;
			}

			res.status(204).end();
		})
	};

	return controller;
}