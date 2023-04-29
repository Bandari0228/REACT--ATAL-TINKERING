import React from "react";



export default function form() {
  let count2 = 1;
  let count3 = 1;
  let count4 = 1;
  let count5 = 1;
  let count6 = 1;
  let count7 = 1;
  let count8 = 1;
  function fun2() {
    if (count2 < 50) {
      ++count2;
      const btndiv = document.getElementById("btndiv2");
      var division = document.createElement("div");
      var input = document.createElement("input");
      // input.setAttribute("id", "2-" + count2)
      input.type = "text";
      division.appendChild(input);
      btndiv.appendChild(division);
    } else {
      alert("Can't add more than 50 inputs!");
    }
  }

  function dfun2() {
    if (count2 !== 1) {
      --count2;
      const btndiv = document.getElementById("btndiv2");
      let last = btndiv.childNodes[btndiv.childNodes.length - 1];
      last.parentNode.removeChild(last);
    } else {
      alert("Can't remove the last input field!");
    }
  }



  function fun3() {
    if (count3 < 50) {
        ++count3;
        const btndiv = document.getElementById("btndiv3");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "3-" + count3)
        input.type = "text";
        division.appendChild(input);
        btndiv.appendChild(division);
    } else {
        alert("Can't add more than 50 inputs!");
    }
}

function dfun3() {
    if (count3 !== 1) {
        --count3;
        const btndiv = document.getElementById('btndiv3');
        let last = btndiv.childNodes[btndiv.childNodes.length - 1];
        last.parentNode.removeChild(last);
    } else {
        alert("Can't remove the last input field!");
    }
}


function fun4() {
  if (count4 < 50) {
      ++count4;
      const btndiv = document.getElementById("btndiv4");
      var division = document.createElement("div");
      var input = document.createElement("input");
      input.setAttribute("id", "4-" + count4)
      input.type = "text";
      division.appendChild(input);
      btndiv.appendChild(division);
  } else {
      alert("Can't add more than 50 inputs!");
  }
}

function dfun4() {
  if (count4 !== 1) {
      --count4;
      const btndiv = document.getElementById('btndiv4');
      let last = btndiv.childNodes[btndiv.childNodes.length - 1];
      last.parentNode.removeChild(last);
  } else {
      alert("Can't remove the last input field!");
  }
}

function fun5() {
  if (count5 < 50) {
      ++count5;
      const btndiv = document.getElementById("btndiv5");
      var division = document.createElement("div");
      var input = document.createElement("input");
      input.setAttribute("id", "5-" + count5)
      input.type = "text";
      division.appendChild(input);
      btndiv.appendChild(division);
  } else {
      alert("Can't add more than 50 inputs!");
  }
}

function dfun5() {
  if (count5 !== 1) {
      --count5;
      const btndiv = document.getElementById('btndiv5');
      let last = btndiv.childNodes[btndiv.childNodes.length - 1];
      last.parentNode.removeChild(last);
  } else {
      alert("Can't remove the last input field!");
  }
}

function fun6() {
  if (count6 < 50) {
      ++count6;
      const btndiv = document.getElementById("btndiv6");
      var division = document.createElement("div");
      var input = document.createElement("input");
      input.setAttribute("id", "6-" + count6)
      input.type = "text";
      division.appendChild(input);
      btndiv.appendChild(division);
  } else {
      alert("Can't add more than 50 inputs!");
  }
}
function dfun6() {
  if (count6 !== 1) {
      --count6;
      const btndiv = document.getElementById('btndiv6');
      let last = btndiv.childNodes[btndiv.childNodes.length - 1];
      last.parentNode.removeChild(last);
  } else {
      alert("Can't remove the last input field!");
  }
}
function fun7() {
  if (count7 < 50) {
      ++count7;
      const btndiv = document.getElementById("btndiv7");
      var division = document.createElement("div");
      var input = document.createElement("input");
      input.setAttribute("id", "7-" + count7)
      input.type = "text";
      division.appendChild(input);
      btndiv.appendChild(division);
  } else {
      alert("Can't add more than 50 inputs!");
  }
}
function dfun7() {
  if (count7 !== 1) {
      --count7;
      const btndiv = document.getElementById('btndiv7');
      let last = btndiv.childNodes[btndiv.childNodes.length - 1];
      last.parentNode.removeChild(last);
  } else {
      alert("Can't remove the last input field!");
  }
}


function fun8() {
  if (count8 < 50) {
      ++count8;
      const btndiv = document.getElementById("btndiv8");
      var division = document.createElement("div");
      var input = document.createElement("input");
      input.setAttribute("id", "8-" + count8)
      input.type = "text";
      division.appendChild(input);
      btndiv.appendChild(division);
  } else {
      alert("Can't add more than 50 inputs!");
  }
  console.log(count8);
}
function dfun8() {
  const btndiv = document.getElementById('btndiv8');
  if (count8 !== 1) {
      --count8;
      let last = btndiv.childNodes[btndiv.childNodes.length - 1];

      last.parentNode.removeChild(last);
  } else {
      alert("Can't remove the last input field!");
  }
  console.log(count8);
}

function submitbtn() {
  console.log("Submit Button Clicked");
  alert("sumbitted succesfully");

  var a = document.getElementById("feild1").value;
  var b = document.getElementById("feild2").value;
  var c = document.getElementById("feild3").value;
  var goals = multiForm(count2, "2");
  var materials = multiForm(count3, "3");
  var instruction = multiForm(count4, "4");
  var tips = multiForm(count5, "5");
  var assement = multiForm(count6, "6");
  var extension = multiForm(count7, "7");
  var resource = multiForm(count8, "8");

  console.log(a, b, c, goals, materials, instruction, tips, assement, extension, resource);
  
 
  createexpform(a, b, c, goals, materials, instruction, tips, assement, extension, resource);



}


  return (
    <div>
      <form id="form">
        <div className="exp" id="exp1">
          <div className="first">
            <h1> EXPERIMENT FORM </h1>
          </div>

          <div>
            <label htmlfor="feild1"> TA ID</label>
            <input id="feild1" type="text" />
          </div>
          <div>
            <label htmlfor="feild2"> TA NAME</label>
            <input id="feild2" type="text" />
          </div>

          <div>
            <label htmlfor="feild3"> INTRODUCTION</label>
            <input id="feild3" type="text" />
          </div>

          <div id="btndiv2">
            <label>GOALS</label>
            <input id="2-1" type="text" />
            <button className="btn" id="btn2" type="button" onClick={fun2}>
              ADD FEILD
            </button>
            <button className="btn" id="dbtn2" type="button" onClick={dfun2}>
              {" "}
              REMOVE
            </button>
          </div>

          <div id="btndiv3">
            <label htmlfor="3-1"> MATERIALS</label>
            <input id="3-1" type="text" />
            <button className="btn" id="btn3" onClick={fun3} type="button">
              ADD FEILD
            </button>
            <button className="btn" id="dbtn3" onClick={dfun3} type="button">
              REMOVE
            </button>
          </div>

          <div id="btndiv4">
            <label htmlfor="4-1"> INSTRUCTIONS </label>
            <input type="text" id="4-1" />
            <button className="btn" id="btn4" onClick={fun4} type="button">
              ADD FEILD
            </button>
            <button className="btn" id="dbtn4" onClick={dfun4} type="button">
              REMOVE
            </button>
          </div>

          <div id="btndiv5">
            <label htmlfor="5-1"> TIPS </label>
            <input id="5-1" type="text" />
            <button className="btn" id="btn5" onClick={fun5} type="button">
              ADD FEILD
            </button>
            <button className="btn" id="dbtn5" onClick={dfun5} type="button">
              REMOVE
            </button>
          </div>

          <div id="btndiv6">
            <label htmlfor="6-1"> ASSESSMENT</label>
            <input id="6-1" type="text" />
            <button className="btn" id="btn6" onClick={fun6} type="button">
              ADD FEILD
            </button>
            <button className="btn" id="dbtn6" onClick={dfun6} type="button">
              REMOVE
            </button>
          </div>
          <div id="btndiv7">
            <label htmlfor="7-1"> EXTENSIONS</label>
            <input id="7-1" type="text" />
            <button className="btn" id="btn7" onClick={fun7} type="button">
              ADD FEILD
            </button>
            <button className="btn" id="dbtn7" onClick={dfun7} type="button">
              REMOVE
            </button>
          </div>

          <div id="btndiv8">
            <label htmlfor="8-1"> RESOURCES</label>
            <input id="8-1" type="text" />
            <button className="btn" id="btn8" onClick={fun8} type="button">
              ADD FEILD
            </button>
            <button className="btn" id="dbtn8" onClick={dfun8} type="button">
              REMOVE
            </button>
          </div>

          <div className="button">
            <label htmlfor="reset"></label>
            <input id="reset" type="reset" value="RESET" />
            <label htmlfor="submitbtn"></label>
            <input type="button" id="submitbtn" value="SUBMIT" />
          </div>
        </div>
      </form>
    </div>
  );
}
