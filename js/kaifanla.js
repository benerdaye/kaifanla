var app = angular.module('kaifanla', ['ng', 'ngRoute']);

app.config( function ($routeProvider) {
  $routeProvider
    .when('/start', {
      templateUrl: 'tpl/start.html',
      controller:'startCtrl'
  })
    .when('/detail', {
      templateUrl: 'tpl/detail.html',
      controller:'detailCtrl'
  })
    .when('/main', {
    templateUrl: 'tpl/main.html',
      controller:'mainCtrl'
  })
    .when('/order', {
    templateUrl: 'tpl/order.html',
      controller:'orderCtrl'
  })
    .when('/myOrder', {
    templateUrl: 'tpl/myOrder.html',
      controller:'myOrderCtrl'
  })
    .when('/order1', {
      templateUrl: 'tpl/order1.html',
      controller:'orderCtrl1'
    })
    .otherwise({redirectTo: '/start'})

})
app.controller('parentCtrl',['$scope','$location',function($scope,$location){
  $scope.jump=function(arg){
    $location.path(arg);
  }
}])

app.controller('startCtrl',['$scope',function($scope){
//$scope.jump=function(arg){
//  $location.path(arg);
//}
}])
app.controller('mainCtrl',['$scope',function($scope){
//$scope.jump=function(arg){
//  $location.path(arg);
//}
}])
app.controller('orderCtrl',['$scope',function($scope){
//$scope.jump=function(arg){
//  $location.path(arg);
//}
}])
app.controller('orderCtrl1',['$scope',function($scope){
//$scope.jump=function(arg){
//  $location.path(arg);
//}
}])
app.controller('myOrderCtrl',['$scope',function($scope){
//$scope.jump=function(arg){
//  $location.path(arg);
//}
}])
app.controller('detailCtrl',['$scope',function($scope){
//$scope.jump=function(arg){
//  $location.path(arg);
//}
}])



//
//app.controller('payCtrl',['$scope','$routeParams',function($scope,$routeParams){
//  $scope.getPrice = $routeParams.price;
//  console.log($scope.getPrice);
//}])


