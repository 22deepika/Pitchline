$(document).ready(function () {
    // ---------------------------SIGNUP---------------------------
   
    $("#btnSignup").click(function () {
        var email = $("#txtUid").val();
        var password = $("#txtPwd").val();
        var usertype = $("#utype").val();
        //alert(email);
        //alert(password);
        //alert(usertype);
        var urlwithdata = "/ajaxSignup?emailkuch=" + email + "&pwdkuch=" + password + "&userkuch=" + usertype;
        $.get(urlwithdata, function (response) {
            //alert("vapis");
            alert(response);
            //if(response=="shark")
            //location.href="home-shark.html"
            //else
           // location.href="home-founder.html"

        })
    })

    // ------------------------CHECK AVAILABLE---------------------------
   

    $("#txtUid").blur(function () {
          var email = $(this).val();
          var urlWithData = "/ajaxCheckUser?emailKuch=" + email;
          $.get(urlWithData, function (response) {
              $("#respServer").html(response);
          })
          $("#txtUid").keyup(function () {
              var r = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
              var Uid = $("#txtUid").val();
              if ($("#txtUid").val() == "") {
                  $("#txtUid").addClass("not-ok").removeClass("ok");
                  $("#errUid").html(" Plz fill details.");
              }
              else if (r.test(Uid) == false) {
                  $("#txtUid").addClass("not-ok").removeClass("ok");
                  $("#errUid").html("must have @ and full stop");
                  $("#btnSignup").fadeOut();
              }
              else {
                  $("#txtUid").addClass("ok").removeClass("not-ok");
                  $("#errUid").html("Good");
                  $("#btnSignup").fadeIn();
              }


          });
        });


        // pwd regular expression
        $("#txtPwd").blur(function () {
            //var exp= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            var exp =/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
            var Pwd = $(this).val();
            if (exp.test(Pwd) == true) {
                $("#txtPwd").removeClass("not-ok").addClass("ok");
                $("#errPwd").html("Good");
            }
            else {
                $("#txtPwd").removeClass("ok").addClass("not-ok");
                $("#errPwd").html("please fill password");
            }

        });
    
    $(".fa").mouseenter(function(){ 
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
        /* remove krde slash jdo uss teh mouse javee*/
        $("#txtPwd").attr("type", "text"); 
      });
      
      $(".fa").mouseleave(function () {
      
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
        $("#txtPwd").attr("type", "password");
        
      });
      
     


});

// login page validation start
$(document).ready(function () {
    $("#txtlid").blur(function () {
        var r = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        var lid = $("#txtlid").val();
        if ($("#txtlid").val() == "") {
            $("#txtlid").addClass("not-ok").removeClass("ok");
            $("#errlid").html("Plz Fill Password");
        }
        else if (r.test(lid) == false) {
            $("#txtlid").addClass("not-ok").removeClass("ok");
            $("#errlid").html("must have @ and full stop");
        }
        else {
            $("#txtlid").addClass("ok").removeClass("not-ok");
            $("#errlid").html("Good");
        }
       

    });
    // pwd regular expression
    $("#txtlPwd").blur(function () {
        //var exp= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var exp = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        var Pwd = $(this).val();
        if (exp.test(Pwd) == true) {
            $("#txtlPwd").removeClass("not-ok").addClass("ok");
            $("#errlPwd").html("Good");
        }
        else {
            $("#txtlPwd").removeClass("ok").addClass("not-ok");
            $("#errlPwd").html("please fill password");
        }

    });

    $("#btnLogin").click(function(){
  var lpwd=$("#txtlPwd").val();
  var lemail=$("#txtlid").val();
  //alert(lemail);
 // alert(lpwd);
  var urlwithdata = "/ajaxLogin?txtlid=" + lemail +"&txtlPwd="+lpwd;
  $.get(urlwithdata, function (response) {
   
   // alert(JSON.stringify(response));
   alert(response);
 
      //  alert(localStorage.getItem("activeuser"));
   if(response=="shark")
   {
    localStorage.setItem("activeuser", $("#txtlid").val());
    location.href="home-shark.html";
   }
   
   else
   if(response=="founder")
   {
    localStorage.setItem("activeuser", $("#txtlid").val());
    location.href="home-founder.html";

   }
   else
   alert("No page");
  
   
  })

})



$(".fa").mouseenter(function(){ 
    $(this).removeClass("fa-eye-slash").addClass("fa-eye");
    /* remove krde slash jdo uss teh mouse javee*/
    $("#txtlPwd").attr("type", "text");
  });
  
  $(".fa").mouseleave(function () {
  
    $(this).removeClass("fa-eye").addClass("fa-eye-slash");
    $("#txtlPwd").attr("type", "password");
    
  });


});


setInterval(showTime, 1000);
// in built function //1000 dee smj nhi awri....wht is its work?
 function showTime() {
     var time = new Date(); //in built funvtion
     var hour = time.getHours(); // in built function
     var min = time.getMinutes();// in built function
     var sec = time.getSeconds();// in built function
     var session = "AM";
    
     var day=time.getDate();
     var month=time.getMonth()+1;
     var year=time.getFullYear();
     var dayu=time.getDay();



     //--------------------
     if(dayu==0)
     dayu="SUNDAY";
     if(dayu==1)
     dayu="MONDAY";
     if(dayu==2)
     dayu="TUESDAY";
     if(dayu==3)
     dayu="WEDNESDAY";
     if(dayu==4)
     dayu="THURSDAY";
     if(dayu==5)
     dayu="FRIDAY";
     if(dayu==6)
     dayu="SATURDAY";
     

     if (hour > 12)  // if we want jdo hee time 12 toh cross kre 13 naa awe 1pm ajee
     {
         hour -= 12; // hour=12-hour;
         session = "PM";
     }
     /// if we want 00:00 naa avee odi jgh 12:00 AM awe
     if (hour == 0)
      {
         hr = 12;
         session = "AM";
     }
     if( hour==12)
     {
      session="PM"
     }
//---------------- if we want hours, minutes and seconds .........10 toh ght honn and we want 2 digits//
     if(hour<10)
      hour="0" + hour;
      else
      hour=hour;

      if(min<10)
      min="0" + min;
      else
      min=min;

      if(sec<10)
      sec="0" + sec;
      else
      sec= sec;
      //-----------------------------------
      if(day<10)
      day="0" + day;
      else
      day=day;

      if(month<10)
      month="0" + month;
      else
      month=month;

      if(year<10)
      year="0" + year;
      else if(year <100)
      year="00" + year;
      else if(year <1000)
      year="000" + year;
      else
      year=year;


    // hour = hour < 10 ? "0" + hour : hour;//? than : otherwise
    // min = min < 10 ? "0" + min : min;
     //sec = sec < 10 ? "0" + sec : sec;

     var currentTime = hour + ":" + min + ":" + sec +" "+ session;
     var currentdate = day + "/" + month + "/" + year;
     var dayuu= dayu;

     document.getElementById("clock").innerHTML = currentTime;
     document.getElementById("date").innerHTML = currentdate;
     document.getElementById("day").innerHTML = dayu;
     // if we want to change the given tym it can only be changed... by innerHTML
 }
 showTime();

/*  $("#btnLogin").click(function () {
// alert("chal ja bhai");
  var lemail = $("#txtlid").val();
  var lpwd = $("#txtlPwd").val();
  //var urlWithData = "/ajaxLogin?txtlid=" + lemail +"&txtlPwd="+lpwd;
  var urlWithData = "/ajaxLogin?txtlid=" + $("#txtlid").val()+"&=txtlPwd" + $("#txtlPwd").val();
  $.get(urlWithData, function (response) {
    alert(JSON.stringify(response));
      if(response.length==0)
      alert("Invalid uid/password");
      else if(response[0].type=="1")            //1=shark
      {
        window.localStorage.setItem("x",$("#txtlid").val());
            window.location.href = "profile_shark.html";
      }
      else if(response[0].type=="2")     //2=Founder
      {
        window.localStorage.setItem("x",$("#txtlid").val());
        window.location.href = "profile_founder.html";
      }     
  });
});
});*/

