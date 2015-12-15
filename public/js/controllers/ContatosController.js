angular.module( 'contatooh' ).controller( 'ContatosController', 
	function( $resource, $scope ) {
		$scope.contatos = [];
	
		$scope.filtro = ''

		$http.get('/contatos')
			.success( function( data ) {
				$scope.contatos = data;
			})
			.error( function( statusText ) {
				console.log( 'Não foi possível obter a lista de contatos' );
				console.log( statusText );
			});
	}
);