class CustomersAddController
	@$inject = ['$injector', '$scope']

	constructor: ($injector, @$scope) ->
		@customersService = $injector.get('customersService')

	addCustomer: ->
		@customersService.addCustomer @$scope.ctrl.customer
		@$scope.$parent.$broadcast 'addCustomer'
		@$scope.ctrl.customer = {}
		@$scope.ctrl.addForm.$setUntouched()

class CustomersListController
	@$inject = ['$injector', '$scope', 'customersService']
	constructor: ($injector, @$scope, @customersService) ->
		@init()

	init: ->
		@getCustomers()
		@$scope.$on 'addCustomer', =>
			@getCustomers()

	getCustomers: ->
		@$scope.customers = @customersService.getCustomers()

class CustomerPageController
	@$inject = ['$injector', '$scope', 'customersService', '$stateParams']
	constructor: ($injector, @$scope, @customersService, @$stateParams) ->
		@init()

	init: ->
		@getCustomer @$stateParams.id

	getCustomer: (id) ->
		@$scope.customer = @customersService.getCustomers()[id]

class CustomersEditController
	@$inject = ['$injector', '$scope']
	constructor: ($injector, @$scope) ->
		# @customerModel = $injector.get('CustomerModel')
		@customersService = $injector.get('customersService')
		@init()
	init: ->
		#

	addCustomer: ->
		@customersService.addCustomer @$scope.ctrl.customer



angular.module('app.customers.controllers')
	.controller('customersAddController', CustomersAddController)
	.controller('customersListController', CustomersListController)
	.controller('customersEditController', CustomersEditController)
	.controller('customerPageController', CustomerPageController)
