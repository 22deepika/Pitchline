$(document).ready(function () 
{
    
        $("#kvalidationServer01").keyup(function () {
            var r = /^[a-zA-Z ]*$/;
            var Uid = $("#kvalidationServer01").val();
            if ($("#kvalidationServer01").val() == "") {
                $("#kvalidationServer01").addClass("not-ok").removeClass("ok");
                $("#name").html("Plz write Proper");
            }
            else if (r.test(Uid) == false) {
                $("#kvalidationServer01").addClass("not-ok").removeClass("ok");
                $("#name").html("Write Alphabets only. ");
            }
            else {
                $("#kvalidationServer01").addClass("ok").removeClass("not-ok");
                $("#name").html("Good");
            }
        });


       
            $("#kvalidationServerUsername").keyup(function () {
                var r = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
                var Uid = $("#kvalidationServerUsername").val();
                if ($("#kvalidationServerUsername").val() == "") {
                    $("#kvalidationServerUsername").addClass("not-ok").removeClass("ok");
                    $("#emailid").html("Write proper email");
                }
                else if (r.test(Uid) == false) {
                    $("#kvalidationServerUsername").addClass("not-ok").removeClass("ok");
                    $("#emailid").html("must have @ and full stop");
                }
                else {
                    $("#kvalidationServerUsername").addClass("ok").removeClass("not-ok");
                    $("#emailid").html("Good");
                }


            })




            $("#kvalidationServercontact").blur(function () {
                var r = /^[7-9]{1}[0-9]{9}$/;
                var Uid = $("#kvalidationServercontact").val();
                if ($("#kvalidationServercontact").val() == "") {
                    $("#kvalidationServercontact").addClass("not-ok").removeClass("ok");
                    $("#contact").html("Plz write Proper");
                }
                else if (r.test(Uid) == false) {
                    $("#kvalidationServercontact").addClass("not-ok").removeClass("ok");
                    $("#contact").html("Good");
                }
                else {
                    $("#kvalidationServercontact").addClass("ok").removeClass("not-ok");
                    $("#contact").html("false");
                }
            });

            
         });
         $(document).ready(function(){
            $("#fetch").click(function(){
                //alert();
                var userid=$("#kvalidationServerUsername").val();
                var urlWithData="/JSONsearchrecord2?emailid="+userid;
                $.getJSON(urlWithData,function(responseJSONAry) //max:1   min:0
                {
                           if(responseJSONAry.length==0)
                        alert("Invalid id"); //0 record
                        else
                        {
                          alert(JSON.stringify(responseJSONAry));
                           //1 record
                             $("#kvalidationServer01").val(responseJSONAry[0].name);//table me se col wale 
                             $("#kvalidationServercontact").val(responseJSONAry[0].contact);
                             $("#kaddress").val(responseJSONAry[0].address);//table me se col wale 
                             
                             $("#kcity").val(responseJSONAry[0].city);     
                             $("#imgprev").prop("src","/uploads/"+responseJSONAry[0].acardpic);
                            
                          //   $("#acardpic").val(responseJSONAry[0].acardpic);
                             $("#kcompany").val(responseJSONAry[0].company);
                             $("#kestdin").val(responseJSONAry[0].estdin);
                             $("#ksales").val(responseJSONAry[0].sales);  
                             $("#kpartners").val(responseJSONAry[0].partners);  
                             $("#kevaluation").val(responseJSONAry[0].evaluation); 
                             $("#kcategories").val(responseJSONAry[0].categories);
                             $("#kinfo").val(responseJSONAry[0].info); 
                             $("#hdn").val(responseJSONAry[0].acardpic);
    
                            // $("#imgprev").css("display","inline"); 
                            
                        }
                })
              })
              $("#kvalidationServerUsername").prop("readonly",true).val(localStorage.getItem("activeuser"));
            })
//////////////Previw code.........................
            function loadproof(ref){
                // alert(" hi...........")
                 var img = document.getElementById("imgprev");
                // alert(img)
                 img.src = URL.createObjectURL(ref.files[0]);
                 //alert()
               }