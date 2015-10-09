class CustomersService
	@$injector = ['$http', '$q', '$injector', 'localStorageService']

	constructor: (@$http, @$q, $injector, @localStorageService) ->
		@CustomerModel = $injector.get('CustomerModel')
		

	generateUniqueId: ->
		s4 = ->
	    Math.floor((1 + Math.random()) * 0x10000).toString(16).substring 1
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()

	addCustomer: (customer) ->
		customers = @getCustomers()
		id = @generateUniqueId()

		customers[id] = customer
		customers[id].id = id

		@localStorageService.set 'customers', customers

	getCustomers: ->
		customers = @localStorageService.get('customers') ? {}
		console.log customers
		return customers

	# getCustomer: (id) ->
	# 	@localStorageService.get 'customers'

	sendCustomers: (customers) ->
		console.log customers


angular.module 'app.customers.services'
	.service 'customersService', CustomersService
