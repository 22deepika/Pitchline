$(document).ready(function(){
    var activeuser=localStorage.getItem("activeuser");
$("#txteml").val(activeuser).prop("readonly",true);
    if (localStorage.getItem("activeuser") == null)
    location.href="index1.html"
    $("#logout").click(function () {
        localStorage.removeItem("activeuser");
      location.href = "index1.html";
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