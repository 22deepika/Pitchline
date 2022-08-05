$(document).ready(function () {
    var activeuser=localStorage.getItem("activeuser");
$("#txteml").val(activeuser).prop("readonly",true);
    // ---------------------------SIGNUP---------------------------
    if (localStorage.getItem("activeuser") == null)
    location.href="index1.html"

      ////logout..............................
      $("#logout").click(function () {
        localStorage.removeItem("activeuser");
      location.href = "index1.html";
      })
    $("#btnRecinvestment").click(function () {
      var email1 = $("#email1").val();
      var companyname = $("#companyname").val();
      var ramount = $("#ramount").val();
      var details1 = $("#details1").val();
      alert(email1);
      alert(companyname);
      alert(ramount);
      alert(details1);
      var urlwithdata = "/ajaxRecinvestment1?email1kuch=" + email1 + "&companynamekuch=" + companyname + "&ramountkuch=" + ramount + "&details1kuch=" + details1;
      $.get(urlwithdata, function (response) {
        alert("vapis");
        alert(response);
      })
    })
    $("#savepwd").click(function(req,res){
    var email=$("#txteml").val();
    var npwd=$("#npwd").val();
    var opwd=$("#opwd").val();
    if (email == "" || npwd == "" || opwd == "") { return; }
  else {
    var url="/makenewpwd?email="+email+"&npwd="+npwd+"&opwd="+opwd;  
    // sending values
    $.get(url,function(respond){
      alert(respond);
    })
  }
  })
  })



function dofill() {
//SUM
var va = document.getElementById("txteml").value;
/* this is also way to take value---i.e. keyword getElementById*/

var vb = document.getElementById("opwd").value;
/* keyword-- querrySelector  can also be used*/

var vc = document.getElementById("npwd").value;

// J khaali rehje taa run naa hovee
if (va == "" || vb == "" || vc == "") {
  alert("Fill Full Form PLEASE.......");
  return;
}
}
