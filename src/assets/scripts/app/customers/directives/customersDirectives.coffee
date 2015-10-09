CustomersDirectives = ->
	{
		templateUrl: 'assets/scripts/app/customers/templates/customersTemplate.html',
		controller: MyCtrl,
		controllerAs: 'ctrl'
	}

class MyCtrl
	@$inject = ['$scope', '$injector']
	constructor: ($scope, $injector) ->
		@customersService = $injector.get 'customersService'
		@init()

	init: ->
		@getCustomers()

	getCustomers: ->
		@customersService.getCustomers()
			.then (customers) =>
					@customers = customers

angular.module('app.customers.directives')
	.controller 'MyCtrl', MyCtrl
	.directive 'myTest', CustomersDirectives
