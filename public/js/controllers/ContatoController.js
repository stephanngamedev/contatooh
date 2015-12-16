angular.module( 'contatooh' ).controller( 'ContatoController', function( $scope, $routeParams, $resource ) {
	var Contato = $resource('/contatos/:id');

	Contato.get({ id: $routeParams.contatoId },
		function( contato ) {
			$scope.contato = contato;
		},
		function( error ) {
			console.log( error );
			$scope.mensagem = { texto: 'Não foi possível listar o contato.'};
		}
	);
})