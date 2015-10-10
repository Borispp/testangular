class CustomersService
	@$injector = ['$http', '$q', '$injector', 'localStorageService']

	constructor: (@$http, @$q, $injector, @localStorageService) ->
		@CustomerModel = $injector.get('CustomerModel')
		# @localStorageService.set 'customers'

	getDate: ->
		date = new Date()
		options =
		  weekday: 'long'
		  year: 'numeric'
		  month: 'short'
		  day: 'numeric'
		  hour: '2-digit'
		  minute: '2-digit'
		  second: '2-digit'

		return date.toLocaleDateString("en-US", options)

	generateUniqueId: ->
		s4 = ->
	    Math.floor((1 + Math.random()) * 0x10000).toString(16).substring 1
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()

	addCustomer: (customer) ->
		customers = @getCustomers()
		id = @generateUniqueId()

		customers[id] = customer
		customers[id].id = id
		customers[id].create = @getDate()

		@localStorageService.set 'customers', customers

	saveCustomer: (customer) ->
		customers = @getCustomers()
		id = customer.id

		customers[id] = customer
		customers[id].modify = @getDate()

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
