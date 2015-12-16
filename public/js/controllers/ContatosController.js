angular.module( 'contatooh' ).controller( 'ContatosController', 
	function( $resource, $scope ) {
		$scope.contatos = [];
	
		$scope.filtro = '';

		var Contato = $resource('/contatos/:id');

		function buscaContatos() {
			Contato.query(
				function( contatos ) {
					$scope.contatos = contatos;
				},
				function( error ) {
					console.log( error );
				}
			);	
		};

		buscaContatos();
	}
);