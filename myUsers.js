angular.module("myApp",[]).controller('myCtrl',function($scope){
  $scope.fName="";
  $scope.lName="";
  $scope.pwd1="";
  $scope.pwd2="";
  $scope.users=[
    {id:1,fName:'Sai',lName:'Ram'},
    {id:2,fName:'Raghu',lName:'Nandhan'},
    {id:3,fName:'Latha',lName:'cheguri'}];
    
    $scope.edit=true;
$scope.error=false;
$scope.incomplete=false;
$scope.hideform=true;
$scope.hidechang=true;

$scope.editUser=function(id){
  $scope.hideform=false;
  if(id=='new'){
    $scope.edit=true;
    $scope.incomplete=true;
    $scope.fName="";
    $scope.lName="";
  }
  else{
    $scope.edit=false;
    $scope.fName=$scope.users[id-1].fName;
    $scope.lName=$scope.users[id-1].lName;
  }
  };
  
  $scope.$watch('pwd1',function() {$scope.test(); });
  $scope.$watch('pwd2',function() {$scope.test(); });
  $scope.$watch('fName',function() {$scope.test(); });
  $scope.$watch('lName',function() {$scope.test(); });
  
  $scope.test=function(){
    if($scope.pwd1!==$scope.pwd2)
    {
      $scope.error=true;
    }
    else{
      $scope.error=false;
    }
    $scope.incomplete=false;
    if($scope.edit && ( !$scope.fName.length 
    || !$scope.lName.length || !$scope.pwd1.length || !$scope.pwd2.length))
    {
      $scope.incomplete=true;
    }
  };
  
  $scope.saveUser=function(){
    $scope.hidechang=false;
   
         var new_id;
         new_id = $scope.users.length+1;
         
         $scope.users.push({id:new_id,fName:$scope.fName,lName:$scope.lName});

  }
});

