'use strict';

app.controller('TaskCtrl', function($scope, $location, toaster, Task, Auth) {

  $scope.createTask = function() {
    $scope.task.status = 'open';
    $scope.task.gravatar = Auth.user.profile.gravatar;
    $scope.task.name = Auth.user.profile.name;
    $scope.task.poster = Auth.user.uid;

    Task.createTask($scope.task).then(function(ref) {  //ref is data returned from firebase
      toaster.pop("success", 'Task created successfully.');
      $scope.task = {title: '', description: '', total: '', status: 'open', gravatar: '', name: '', poster: ''};
      $location.path('/browse/' + ref.key()); //key will return task id from task created
    });
  };

  $scope.editTask = function(task) {
    Task.editTask(task).then(function() {
      toaster.pop("success", "Task is updated");
    });
  };
 
});