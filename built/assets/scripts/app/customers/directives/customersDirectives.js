var CustomersDirectives, MyCtrl;

CustomersDirectives = function() {
  return {
    templateUrl: 'assets/scripts/app/customers/templates/customersTemplate.html',
    controller: MyCtrl,
    controllerAs: 'ctrl'
  };
};

MyCtrl = (function() {
  MyCtrl.$inject = ['$scope', '$injector'];

  function MyCtrl($scope, $injector) {
    this.customersService = $injector.get('customersService');
    this.init();
  }

  MyCtrl.prototype.init = function() {
    return this.getCustomers();
  };

  MyCtrl.prototype.getCustomers = function() {
    return this.customersService.getCustomers().then((function(_this) {
      return function(customers) {
        return _this.customers = customers;
      };
    })(this));
  };

  return MyCtrl;

})();

angular.module('app.customers.directives').controller('MyCtrl', MyCtrl).directive('myTest', CustomersDirectives);
