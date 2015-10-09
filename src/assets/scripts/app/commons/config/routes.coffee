class Routes
	@$inject = ['$stateProvider', '$urlRouterProvider']

	constructor: ($stateProvider, $urlRouterProvider) ->
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise('/badlink')

		$stateProvider
			.state 'customersList',
				url: '/',
				views:
					"customersList":
						templateUrl: 'assets/scripts/app/customers/templates/list.html',
						controller: 'customersListController'
					"customerAdd":
						templateUrl: 'assets/scripts/app/customers/templates/add.html',
						controller: 'customersAddController',
						controllerAs: 'ctrl'
				templateUrl: 'assets/scripts/app/customers/templates/list.html',
				controller: 'customersListController'
			.state 'customer',
				url: '/customer/:id',
				views:
					"customerPage":
						templateUrl: 'assets/scripts/app/customers/templates/customer_page.html',
						controller: 'customerPageController'
			.state 'customers.edit',
				url: '/edit',
				templateUrl: 'assets/scripts/app/customers/templates/edit.html'
				controller: 'customersEditController'

angular.module 'app.commons.config'
	.config Routes
