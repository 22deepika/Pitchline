var mymodule = angular.module("moduleKuch",[]);
var myController=mymodule.controller("kuchController",function($scope,$http){

$scope.loadCategories=function(){
 //alert();             
$http.get("/getcategories").then(fxkuchgoodcat,fxkuchbadcat);
  function fxkuchgoodcat(jsonResp){
     //alert(JSON.stringify(jsonResp));
      $scope.categories = jsonResp.data;
     // alert(JSON.stringify($scope.categories));
           }
     function fxkuchbadcat(jsonResp){
      // alert(jsonResp.data);
     }
   
     $http.get("/getevaluation").then(fxkuchgood,fxkuchbad);
  function fxkuchgood(jsonResp){
     // alert(JSON.stringify(jsonResp));
      $scope.jsonArry = jsonResp.data;
//                 alert(JSON.stringify($scope.jsonArry));
}
     function fxkuchbad(jsonResp){
      // alert(jsonResp.data);
     }
   }


  $scope.dosearch=function(evaluation,cate){

 //  alert(evaluation);
   
 //alert(JSON.stringify(cate));
          $http.get("/dofetch?evaluation="+ evaluation + "&categories=" +cate).then(fxgood,fxbad);
          //alert();
          function fxgood(jsonResp){
   //   alert(JSON.stringify(jsonResp));
     // alert("Good");
      $scope.jsonArrya = jsonResp.data;
}
     function fxbad(jsonResp){
       //alert(jsonResp.data);
       //alert("bad")
     }
  }  
  $scope.dodatashow = function (email) {
 //  alert(email);
$http.get("/dodatashow1?email=" + email).then(fxgoodmail, fxbadmail);
function fxgoodmail(jsonemail) {
// alert(JSON.stringify(jsonemail.data))

$scope.emaildata = jsonemail.data;


}
function fxbadmail(jsonemail) {
alert(jsonemail.data);
}
}          
})