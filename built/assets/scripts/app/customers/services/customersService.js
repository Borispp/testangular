var CustomersService;

CustomersService = (function() {
  CustomersService.$injector = ['$http', '$q', '$injector', 'localStorageService'];

  function CustomersService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
    this.CustomerModel = $injector.get('CustomerModel');
  }

  CustomersService.prototype.generateUniqueId = function() {
    var s4;
    s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };

  CustomersService.prototype.addCustomer = function(customer) {
    var customers, id;
    customers = this.getCustomers();
    id = this.generateUniqueId();
    customers[id] = customer;
    customers[id].id = id;
    return this.localStorageService.set('customers', customers);
  };

  CustomersService.prototype.getCustomers = function() {
    var customers, ref;
    customers = (ref = this.localStorageService.get('customers')) != null ? ref : {};
    console.log(customers);
    return customers;
  };

  CustomersService.prototype.sendCustomers = function(customers) {
    return console.log(customers);
  };

  return CustomersService;

})();

angular.module('app.customers.services').service('customersService', CustomersService);
