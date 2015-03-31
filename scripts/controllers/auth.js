'use strict';

app.controller('AuthCtrl', function($scope, $location, Auth, toaster) {

  $scope.register = function(user) {
    Auth.register(user).then(function() {
      console.log("Registered successfully!");
      $location.path('/');
    }, function(err) {
      toaster.pop('error', "Oops, something went wrong!");
      // console.log("Error...");
    });
  };

  $scope.login = function(user) {
    Auth.login(user)
      .then(function() {
        toaster.pop('success', "Logged in successfully.");
        // console.log("Logged in successfully!");
        $location.path('/');
      }, function(err) {
        toaster.pop('error', "Oops, something went wrong!");
        // console.log("Error...");
      });
  };

  $scope.changePassword = function(user) {
    Auth.changePassword(user)
      .then(function() {

        //reset form
        $scope.user.email = '';
        $scope.user.oldPass = '';
        $scope.user.newPass = '';

        toaster.pop('success', "Password changed successfully.");
        // console.log("Password changed successfully!");
      }, function(err) {
        toaster.pop('error', "Oops, something went wrong!");
        // console.log("Error...");
      });
  };

});