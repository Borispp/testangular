var CustomerPageController, CustomersAddController, CustomersEditController, CustomersListController;

CustomersAddController = (function() {
  CustomersAddController.$inject = ['$injector', '$scope'];

  function CustomersAddController($injector, $scope) {
    this.$scope = $scope;
    this.customersService = $injector.get('customersService');
  }

  CustomersAddController.prototype.addCustomer = function() {
    this.customersService.addCustomer(this.$scope.ctrl.customer);
    this.$scope.$parent.$broadcast('addCustomer');
    this.$scope.ctrl.customer = {};
    return this.$scope.ctrl.addForm.$setUntouched();
  };

  return CustomersAddController;

})();

CustomersListController = (function() {
  CustomersListController.$inject = ['$injector', '$scope', 'customersService'];

  function CustomersListController($injector, $scope, customersService) {
    this.$scope = $scope;
    this.customersService = customersService;
    this.init();
  }

  CustomersListController.prototype.init = function() {
    this.getCustomers();
    return this.$scope.$on('addCustomer', (function(_this) {
      return function() {
        return _this.getCustomers();
      };
    })(this));
  };

  CustomersListController.prototype.getCustomers = function() {
    return this.$scope.customers = this.customersService.getCustomers();
  };

  return CustomersListController;

})();

CustomerPageController = (function() {
  CustomerPageController.$inject = ['$injector', '$scope', 'customersService', '$stateParams'];

  function CustomerPageController($injector, $scope, customersService, $stateParams) {
    this.$scope = $scope;
    this.customersService = customersService;
    this.$stateParams = $stateParams;
    this.init();
  }

  CustomerPageController.prototype.init = function() {
    return this.getCustomer(this.$stateParams.id);
  };

  CustomerPageController.prototype.getCustomer = function(id) {
    return this.$scope.customer = this.customersService.getCustomers()[id];
  };

  return CustomerPageController;

})();

CustomersEditController = (function() {
  CustomersEditController.$inject = ['$injector', '$scope'];

  function CustomersEditController($injector, $scope) {
    this.$scope = $scope;
    this.customersService = $injector.get('customersService');
    this.init();
  }

  CustomersEditController.prototype.init = function() {};

  CustomersEditController.prototype.addCustomer = function() {
    return this.customersService.addCustomer(this.$scope.ctrl.customer);
  };

  return CustomersEditController;

})();

angular.module('app.customers.controllers').controller('customersAddController', CustomersAddController).controller('customersListController', CustomersListController).controller('customersEditController', CustomersEditController).controller('customerPageController', CustomerPageController);
