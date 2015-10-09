var CustomerModel;

CustomerModel = (function() {
  function CustomerModel(customer) {
    this.id = customer.id, this.customerName = customer.customerName, this.customerEmail = customer.customerEmail, this.customerPhone = customer.customerPhone, this.customerAddress = customer.customerAddress, this.customerZip = customer.customerZip;
  }

  return CustomerModel;

})();

angular.module('app.customers.models').factory('CustomerModel', function() {
  return CustomerModel;
});
