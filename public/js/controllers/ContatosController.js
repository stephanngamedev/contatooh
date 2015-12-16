angular.module( 'contatooh' ).controller( 'ContatosController', 
	function( $resource, $scope ) {
		$scope.contatos = [];
	
		$scope.filtro = '';

		$scope.mensagem = { texto: '' };

		var Contato = $resource('/contatos/:id');

		function buscaContatos() {
			Contato.query(
				function( contatos ) {
					$scope.contatos = contatos;
					$scope.mensagem = {}
				},
				function( error ) {
					$scope.mensagem = { texto: 'Não foi possível listar os contatos.'}
					console.log( error );
				}
			);	
		};

		$scope.remove = function( contato ) {
			Contato.delete({ id: contato._id },
				buscaContatos,
				function( error ) {
					$scope.mensagem = { texto: 'Não foi possível deletar o contato.'}
					console.log( error );
				});
		};

		buscaContatos();
	}
);