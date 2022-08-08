var mymodule = angular.module("moduleKuch", []);
var myController = mymodule.controller("kuchController", function ($scope, $http) {



  


  $http.get("/showcitydata").then(fxgood, fxbad);
  function fxgood(jsonresp) {
    // alert("HEllo");
    // alert(JSON.stringify(jsonresp.data));
    $scope.cities = jsonresp.data;
  }
  function fxbad(jsonresp) {
    alert(jsonresp.data);
  }

  $http.get("/showcatdata").then(fxcat, fxbadcat);
  function fxcat(jsonResp) {
    $scope.Catagory = jsonResp.data;
  }
  function fxbadcat() {
    alert(jsonResp.data);
  }


  $scope.dosearchcat = function (city, Catagory) {


    $http.get("/dosearch?valcity=" + city + "&catg=" + Catagory).then(fxdatagood, fxdatabad);
    function fxdatagood(jsonAry) {
      // alert(JSON.stringify(jsonAry.data))
      $scope.modell = jsonAry.data;
    }
    function fxdatabad(jsonAry) {
      alert(jsonAry.data);
    }
  }
  $scope.dodatashow = function (email) {
  $http.get("/dodatashow?email=" + email).then(fxgoodmail, fxbadmail);
  function fxgoodmail(jsonemail) {
   // alert(JSON.stringify(jsonemail.data))

    $scope.emaildata = jsonemail.data;


  }
  function fxbadmail(jsonemail) {
    alert(jsonemail.data);
  }
}
});