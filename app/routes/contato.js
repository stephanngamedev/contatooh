module.exports = function( app ) {
	var controller = app.controllers.contato;
	app.get( '/contatos', controller.listaContatos );
	app.get( '/contatos/:id', controller.mostraContato );
	app.delete( '/contatos/:id', controller.removeContato );
}