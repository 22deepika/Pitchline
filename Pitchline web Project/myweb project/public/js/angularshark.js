var mymodule=angular.module("moduleKuch",[]);
var myController=mymodule.controller("kuchController",function($scope,$http){
          
  
    //------------
    $scope.doFetchAll=function()
    {
            $http.get("/showAll2").then(fxKuchGood,fxKuchBad);
            function fxKuchGood(jsonResp)
            {
                alert(JSON.stringify(jsonResp.data));
                $scope.jsonAry=jsonResp.data;
            }
            function fxKuchBad(jsonResp)
            {
                alert(jsonResp.data);
            }

    }
    $scope.doDelete=function(emailid1,index)
    {
            $http.get("/doDelete?emailid="+emailid1).then(fxKuchGood,fxKuchBad);
            function fxKuchGood(jsonResp)
            {
                alert(jsonResp.data);
                $scope.doFetchAll();
            }000
            function fxKuchBad(jsonResp)
            {
                alert(jsonResp.data);
            }

    }
    $scope.doBlock=function(emailid1,index)
    {
            $http.get("/doBlock?emailid="+emailid1).then(fxKuchGood,fxKuchBad);
            function fxKuchGood(jsonResp)
            {
                alert(jsonResp.data);
                $scope.doFetchAll();
            }000
            function fxKuchBad(jsonResp)
            {
                alert(jsonResp.data);
            }

    }
    $scope.doResume=function(emailid1,index)
    {
            $http.get("/doResume?emailid="+emailid1).then(fxKuchGood,fxKuchBad);
            function fxKuchGood(jsonResp)
            {
                alert(jsonResp.data);
                $scope.doFetchAll();
            }000
            function fxKuchBad(jsonResp)
            {
                alert(jsonResp.data);
            }

    }


})