angular.module( 'contatooh' ).controller( 'ContatoController', function( $scope, $routeParams, $resource ) {
	var Contato = $resource('/contatos/:id');

	if( $routeParams.contatoId ){
		Contato.get({ id: $routeParams.contatoId },
			function( contato ) {
				$scope.contato = contato;
				$scope.mensagem = {};
			},
			function( error ) {
				console.log( error );
				$scope.mensagem = { texto: 'Não foi possível listar o contato.'};
			}
		);
	} else {
		$scope.contato = new Contato();
		$scope.mensagem = {}
	}

	$scope.salva = function() {
		$scope.contato.$save( 
			function( data ) {
				$scope.mensagem = { texto: 'Contato salvo com sucesso' };
				$scope.contato = new Contato();
			},
			function( error ) {
				console.log( error );
				$scope.mensagem = { texto: 'Erro ao salvar o contato'};
			}
		);
	}
})