$(document).ready(function () 
{
    
        $("#validationServer01").keyup(function () {
            var r = /^[a-zA-Z ]*$/;
            var Uid = $("#validationServer01").val();
            if ($("#validationServer01").val() == "") {
                $("#validationServer01").addClass("not-ok").removeClass("ok");
                $("#name").html("Plz write Proper");
            }
            else if (r.test(Uid) == false) {
                $("#validationServer01").addClass("not-ok").removeClass("ok");
                $("#name").html("Write Alphabets only. ");
            }
            else {
                $("#validationServer01").addClass("ok").removeClass("not-ok");
                $("#name").html("Good");
            }
        });


       
            $("#validationServerUsername").keyup(function () {
                var r = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
                var Uid = $("#validationServerUsername").val();
                if ($("#validationServerUsername").val() == "") {
                    $("#validationServerUsername").addClass("not-ok").removeClass("ok");
                    $("#emailid").html("Write proper email");
                }
                else if (r.test(Uid) == false) {
                    $("#validationServerUsername").addClass("not-ok").removeClass("ok");
                    $("#emailid").html("must have @ and full stop");
                }
                else {
                    $("#validationServerUsername").addClass("ok").removeClass("not-ok");
                    $("#emailid").html("Good");
                }


            })




            $("#validationServercontact").blur(function () {
                var r = /^[7-9]{1}[0-9]{9}$/;
                var Uid = $("#validationServercontact").val();
                if ($("#validationServercontact").val() == "") {
                    $("#validationServercontact").addClass("not-ok").removeClass("ok");
                    $("#contact").html("Plz write Proper");
                }
                else if (r.test(Uid) == false) {
                    $("#validationServercontact").addClass("not-ok").removeClass("ok");
                    $("#contact").html("Good");
                }
                else {
                    $("#validationServercontact").addClass("ok").removeClass("not-ok");
                    $("#contact").html("false");
                }
            });

            
         });

         $(document).ready(function(){
            $("#fetch").click(function(){
                //alert();
                var userid=$("#validationServerUsername").val();
                var urlWithData="/JSONserachRecord?emailid="+userid;
                $.getJSON(urlWithData,function(resposeJSONAry) //max:1   min:0
                {
                           if(resposeJSONAry.length==0){ 
                        alert("Invalid id"); //0 record
                           $("#btnsave").fadeIn();
                           $("btnupdate").fadeOut();
                        }
                        else
                        {
                            alert(JSON.stringify(resposeJSONAry));//1 record
                            $("#btnsave").fadeOut();
                             $("#validationServer01").val(resposeJSONAry[0].Name);//table me se col wale 
                             $("#validationServercontact").val(resposeJSONAry[0].contact);
                             $("#address").val(resposeJSONAry[0].address);//table me se col wale 
                             $("#occupation").val(resposeJSONAry[0].occupation);
                             $("#city").val(resposeJSONAry[0].city);     
                             $("#imgprev1").attr("src","/uploads/"+resposeJSONAry[0].acardpic);
                             $("#imgprev").attr("src","/uploads/"+resposeJSONAry[0].ppic);
                             $("#oldPic").val(resposeJSONAry[0].acardpic);
                             $("#oldPic1").val(resposeJSONAry[0].ppic);
                             $("#txtcategories").val(resposeJSONAry[0].categories);  
                             $("#txtcompcount").val(resposeJSONAry[0].compcount);  
                             $("#txtamount").val(resposeJSONAry[0].amount);  
                             $("#txtinfo").val(resposeJSONAry[0].info);  
    
                            /// $("#imgprev").css("display","inline"); 
                             //$("#imgproprev").css("display","inline");
                             
                        }
                })
              })
              $("#validationServerUsername").prop("readonly",true).val(localStorage.getItem("activeuser"));
            })
            //////////preview   code .........................
            function loadproof(ref){
         
                var img = document.getElementById("imgprev1");
               // alert(img)
                img.src = URL.createObjectURL(ref.files[0]);
                //alert()
              }
      
        
              function loadprofile(ref){
               
               var img = document.getElementById("imgprev");
              // alert(img)
               img.src = URL.createObjectURL(ref.files[0]);
               //alert()
             }
       