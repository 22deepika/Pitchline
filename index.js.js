const { urlencoded } = require("express");
const e = require("express");

var express = require("express");
var fileuploader = require("express-fileupload");
var mysql = require("mysql");

var app = express();

app.listen(process.env.PORT || 5000);

app.use(express.static("public"));
//url. hand.
app.get("/", function (req, resp) {
    //console.log("Home page");
    resp.send("<h1>Welcome... Ites Home Page</h1>");
    resp.sendFile(__dirname + "/public/index1.html");
})
var DbConfigKuch = {
    host: "localhost",
    user: "root",
    password: "",
    database: "realjava"
}

var dbCtrl = mysql.createConnection(DbConfigKuch);
dbCtrl.connect(function (err) {
    if (err)
        console.log(err);
    else
        console.log("**** Connnecccttteeddddd.....");
})
app.use(express.static("public"));
//url. hand.
app.get("/", function (req, resp) {
    resp.sendFile(__dirname + "/public/index1.html");
})



app.use(express.static("public"));
//url. hand.
app.get("/", function (req, resp) {
    resp.sendFile(__dirname + "/public/index1.html");
})

app.get("/sharkgoogler", function (req, resp) {
    resp.sendFile(__dirname + "/public/shark-googler.html");
})





app.get("/ajaxSignup", function (req, resp) {
    console.log("aagya");
    console.log(req.query.emailkuch);
    console.log(req.query.pwdkuch);
    console.log(req.query.userkuch);
    var datAry = [req.query.emailkuch, req.query.pwdkuch, req.query.userkuch];
    console.log(datAry);
    dbCtrl.query("insert into project values (?,?,?,current_date(),1)", datAry, function (err) {
        if (err)
            resp.send(err);
        else if (req.query.userkuch == "shark") {
            resp.send("shark");
        }
        else {
            resp.send("founder")
        }


    })
});
app.get("/ajaxCheckUser", function (req, resp) {
    console.log("Hi" + req.query.emailKuch);
    dbCtrl.query("select * from project where email=?", [req.query.emailKuch], function (err, result) {
        console.log(result);
        if (err)
            resp.send(err);
        else {
            if (result.length == 0)
                resp.send("Available");
            else
                resp.send("Already Occupied");
        }
    })


});
app.get("/ajaxLogin", function (req, resp) {
    console.log("aagya");
    console.log(req.query.txtlid);
    console.log(req.query.txtlPwd);
    var datAry = [req.query.txtlid, req.query.txtlPwd];
    //  console.log(datAry);
    dbCtrl.query("select Usertype from project where Email=? and Password=? and status=1", datAry, function (err, result) {


        // result=JSON.stringify(result);
        if (err)
            resp.send(err);
        else
            if (result.length == 0)
                resp.send("Invalid Id/Id blocked");
            else
                resp.send(result[0].Usertype);


    })
});
app.use(express.urlencoded('extended:true'));
app.use(fileuploader());
app.post("/profilesave-shark", function (req, resp) {
    // Adhar card pic upload
    var newName;
    if (req.files.acardpic != null) {
        newName = req.body.emailid + "-" + req.files.acardpic.name;
        var des = process.cwd() + "/public/uploads/" + newName;
        req.files.acardpic.mv(des, function (err) {
            if (err)
                console.log(err);
            else
                console.log("Adhar Card pic uploaded successfully..!!!");
        })
    }

    // Shark photo pic upload
    var newName1;
    if (req.files.ppic != null) {
        newName1 = req.body.emailid + "-" + req.files.ppic.name;
        var des = process.cwd() + "/public/uploads/" + newName1;
        req.files.ppic.mv(des, function (err) {
            if (err)
                console.log(err);
            else
                console.log("Shark pic uploaded successfully..!!!");
        })
    }
    var dataAry = [req.body.emailid, req.body.Name, req.body.contact, req.body.address, req.body.occupation, req.body.city, newName, newName1, req.body.categories, req.body.compcount, req.body.amount, req.body.info];
    dbCtrl.query("insert into sprofile values(?,?,?,?,?,?,?,?,?,?,?,?)", dataAry, function (err) {
        if (err)
            resp.send(err);
        else
            resp.send("**Record saved successfullyy..!!");
    });
});
app.post("/update-shark", function (req, resp) {
    var newName;
    var newName1;
    if (req.files == null) {

    //resp.send(req.body.oldPic);
    newName = req.body.oldPic;
    newName1 = req.body.oldPic1;
    }
     if (req.files != null) {
        if (req.files.acardpic) {


            newName = req.body.emailid + "-" + req.files.acardpic.name;
            // newName1 = req.body.emailid + "-" + req.files.ppic.name;
            var des = process.cwd() + "/public/uploads/" + newName;
            // var des = process.cwd() + "/public/uploads/" + newName1;
            req.files.acardpic.mv(des, function (err) {
                if (err)
                    console.log(err);
                else
                    console.log("Adhar Card pic uploaded successfully..!!!");



            });
        }
        else{
            newName = req.body.oldPic;
                }
                        if (req.files.ppic) {
            //newName = req.body.emailid + "-" + req.files.acardpic.name ;
            newName1 = req.body.emailid + "-" + req.files.ppic.name;
            //var des = process.cwd() + "/public/uploads/" + newName;
            var des = process.cwd() + "/public/uploads/" + newName1;
            req.files.ppic.mv(des, function (err) {
                if (err)
                    console.log(err);
                else{
                    console.log("profile pic uploaded successfully..!!!");
                }


            });
        }
        else{
            newName1 = req.body.oldPic1;}

    }  

    // req.files.ppic.mv(des, function (err) {
    //     if (err)
    //         console.log(err);
    //     else
    //         console.log("Shark pic uploaded successfully..!!!");
    
    // });

    var dataAry = [req.body.Name, req.body.contact, req.body.address, req.body.occupation, req.body.city, newName, newName1, req.body.categories, req.body.compcount, req.body.amount, req.body.info, req.body.emailid];
    dbCtrl.query("update sprofile set Name=?,contact=?,address=?,occupation=?,city=?,acardpic=?,ppic=?,categories=?,compcount=?,amount=?,info=?where emailid=?", dataAry, function (err) {
        if (err)
            resp.send(err);
        else
            resp.send("**Record updated successfullyy..!!");
    });
})
//Fetch DATA


app.get("/JSONserachRecord", function (req, resp) {
    var emailid = req.query.emailid;
    dbCtrl.query("select * from sprofile where emailid=?", [req.query.emailid], function (err, result) {
        if (err)
            resp.send(err);
        else
            resp.send(result);


    })
});
/////admin pannel............................................
app.get("/showAll2", function (req, resp) {
    dbCtrl.query("select * from sprofile", function (err, result) {
        if (err)
            resp.send(err);
        else
            resp.send(result);
    })
})







////////googler.................................................
app.get("/doDelete", function (req, resp) {
    dbCtrl.query("delete  from sprofile where emailid=?", [req.query.emailid], function (err, result) {
        if (err)
            resp.send(err);
        else
            if (result.affectedRows == 0)
                resp.send("Invalid id");
            else
                resp.send("Deleted");
    })
})
app.get("/showcitydata", function (req, resp) {
    dbCtrl.query("SELECT DISTINCT city FROM  sprofile ;", function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result)
        }
    })
})


app.get("/showcatdata", function (req, resp) {
    dbCtrl.query("SELECT DISTINCT categories FROM  sprofile;", function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result)
        }
    })
})

app.get("/dosearch", function (req, resp) {
    dbCtrl.query("select * from sprofile where city=? and categories=?;", [req.query.valcity, req.query.catg], function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result)
        }
    })
})


app.get("/dodatashow", function (req, resp) {
    dbCtrl.query("select * from sprofile where emailid=?", [req.query.email], function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result)
        }
    })
})








///// block and resume


app.get("/doResume", function (req, resp) {

    dbCtrl.query("update project set Status=1 where Email=?", [req.query.emailid], function (err, result) {
        if (err)
            resp.send(err);
        else {

            resp.send("Unblocked");
        }
    })
})


app.get("/doBlock", function (req, resp) {

    dbCtrl.query("update project set Status=2 where Email=?", [req.query.emailid], function (err, result) {
        if (err)
            resp.send(err);
        else {

            resp.send("Blocked");
        }
    })
})

app.get("/ajaxRecinvestment1", function (req, resp) {
    console.log("aagya");
    console.log(req.query.email1kuch);
    console.log(req.query.companynamekuch);
    console.log(req.query.ramountkuch);
    console.log(req.query.details1kuch);
    var datAry = [req.query.email1kuch, req.query.companynamekuch, req.query.ramountkuch, req.query.details1kuch];
    console.log(datAry);
    dbCtrl.query("insert into recinvestment values  (?,?,?,?)", datAry, function (err) {
        if (err)
            resp.send(err);
        else {
            resp.send("Record saved successfully");
        }
    })
});









///////////////////////founder file  ///////////////////////////////////////////////////////////////////




//==================================

app.post("/profilesave-founder", function (req, resp) {
    var newName;

    // if req.files==null , it means user dont want to change the pic
    // then use the old pic name to update
    // if(req.files==null)//no change in pic
    //  {
    //  newName=req.body.oldPic;
    // }else
    if (req.files != null) {
        newName = req.body.emailid + "-" + req.files.acardpic.name;
        var des = process.cwd() + "/public/uploads/" + newName;
        req.files.acardpic.mv(des, function (err) {
            if (err)
                console.log(err);
            else
                console.log("1.File Uploaded Successfullllyyyy");
        });
    }


    var dataAry = [req.body.emailid, req.body.name, req.body.contact, req.body.address, req.body.city, newName, req.body.company, req.body.estdin, req.body.sales, req.body.partners, req.body.evaluation, req.body.kcategories, req.body.info];
    dbCtrl.query("insert into founderprofile values(?,?,?,?,?,?,?,?,?,?,?,?,?)", dataAry, function (err) {
        if (err)
            resp.send(err);
        else
            resp.send("**Record saved successfullyy..!!");
    });
})



app.post("/update-founder", function (req, resp) {
    var newName;

    //if req.files==null , it means user dont want to change the pic
    //then use the old pic name to update
    if (req.files == null)//no change in pic
    {
        //resp.send("hy");
        newName = req.body.hdn;
    } else {
            newName = req.body.emailid + "-" + req.files.acardpic.name;
            var des = process.cwd() + "/public/uploads/" + newName;
            req.files.acardpic.mv(des, function (err) {
                if (err)
                    console.log(err);
                else
                    console.log("1.File Uploaded Successfullllyyyy");
            });
        }
    var dataAry = [req.body.name, req.body.contact, req.body.address, req.body.city, newName, req.body.company, req.body.estdin, req.body.sales, req.body.partners, req.body.evaluation, req.body.kcategories, req.body.info, req.body.emailid];
    dbCtrl.query("update founderprofile set name=?,contact=?,address=?,city=?,acardpic=?,company=?,estdin=?,sales=?,partners=?,evaluation=?,categories=?,info=? where emailid=?", dataAry, function (err) {
        if (err)
            resp.send(err);
        else
            resp.send("**Record updated successfullyy..!!");
    });

})





//////fetch/////
app.get("/JSONsearchrecord2", function (req, resp) {
    var emailid = req.query.emailid;
    dbCtrl.query("select * from founderprofile where emailid=?", [req.query.emailid], function (err, result) {
        if (err)
            resp.send(err);
        else
            resp.send(result);


    })
});
app.get("/showAll3", function (req, resp) {
    dbCtrl.query("select * from founderprofile", function (err, result) {
        if (err)
            resp.send(err);
        else
            resp.send(result);
    })
})

app.get("/doDelete3", function (req, resp) {
    dbCtrl.query("delete  from founderprofile where emailid=?", [req.query.emailid], function (err, result) {
        if (err)
            resp.send(err);
        else
            if (result.affectedRows == 0)
                resp.send("Invalid id");
            else
                resp.send("Deleted");
    })
})



/////////block   and resume.........angular...founder.......



app.get("/doResume3", function (req, resp) {

    dbCtrl.query("update project set Status=1 where Email=?", [req.query.emailid], function (err, result) {
        if (err)
            resp.send(err);
        else {

            resp.send("Unblocked");
        }
    })
})


app.get("/doBlock3", function (req, resp) {

    dbCtrl.query("update project set Status=2 where Email=?", [req.query.emailid], function (err, result) {
        if (err)
            resp.send(err);
        else {

            resp.send("Blocked");
        }
    })
})


///////// founder....googler......
app.get("/getcategories", function (req, resp) {
    dbCtrl.query("SELECT DISTINCT categories FROM founderprofile;", function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result)
        }
    })

})

app.get("/getevaluation", function (req, resp) {
    dbCtrl.query("SELECT DISTINCT evaluation FROM  founderprofile;", function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result);
        }
    })

})


app.get("/dofetch", function (req, resp) {
    dbCtrl.query("select * from founderprofile where evaluation=? and categories=?",[req.query.evaluation, req.query.categories],function (err ,result){

    
    //dbCtrl.query("select * from founderprofile where evaluation=? and categories=?", [req.query.evaluation, req.query.categories], function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result)
        }
    })
})
app.get("/dodatashow1", function (req, resp) {
    dbCtrl.query("select * from founderprofile where emailid=?", [req.query.email], function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result)
        }
    })
})
  //================================ settings making new password=====================
  app.get("/makenewpwd", function (req, resp) {
    ary = [req.query.email, req.query.opwd];
    dbCtrl.query("select * from project where Email=? and Password=?", ary, function (err, result) {
        if (err) {
            resp.send(err);
        }
        else if (result.length == 1) {
            ary1 = [req.query.npwd, req.query.email];
            dbCtrl.query("update project set Password=? where Email=?", ary1, function (err, result) {
                if (err)
                    resp.send(err);
                else
                    resp.send("Changed successfully......");
            })
        }
        else
            resp.send("invalid Email id or old password");
    })
})
