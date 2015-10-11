var CustomersService;

CustomersService = (function() {
  CustomersService.$injector = ['$http', '$q', '$injector', 'localStorageService'];

  function CustomersService($http, $q, $injector, localStorageService) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
    this.CustomerModel = $injector.get('CustomerModel');
  }

  CustomersService.prototype.getDate = function() {
    var date, options;
    date = new Date();
    options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return date.toLocaleDateString("en-US", options);
  };

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
    customers[id].create = this.getDate();
    return this.localStorageService.set('customers', customers);
  };

  CustomersService.prototype.saveCustomer = function(customer) {
    var customers, id;
    customers = this.getCustomers();
    id = customer.id;
    customers[id] = customer;
    customers[id].modify = this.getDate();
    return this.localStorageService.set('customers', customers);
  };

  CustomersService.prototype.getCustomers = function() {
    var customers, ref;
    return customers = (ref = this.localStorageService.get('customers')) != null ? ref : {};
  };

  CustomersService.prototype.getCustomer = function(id) {
    var customer, ref;
    customer = (ref = this.localStorageService.get('customers')[id]) != null ? ref : {};
    return customer;
  };

  CustomersService.prototype.remove = function(id) {
    var customers;
    customers = this.getCustomers();
    delete customers[id];
    return this.localStorageService.set('customers', customers);
  };

  CustomersService.prototype.sendCustomers = function(customers) {
    return console.log(customers);
  };

  return CustomersService;

})();

angular.module('app.customers.services').service('customersService', CustomersService);
