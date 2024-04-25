var icon1 = document.getElementById("ICON1");
var icon1down = true;
console.log(localStorage.getItem("PICvalue"));
var stufflocal = String(localStorage.getItem("PICvalue"));

var icon1show = document.getElementById("ICON1S");
icon1.addEventListener("click", () => {
    console.log(icon1down);
    if (icon1down == true) {
        icon1.innerHTML = "&#11205;";
        icon1show.hidden = false;
        icon1down = false;
        console.log(icon1.innerHTML);
    } else if (icon1down == false) {
        icon1.innerHTML = "&#11206;";
        console.log(icon1.innerHTML);
        icon1show.hidden = true;
        icon1down = true;
    }
});
console.log(localStorage.getItem("PICvalue"));
var pic = document.getElementById("YNB");
console.log(navigator.userAgent);
pic.addEventListener("mouseover", () => {
    if (localStorage.getItem("PICvalue") == "On") {


        pic.src = "Images/turned-on-hover.png";
    } else if (localStorage.getItem("PICvalue") == "Off") {

        pic.src = "Images/turned-off-hover.png";
    }

});
pic.addEventListener("mouseout", () => {

    if (localStorage.getItem("PICvalue") == "On") {

        pic.src = "Images/Button0.png";
    } else if (localStorage.getItem("PICvalue") == "Off") {

        pic.src = "Images/Button1.png";
    }
});
if (localStorage.getItem("PICvalue") == null || localStorage.getItem("PICvalue") == undefined) {

    localStorage.setItem("PICvalue", "On");
} else if (localStorage.getItem("PICvalue") == "On") {
    pic.src = "Images/Button0.png";

} else if (localStorage.getItem("PICvalue") == "Off") {
    pic.src = "Images/Button1.png";

}
function wait123() {
    pic.src = "Images/Button1.png";
}
function wait1234() {
    pic.src = "Images/Button0.png"
}
console.log(localStorage.getItem("PICvalue"));


pic.addEventListener("click", () => {

    if (localStorage.getItem("PICvalue") == "On") {

        setTimeout(wait123, 2000);
        pic.src = "Images/turn-off.gif";
        localStorage.setItem("PICvalue", "Off");
        console.log(localStorage.getItem("PICvalue"));
    } else if (localStorage.getItem("PICvalue") == "Off") {
        setTimeout(wait1234, 2000);
        pic.src = "Images/turn-on.gif";
        localStorage.setItem("PICvalue", "On");
        console.log(localStorage.getItem("PICvalue"));


    }
    location.reload();
});

console.log(localStorage.getItem("PICvalue"));
export{stufflocal};
