module.exports = function() {
	var controller = {}

	var ID_CONTATO_INC = 3;
	var contatos = [
		{_id: 1, nome: 'Contato Exemplo A', email: 'cont1@empresa.com.br'},
		{_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
		{_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
	];

	controller.listaContatos = function( req, res ) {
		res.json( contatos );
	};

	controller.mostraContato = function( req, res) {
		var idContato = req.params.id;
		var contato = contatos.filter( function(contato) {
			return contato._id == idContato;
		})[0];

		if( contato ){
			res.json( contato );
		}else{
			res.status( 404 ).send( 'Contato não encontrado' );
		}
	};

	controller.salvaContato = function( req, res ) {
		var contato = req.body;
		if( contato._id ){
			contato = atualiza( contato );
		} else {
			contato = adiciona( contato );
		};

		res.json( contato );
	}

	function adiciona( novoContato ) {
		novoContato._id = ++ID_CONTATO_INC;
		contatos.push( novoContato );

		return novoContato;
	}

	function atualiza( contatoAlterar ) {
		contatos = contatos.map( function( contato ) {
			if( contato._id == contatoAlterar._id ){
				contato = contatoAlterar;
			}
			return contato;
		})

		return contatoAlterar;
	}

	controller.removeContato = function( req, res ) {
		var idContato = req.params.id;
		
		contatos = contatos.filter( function( contato ) {
			return contato._id != idContato;
		});

		res.status( 204 ).end();
	};

	return controller
}