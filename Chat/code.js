//Buttons 
onEvent("login_chat", "click", function(event) {
  setScreen("LoginChat");
});
onEvent("signup_chat", "click", function(event) {
  setScreen("SignUpChat");
});
//CreatAccount 
onEvent("checkbox1", "click", function(event) {
  onEvent("button5", "click", function(event) {
    setScreen("Tearms_and_Survesew");
    createRecord("Account", {Username:(getText("text_input2")), Password:(getText("text_input3"))}, function(record) {
      
    });
  });
});
//LoginAccount 
onEvent("button6", "click", function(event) {
  readRecords("Account", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).Username == getText("text_input4")) {
        if ((records[i]).Password == getText("text_input5")) {
          setScreen("LetUsCHAT_home");
        } else {
          setText("label8", "Wrong Username or Password");
        }
      } else {
        setText("label8", "Wrong Username or  Password ");
      }
    }
  });
});
onEvent("Logout_Chat1", "click", function(event) {
  setScreen("ChatRoom");
});
onEvent("button1", "click", function(event) {
  setScreen("send_messege");
});
onEvent("button3", "click", function(event) {
  setScreen("LetUsCHAT_home");
  
});
onEvent("gc_goto", "click", function(event) {
  setScreen("GlobelChat");
});
onEvent("button16", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
//SendMessege 
onEvent("button3", "click", function(event) {
  createRecord("Messege", {FromUsername:(getText("text_input4")), ToUsername:(getText("text_input1")), Messege:(getText("text_area1")), FromUsername:(getText("text_input4"))}, function(record) {
    setText("text_input1", "");
    setText("text_area1", "");
  });
});
//GetMessege
onEvent("button14", "click", function(event) {
  setScreen("GetMessege");
});
onEvent("button14", "click", function(event) {
  setText("text_area2", "");
  readRecords("Messege", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("text_input1") == (records[i]).ToUsername) {
      setTimeout(function() {
        setText("text_area2", "No Messeges");
      }, 1000);
      } else {
        setText("text_area2", "From: " + ((records[i]).FromUsername + ("   " + ("Messege: " + (records[i]).Messege + ("   " + ("To: " + (records[i]).ToUsername))))));
      }

    }
  });
});
onEvent("button2", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
onEvent("button4", "click", function(event) {
  deleteRecord("Messege", {id:(getText("id"))}, function(success) {
    setText("text_input2", "Delete Succsess!");
    setTimeout(function() {
      setText("text_area2", "");
    }, 3000);
  });
});
onEvent("button7", "click", function(event) {
  readRecords("Messege", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("text_input1") == (records[i]).ToUsername) {
      setTimeout(function() {
        setText("text_area2", "No Messeges");
      }, __);
      } else {
        setText("text_area2", "From: " + ((records[i]).FromUsername + ("   " + ("Messege: " + (records[i]).Messege + ("   " + ("To: " + (records[i]).ToUsername))))));
      }

    }
  });
  readRecords("Messege", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("text_input1") == (records[i]).ToUsername) {
      setTimeout(function() {
        setText("text_area2", "No Messeges");
      }, __);
      } else {
        setText("text_area2", "From: " + ((records[i]).FromUsername + ("   " + ("Messege: " + (records[i]).Messege + ("   " + ("To: " + (records[i]).ToUsername))))));
      }

    }
  });
});
onEvent("text_area2", "mouseover", function(event) {
  readRecords("Messege", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("text_input1") == (records[i]).ToUsername) {
      // 
      } else {
        setText("text_area2", "From: " + ((records[i]).FromUsername + ("   " + ("Messege: " + (records[i]).Messege + ("   " + ("To: " + (records[i]).ToUsername))))));
      }

    }
  });
});
onEvent("text_area2", "change", function(event) {
  setText("label14", "New Messege!");
});
onEvent("button4", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
onEvent("button9", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
onEvent("button10", "click", function(event) {
  setScreen("Report");
});
onEvent("button8", "click", function(event) {
  setScreen("ThankYou");
});
//Report
onEvent("button8", "click", function(event) {
  createRecord("Report", {Name:(getText("text_input7")), Report:(getText("text_input8")), Comments:(getText("text_input9"))}, function(record) {
    
  });
});
onEvent("button11", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
//FindAFriend
onEvent("button12", "click", function(event) {
  setScreen("FindAFriend");
});
readRecords("Account", {}, function(records) {
  for (var i =0; i < records.length; i++) {
    setText("NewUser", (records[i]).Username);
  }
});
onEvent("button13", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
//DoughGames
onEvent("button17", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
onEvent("dg_contact1", "click", function(event) {
  setScreen("DGSignIn");
});
onEvent("button19", "click", function(event) {
  createRecord("DGMessege", {Messege:(getText("text_input12")), FromUsername:(getText("text_input11")), Date: Date()}, function(record) {
    setText("text_input12", "");
  });
});
readRecords("DGMessege", {}, function(records) {
  for (var i =0; i < records.length; i++) {
    setText("text_area4", "From: " + ((records[i]).FromUsername + ("   " + ((" " + (records[i]).Messege) + ("   " + ("Date: " + (records[i]).Date))))));
  }
});
onEvent("button20", "click", function(event) {
  setScreen("DGSignIn");
});
onEvent("button18", "click", function(event) {
  readRecords("DGMessege", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("text_input1") == (records[i]).ToUsername) {
      setTimeout(function() {
        setText("text_area2", "No Messeges");
      }, __);
      } else {
        setText("text_area4", "From: " + ((records[i]).FromUsername + ("   " + (("Messege: " + (records[i]).Messege) + ("   " + ("Date: " + (records[i]).Date))))));
      }

    }
  });
});
onEvent("button15", "click", function(event) {
  readRecords("DGAccount", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).Username == getText("text_input11")) {
        if ((records[i]).Passcode == getText("text_input10")) {
          setScreen("DGChat");
        } else {
          setText("label22", "Wrong Username or Password");
        }
      } else {
        setText("label22", "Wrong Username or  Password ");
      }
    }
  });
});
//Auto Refresh
timedLoop(1000, function() {
  readRecords("DGMessege", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      setText("text_area4", "From: " + ((records[i]).FromUsername + ("   " + (("Messege: " + (records[i]).Messege) + ("   " + ("Date: " + (records[i]).Date))))));
    }
  });
});
timedLoop(1000, function() {
  readRecords("Messege", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      setText("text_area2", "From: " + ((records[i]).FromUsername + ("   " + ("Messege: " + (records[i]).Messege + ("   " + ("To: " + (records[i]).ToUsername))))));
    }
  });
});
//GlobelChat 
onEvent("button21", "click", function(event) {
  createRecord("Globel", {Messege:(getText("text_input6")), From:(getText("text_input4")), Date: (Date())}, function(record) {
    setText("text_input6", "");
  });
});
timedLoop(1000, function() {
  readRecords("Globel", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      setText("text_area3", "From: " + ((records[i]).From + ("   " + ("Messege: " + (records[i]).Messege + ("   " + ("" + ""))))));
    }
  });
});
onEvent("button22", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
onEvent("button23", "click", function(event) {
  setScreen("LetUsCHAT_home");
});
onEvent("button24", "click", function(event) {
  setScreen("DataTable");
});
//Data
onEvent("button26", "click", function(event) {
  readRecords("Data table code", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).NumberCode == getText("text_input13")) {
        setScreen("DTable");
      } else {
        setText("label27", "Code not found. Try agian");
      }
    }
  });
});
onEvent("button27", "click", function(event) {
  setScreen("DGChat");
});
//GC delete
timedLoop(1000000, function() {
  deleteRecord("Globel", {id:(getText("id"))}, function(success) {
    setTimeout(function() {
      setText("text_area3", "");
    }, 3000);
  });
});
onEvent("checkbox2", "change", function(event) {
  onEvent("button28", "click", function(event) {
    setScreen("LoginChat");
  });
});
//DTable usege
onEvent("button25", "click", function(event) {
  createRecord("DataUsege", {Who:(getText("text_input11")), When:(Date())}, function(record) {
    readRecords("Account", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setText("text_area6", ((records[i]).Username + ': ') + records[i].Password);
      }
    });
  });
});
onEvent("button29", "click", function(event) {
  setScreen("SM");
});
onEvent("button6", "click", function(event) {
  playSound("assets/category_objects/metal_click.mp3", false);
});
onEvent("button43", "click", function(event) {
  setScreen("States");
});
drawChartFromRecords("U-P", "bar", "Account", ["Username", "Password"]);
          
