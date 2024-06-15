# Notes.md

## ASMR  auudio
Audio 1 = key up asmr sound
Audio 12 = key down asmr sound
Audio 2 = mouse up asmr sound
Audio 22 = mouse down asmr sound
------------------------------------
### setting() fuunction
HOW TO USE: TEMPlATE

var elementB;
var elementL;
setting(elementB,elementL,"Show email",abis,"id1);
----------------------------------------------------    
### Settings save
if (localStorage.getItem("") == null || localStorage.getItem("") == undefined) {
      localStorage.setItem("", "N");
    } else {
      if (localStorage.getItem("") == "Y") {
        .checked = true;
      } else if (localStorage.getItem("") == "N") {
        .checked = false;
      }
    }
    .addEventListener("click", () => {
      //something
      if (.checked == true) {

        localStorage.setItem("", "Y");
      } else if (.checked == false) {
        localStorage.getItem("", "N");
      }

    });    
------------------------------------------------------------------------------------------\