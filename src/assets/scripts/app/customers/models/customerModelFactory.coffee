class CustomerModel
	constructor: (customer) ->
		{ @id,
			@customerName,
			@customerEmail,
			@customerPhone,
			@customerAddress,
			@customerZip
		} = customer

angular.module('app.customers.models')
	.factory('CustomerModel', () -> CustomerModel)
