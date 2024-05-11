var cssnew = document.createElement("style");
cssnew.textContent = ".PartnersAndCreditsWrapper{z-index:10;}";

document.getElementById("root").insertBefore(cssnew, document.getElementById("root").children[0]);
document.querySelector("#root > div.WholeAppWrapper > div > div.HomeScreenBottomRight > div:nth-child(3)").addEventListener("click", () => {
  if (document.getElementsByClassName(".PartnersAndCreditsWrapper")) {
    document.getElementsByClassName(".PartnersAndCreditsWrapper").style.zIndex = "10";
  }
});
//var infirior = document.querySelector("#root");
//cssnew.insertAdjacentElement("beforebegin", infirior);
function upper() {
  "use strict";
  var opening = document.createElement("div");
  opening.style.position = "fixed";
  opening.style.width = "100%";
  opening.style.height = "100%";
  opening.style.opacity = "0.99999999999999";
  opening.style.zIndex = "6000000000";
  opening.className = "FullyFancyText";
  document.body.appendChild(opening);
  var Name = document.createElement("div");

  opening.appendChild(Name);
  Name.style.position = "fixed";
  Name.style.right = "5px";
  Name.style.top = "5px";
  opening.style.backgroundColor = "#3d4b79";
  var o1 = document.createElement("h1");
  o1.innerHTML = "Bloxd.io";
  o1.className = "Title FullyFancyText";
  var o2b = document.createElement("div");
  o2b.style.textAllign = "center";
  o2b.style.width = "350px";
  o2b.style.left = "50%";
  o2b.style.top = "50px";
  o2b.style.transform = "translate(-50%, -50%)";
  o2b.innerHTML = "Play";
  o2b.className = "NewButton GoldButton ForceRotateEnterFullscreenButton";
  o2b.style.color = "white";
  var o2bb1 = document.createElement("div");
  o2bb1.className = "ButtonBottomBorder";
  o2b.appendChild(o2bb1);
  var o2bb2 = document.createElement("div");
  o2bb2.className = "ButtonTopBorder";
  o2b.appendChild(o2bb2);
  var o3b = document.createElement("div");
  o3b.innerHTML = "Worlds";
  o3b.className = "FullyFancyText NewButton BlueButton";
  o3b.style.fontSize = "25px";
  o3b.style.padding = "10px";
  o3b.style.width = "200px";
  o3b.style.textAlign = "center";
  o3b.style.position = "fixed";
  o3b.style.top = "250px";
  o3b.style.left = "50%";
  var worldList = document.createElement("div");
  o3b.style.transform = "translate(-50%, -50%)";
  o3b.addEventListener("click", () => {

    worldList.style.width = "100%";
    worldList.style.display = "flex";
    worldList.style.height = "100%";
    worldList.style.backgroundColor = "#22283b";
    worldList.style.position = "fixed";
    worldList.style.top = "0px";
    worldList.style.left = "0px";
    worldList.style.zIndex = "7";
    var Xworldlist = document.createElement("button");
    Xworldlist.innerHTML = "Exit World List";
    Xworldlist.className = "NewButton RedButton SettingsResumeExitButton SettingsExitButton";
    Xworldlist.style.color = "white";
    Xworldlist.addEventListener("click", () => {
      o2b.click();
      worldList.style.zIndex = "-1";
    })
    worldList.appendChild(Xworldlist);
    function world(Imageurl, World, Link, Description, PElement, WrapperDivElement, HeaderElement, ButtonElement, ImageElement) {
      ImageElement.src = String(Imageurl);
      ImageElement.draggable = "false";
      ImageElement.style.width = "300px";
      ImageElement.style.aspectRatio = "16/9";
      ImageElement.style.textAlign = "center";
      ImageElement.style.marginLeft = "5px";
      ImageElement.style.marginRight = "5px";
      HeaderElement.innerHTML = "Join " + World;
      HeaderElement.style.fontSize = "30px";
      ButtonElement.style.padding = "5px";
      WrapperDivElement.style.padding = "10px";
      WrapperDivElement.style.marginLeft = "5px";
      WrapperDivElement.style.borderRadius = "10px";
      WrapperDivElement.style.borderStyle = "solid";
      WrapperDivElement.style.marginRight = "5px";
      WrapperDivElement.style.marginTop = "5px";
      WrapperDivElement.style.marginBottom = "5px";
      WrapperDivElement.appendChild(HeaderElement);
      WrapperDivElement.addEventListener("mouseover", () => {
        WrapperDivElement.style.transform = "scale(1.05999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)";
      });
      WrapperDivElement.addEventListener("mouseout", () => {
        WrapperDivElement.style.transform = "scale(1)";
      });
      WrapperDivElement.style.width = "310px";
      WrapperDivElement.style.backgroundColor = "#545efa";
      HeaderElement.style.textAlign = "center";
      HeaderElement.style.fontFamily = 'Brush Script MT,cursive';
      HeaderElement.className = "FullyFancyText";
      PElement.innerHTML = Description;
      PElement.style.marginLeft = "5px";
      PElement.style.marginRight = "5px";
      WrapperDivElement.appendChild(PElement);
      WrapperDivElement.appendChild(ImageElement);
      ButtonElement.innerHTML = "Join " + World + " Now!";
      ButtonElement.addEventListener("click", () => {

        window.open(Link);

      });
      worldList.appendChild(WrapperDivElement);
      ButtonElement.className = "NewButton GoldButton";
      ButtonElement.style.color = "white";
      ButtonElement.textAlign = "center";
      WrapperDivElement.appendChild(ButtonElement);
    }
    var WorldP1 = document.createElement("p");
    var WorldW1 = document.createElement("div");

    var WorldH1 = document.createElement("h2");
    var WorldB1 = document.createElement("button");
    var WorldI1 = document.createElement("img");
    //Imageurl, World Name, Link to join world, a nice little Description, a Paragraph element, A Wrapper Elemnet, A header element, Button element, Image element

    world("https://i.ibb.co/qRMjddr/Screenshot-2024-04-26-8-56-49-PM.png", "🏙️ninjaville🏙️", "https://bloxd.io/?lobby=%F0%9F%8F%99%EF%B8%8Fninjaville%F0%9F%8F%99%EF%B8%8F&g=worlds", "Role play and explore in a beautifule and open, safe city, The City of Ninjaville!", WorldP1, WorldW1, WorldH1, WorldB1, WorldI1);
    var WorldP2 = document.createElement("p");
    var WorldW2 = document.createElement("div");

    var WorldH2 = document.createElement("h2");
    var WorldB2 = document.createElement("button");
    var WorldI2 = document.createElement("img");
    world("https://i.ibb.co/4dDTJcb/Screenshot-2024-04-26-10-07-51-PM.png", "💎pvp_rp😎", "https://bloxd.io/?lobby=%F0%9F%92%8Epvp_rp%F0%9F%98%8E&g=worlds", "A purly PVP based world to practice, or to just have fun killing noobs.", WorldP2, WorldW2, WorldH2, WorldB2, WorldI2);

    //The music is 🔥 :)) Subscribe please
    opening.appendChild(worldList)


  });
  opening.appendChild(o1);
  opening.appendChild(o2b);
  o3b.addEventListener("mouseover", () => {
    o3b.style.transform = 'scale(1.2) translate(-50%, -50%)';

  });
  o3b.addEventListener("mouseout", () => {
    o3b.style.transform = 'scale(1) translate(-50%, -50%)';
  });
  opening.appendChild(o3b);
  opening.style.top = "0px";
  o2b.addEventListener("mouseover", () => {
    o2b.style.transform = 'scale(1.2) translate(-50%, -50%)';
  });
  o2b.addEventListener("mouseout", () => {
    o2b.style.transform = 'scale(1) translate(-50%, -50%)';
  });
  o2b.addEventListener("click", () => {
    if (document.documentElement.requestFullscreen) {
      console.log("fullscreen done");
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
      document.documentElement.msRequestFullscreen();
    }

    function adsfs() {
      opening.style.display = "none"
    }
    setTimeout(adsfs, 150);
  });
  var nvr = document.createElement("button");
  nvr.innerHTML = "⛔Do not click⛔";
  nvr.style.cursor = "pointer";
  nvr.addEventListener("click", () => {
    nvr.innerHTML = '<iframe style="aspect-ratio:16/9;" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>';
    setTimeout(nvr.click(), 1000);
  });
  opening.appendChild(nvr);



}
function body() {
  function croz() {
    if (document.getElementsByClassName("RespawnButton")[0] != null) {
      makeCh();
    } else {
      console.log('could not find the thing');
    }
  }

  var mch;
  var cps = 0;

  function name() {
    document.getElementsByClassName("PlayerNameInfoNameClickable")[0].innerHTML = "BloxdMaster_";
  }
  var bloxSS = document.createElement("button");
  const d = new Date();
  var timerstart = document.createElement("button");

  var divraButts = document.createElement("div");
  divraButts.style.zIndex = "3";
  var timerend = document.createElement("button");
  var gbs = document.createElement("div");

  divraButts.style.top = "0px";
  divraButts.style.right = "0px";
  divraButts.style.position = "fixed";
  divraButts.style.color = "black";
  divraButts.style.backgroundColor = "white";
  divraButts.innerHTML = "Divra Quick Setup";
  divraButts.id = "divraButtons";
  divraButts.title = "Divra Buttons";

  document.getElementsByClassName("Title")[0].innerHTML = "<img src='https://i.ibb.co/ctsSZmr/favicon.png' alt='bloxd.io logo' title='this is the official logo for bloxd btw' style='  image-rendering: pixelated; width:5%; height:5%;'>Divra for Bloxd";
  document.getElementsByClassName("Title")[0].title = "Divra btw the name was chosen because of randomosy and my knowlage of code.";
  // document.getElementsByClassName("Background")[0].src = "https://cdn.discordapp.com/attachments/1200293652258377759/1200293652719734784/20240126_094706_0000.png?ex=65c5a793&is=65b33293&hm=ba5bca862b9222a2651defc771449024d52fdf2a045b4bfb2f66b17390f5e432&";


  console.log("Loading Divra Client...");
  var divra = document.createElement("div");
  var divraRMB = document.createElement("p");
  var divraLMB = document.createElement("p");
  divra.innerHTML = "";
  var imgofme = document.createElement("img");
  imgofme.style.borderRadius = "2000px";
  imgofme.style.width = "20px";
  //vs code is the best
  imgofme.style.display = "inline-block";
  var cpsSee = document.createElement("p");
  cpsSee.innerHTML = " Cts: ";
  cpsSee.style.display = "inline-block";
  imgofme.draggable = false;
  divra.appendChild(cpsSee);
  imgofme.src = "https://yt3.ggpht.com/mMOtLjhx8Sdoyiq7y_KXN5QaYVam6cBDgs5E6hz2ZyPixhCTcjfUvCa4N74uXgwttUszsmI3Lg=s600-c-k-c0x00ffffff-no-rj-rp-mo";
  imgofme.alt = "BloxdMaster Logo";
  var brick = document.createElement("br");
  divra.appendChild(brick);
  document.getElementsByClassName("DiscordButtonDiv")[0].draggable = false;
  divraRMB.style.padding = "2px";
  divraRMB.innerHTML = "RMB ";
  divra.appendChild(divraLMB);
  divraRMB.style.borderStyle = "solid";

  divraRMB.style.display = "inline-block";
  divraRMB.style.marginLeft = "2px";

  function makedivra(vari, index) {
    let stuff = vari.innerHTML = index + " ";
    vari.style.display = "inline-block";
    vari.style.borderStyle = "solid";
    vari.style.padding = "2px";
    vari.style.marginLeft = "2px";

    return stuff;
  }
  var customizeThumb = document.createElement("span");
  var divraW = document.createElement("p");
  divra.appendChild(divraW);
  makedivra(divraW, "W");
  divraW.style.marginLeft = "2px";
  divraW.style.padding = "2px";
  var changeCrosshair = document.createElement("select");
  divraLMB.style.borderStyle = "solid";
  divraLMB.style.marginLeft = "2px";
  divraLMB.style.padding = "2px";
  divra.appendChild(divraRMB);
  var nothing = document.createElement("br");

  divraLMB.style.display = "inline-block"
  divraLMB.innerHTML = "LMB ";
  var divraA = document.createElement("p");
  divra.appendChild(nothing);
  divraA.style.marginLeft = "2px";
  var divraShift = document.createElement("p");
  divra.appendChild(divraShift);
  makedivra(divraShift, "Shift");
  divra.appendChild(divraA);
  divraA.style.borderStyle = "solid";
  divra.style.left = "2.5px";
  divraA.style.padding = "2px";
  divraA.innerHTML = "A ";
  divraA.style.display = "inline-block"
  var divraS = document.createElement("p");
  divra.appendChild(divraS);
  makedivra(divraS, "S");
  var divraD = document.createElement("p");
  divra.appendChild(divraD);
  makedivra(divraD, "D");
  var divraC = document.createElement("p");
  divra.appendChild(divraC);
  makedivra(divraC, "Crouch");
  var divraSpace = document.createElement("p");
  var brq = document.createElement("br");
  brq.style.margin = "0px,0px,0px,0px";
  divra.appendChild(brq);
  divra.appendChild(divraSpace);
  makedivra(divraSpace, "Space");
  divra.id = "divra";
  divra.style.position = "fixed";
  // document.getElementById("root").style.overflow= "hidden";
  divra.style.bottom = "0px";
  divra.style.zIndex = "3";
  divra.style.width = "15%";
  divra.style.height = "32.5%";

  var tpak = document.querySelector("#root > div.WholeAppWrapper > div > div.GameBackgroundScreen > div > div.SettingsMenuRight > div.SettingsTextDiv > input");
  divra.style.color = "white";
  divra.style.borderRadius = "10px";
  divra.style.padding = "5px";
  divra.style.border = "none";
  var hid = document.createElement("p");
  hid.appendChild(divra);
  divra.title = "divra client: and keys pressed.  There is a bug, that it won't show you keys pressed after more than 2-3 keys already pressed";
  var button_of_doom = document.createElement("button");
  button_of_doom.innerHTML = "<i class='fa-solid fa-power-off'></i> Turn divra off";
  button_of_doom.style.cursor = "pointer";
  hid.innerHTML = "hide";
  var againbr = document.createElement("br");
  divraButts.style.borderRadius = "50px";
  divraButts.style.padding = "7px";
  //divraButts.appendChild(button_of_doom);
  var chatin = document.querySelector("#root > div.WholeAppWrapper > div > div.TopLeftElements > div.Chat > div.ChatInputWrapper > input");
  button_of_doom.style.borderRadius = "10px";
  button_of_doom.style.backgroundColor = "rgb(222,222,222)";
  button_of_doom.style.border = "none";
  button_of_doom.style.padding = "5px";
  button_of_doom.style.cursor = "pointer";
  button_of_doom.tabIndex = "-1";
  button_of_doom.addEventListener("mouseover", () => {
    button_of_doom.style.transform = "scale(1.1)";
  });
  button_of_doom.addEventListener("mouseout", () => {
    button_of_doom.style.transform = "scale(1.0)";
  });
  button_of_doom.title = "Turn divra off. To turn back on, press ctrl + r.";

  button_of_doom.addEventListener("click", () => {
    divra.style.display = "none";
    divraButts.style.display = "none";
    document.getElementsByClassName("Title")[0].innerHTML = "Bloxd.io";
  });

  divra.addEventListener("mouseover", () => {
    divra.style.cursor = "auto";
  });
  document.getElementById("root").appendChild(divra);


  var divraSB;
  var keysElement = document.createElement("div");

  keysElement.style.display = "none";
  keysElement.style.zIndex = "50";
  keysElement.style.width = "100%";
  keysElement.style.height = "100%";
  keysElement.style.position = "fixed";
  keysElement.style.top = "0px";
  keysElement.style.right = "0px";
  var isChatTyping = false;
  document.getElementById("root").appendChild(keysElement);



  function keydown(eventis) {
    console.log(eventis);

    let ksey = eventis.key;

    //bluify = pro coder and copy cat rookie lvl
    //bloxdmaster= noob coder copy cat insaign lvl (and bluify has no idea abt that)
    if (ksey == "a" || ksey == "A") {
      console.log(eventis);
      divraA.style.backgroundColor = "black";
    }
    if (ksey == "s" || ksey == "s") {
      console.log(eventis);
      divraS.style.backgroundColor = "black";
    }
    if (ksey == "d" || ksey == "D") {
      console.log(eventis);
      divraD.style.backgroundColor = "black";
    }
    if (ksey == "w" || ksey == "W") {
      console.log(eventis);
      divraW.style.backgroundColor = "black";
    }
    if (ksey == "Shift") {
      console.log(eventis);
      divraShift.style.backgroundColor = "black";
    }
    if (ksey == "c" || ksey == "C") {
      console.log(eventis);
      divraC.style.backgroundColor = "black";
    }
    if (ksey == "z" || ksey == "Z") {
      console.log(eventis);
      divraC.style.backgroundColor = "black";
    }
    if (ksey == "<" || ksey == "Control") {
      console.log(eventis);
      divraC.style.backgroundColor = "black";
    }
    if (ksey == " " || ksey == "space") {
      console.log(eventis);
      divraSpace.style.backgroundColor = "black";
    }

  }
  var dseb = 0;
  console.log("code up to line number 375 has no issues");
  function okeyup(eventis) {
    let ksey = eventis.key;

    console.log(eventis + "okeyup");
    if (ksey == "x" || ksey == "X") {

      if (dseb == 1) {
        gbsw.click();

        if (document.getElementById("aas1")) {

          document.getElementById("aas1").remove();
          gbs.remove();
          customizeThumb.style.display = "block";
          thumbnailwrap.remove();
          dseb = 0;
          bads.remove();
          thumbnail1.remove();
          abis.remove();
          dseb = 0;
        }
      } else {

        console.log(dseb);
        dseb = 1;
        customizeThumb.click();
        togglePointerLock: !1;
      }

      console.log(eventis);

    }

    let key = eventis.key;

    if (key == "k") {

      timerstart.click();
    }




    if (key == "`") {
      bloxSS.click();
    }
    if (key == "j" || key == "J") {
      timerend.click();
    }




    if (key == "a" || key == "A") {
      divraA.style.background = "none";
    }
    if (key == "s" || key == "S") {
      divraS.style.background = "none";
    }
    if (key == "d" || key == "D") {
      divraD.style.background = "none";
    }
    if (key == "w" || key == "W") {
      divraW.style.background = "none";
    }
    if (key == "Shift") {
      divraShift.style.background = "none";
    }
    if (key == "c" || key == "C") {
      divraC.style.background = "none";
    }
    if (key.ctrlKey || key == "CapsLock") {
      divraC.style.background = "none";
    }
    if (key == " " || key == "space") {
      divraSpace.style.background = "none";
    }
    if (key == "z" || key == "Z") {
      divraC.style.background = "none";
    }
    if (key == "<" || key == "Control") {
      divraC.style.background = "none";
    }
    if (key == "o" || key == "Escape") {
      //<div class="SettingsSectionTitle">&nbsp;Graphics</div>
      /*  divraSB = document.createElement("div");
          divraSB.className="SettingsSectionTitle";
          divraSB.innerHTML="&nbsp;Divra Settings";
          divraSB.style.display="none";
          document.getElementsByClassName("SettingsCategoriesList")[0].appendChild(divraSB);
         */
      if (document.getElementsByClassName("SettingsExitButton")[0] != null) {
        document.getElementsByClassName("SettingsExitButton")[0].addEventListener("click", () => {

          mch = setInterval(makeCh, 1600);
        });
      }
      if (document.querySelector("#root > div.WholeAppWrapper > div > div.GameBackgroundScreen > div > div.SettingsMenuLeft.SmallTextBold > div.SettingsCategoriesList > div.SettingsSectionTitle.ActiveSettingsSectionTitle") != null) {
        document.querySelector("#root > div.WholeAppWrapper > div > div.GameBackgroundScreen > div > div.SettingsMenuLeft.SmallTextBold > div.SettingsCategoriesList > div.SettingsSectionTitle.ActiveSettingsSectionTitle").addEventListener("click", () => {
          document.querySelector("#root > div.WholeAppWrapper > div > div.GameBackgroundScreen > div > div.SettingsMenuRight > div.SettingsTextDiv > div > i").addEventListener("mouseover", () => {
            var texurl = document.querySelector("#root > div.WholeAppWrapper > div > div.GameBackgroundScreen > div > div.SettingsMenuRight > div.SettingsTextDiv > div > div > div.CircleInfoTooltip").textContent.slice(66, 89);
            console.log(texurl);
            document.querySelector("#root > div.WholeAppWrapper > div > div.GameBackgroundScreen > div > div.SettingsMenuRight > div.SettingsTextDiv > div > div > div.CircleInfoTooltip").innerHTML = "Clear for default. Requires page refresh to take effect. Example: <a href='" + texurl + "'>" + texurl + "</a>";
          });
        });
      }
      /* divraSB.addEventListener("click",()=>{
                  //dostuff
                  document.getElementsByClassName("SettingsSectionTitle")[0].classList.remove("ActiveSettingsSectionTitle");
                  document.getElementsByClassName("SettingsSectionTitle")[1].classList.remove("ActiveSettingsSectionTitle");
                  document.getElementsByClassName("SettingsSectionTitle")[2].classList.remove("ActiveSettingsSectionTitle");
                  document.getElementsByClassName("SettingsMenuRight")[0].innerHTML="";
                  divraSB.classList.add("ActiveSettingsSectionTitle");
                  var divraSB1_1 = document.createElement("div");
                  divraSB1_1.innerHTML=' <div class="CheckboxContainer"> <div class="CheckboxInputAndText"> <label class="CheckboxClickableLabel"> <span class="rc-checkbox rc-checkbox-checked"><input type="checkbox" class="rc-checkbox-input" value="" checked=""><span class="rc-checkbox-inner"></span></span></label><div class="CheckboxText">Show Coordinates</div></div></div>';
  
              });
  */
    }

  }
  document.body.addEventListener("keydown", keydown);

  document.body.addEventListener("keyup", okeyup);




  //mouse events
  /*  var canvasID = document.getElementById("noa-canvas");
  var YesNoCanvas =9;
  while(canvasID!=null&&YesNoCanvas==9){
      YesNoCanvas=1;
      keyse();
      console.log("wheiowhoisdi");
        //um
  }*/
  function makecpslower() {
    cps -= 1;
    if (cps == "-1" || cps == "-1.5") {
      cps = 0;
    }
    cpsSee.innerHTML = " Cts: " + cps;
    //console.log(cps);

  }
  var gbsw;
  var whatwascps = 1;

  function stopCps() {
    setTimeout(makecpslower, 250);

    //  console.log("lol");
    cps = 0;
    //  console.log("whatwascps"+whatwascps);

  }
  setInterval(stopCps, 1000);

  function moosedown(mouse) {
    if (mouse.button == 0) {
      divraLMB.style.backgroundColor = "black";
    } else if (mouse.button == 2) {
      divraRMB.style.backgroundColor = "black";

    }
  }
  document.body.addEventListener("mouseup", mooseup);
  document.body.addEventListener("mousedown", moosedown);
  function mooseup(moose) {
    if (moose.button == 0) {

      divraLMB.style.background = "none";
    } else if (moose.button == 2) {
      WriteOnBoardTextArea();
      divraRMB.style.background = "none";
    }
    cps += 1;
    cpsSee.innerHTML = " Cts: " + cps;

  }

  function WriteOnBoardTextArea() {
    if (document.getElementsByClassName("WriteOnBoardBg")[0] != null) {

      document.getElementById("root").removeEventListener("keyup", gamekeyup);

      document.getElementsByClassName("WriteOnBoardBg")[0].addEventListener("click", () => {

        document.getElementById("root").addEventListener("keyup", gamekeyup);

      });

    }
  }
  document.body.addEventListener("mouseup", mooseup);


  bloxSS.tabIndex = "-1";
  bloxSS.innerHTML = "Screenshot Mode";

  function changeFPS() {
    // console.log("lag laglalglaglalglalglalgalglalglalgget0fps0fpsfpspfpspfpsfojeoigjfoewihdfewiouhfoewi[]rsgl'wsdif[e'dsfewosd");
  }
  var changeFFF = document.createElement("button");
  changeFFF.textContent = "Lag Ur PC";
  changeFFF.tabIndex = "-1";
  changeFFF.style.display = "none";
  var lagfps = "yas";
  var option1CROSSHAIR = document.createElement("option");
  option1CROSSHAIR.disabled;


  changeFFF.style.borderRadius = "10px";
  changeFFF.style.backgroundColor = "rgb(222,222,222)";
  changeFFF.style.border = "none";
  changeFFF.style.padding = "5px";
  changeFFF.style.cursor = "pointer";
  changeFFF.addEventListener("mouseover", () => {
    changeFFF.style.transform = "scale(1.1)";
  });
  changeFFF.addEventListener("mouseout", () => {
    changeFFF.style.transform = "scale(1.0)";
  });

  changeFFF.addEventListener("click", () => {
    changeFFF.innerHTML = "Turn off the lag";
    if (changeFFF.innerHTML == "Lag Ur PC") {
      setInterval(changeFPS, 1);
    } else {
      lagfps = "nonoifenowienf";
      changeFFF.innerHTML = "Lag Ur PC";
    }
  });


  bloxSS.addEventListener("click", () => {
    if (bloxSS.innerHTML == "Screenshot Mode") {
      document.getElementById("root").style.display = "none";
      bloxSS.innerHTML = "Disable Screenshot Mode";
    } else {
      document.getElementById("root").style.display = "block";
      bloxSS.innerHTML = "Screenshot Mode";
    }
  });
  divraButts.appendChild(bloxSS);
  bloxSS.style.borderRadius = "10px";
  bloxSS.style.backgroundColor = "rgb(222,222,222)";
  bloxSS.style.border = "none";
  bloxSS.style.padding = "5px";
  bloxSS.style.cursor = "pointer";
  bloxSS.addEventListener("mouseover", () => {
    bloxSS.style.transform = "scale(1.1)";
  });
  bloxSS.addEventListener("mouseout", () => {
    bloxSS.style.transform = "scale(1.0)";
  });

  //  function getVoices() {aa
  //    let voices = .getVoscaices();
  // if (!voices.length) {aaaacsspeechSynthesis
  //     let utterance = new SpeechSynthesisUtterance("");
  //      speechSynthesis.speak(utterance);
  //      voices = speechSynthesis.getVoices();
  //  }
  //  return voices;
  // }

  function Cross(wth, innrH, val) {
    wth.innerHTML = innrH;
    wth.value = val;
    changeCrosshair.appendChild(wth);
  }

  //let utterance = new SpeechSynthesisUtterance("Welcome to divra client for bloxd.io!");
  //let speakData = new SpeechSynthesisUtterance();
  //speakData.voice = getVoices()[0];
  document.getElementById("root").appendChild(divraButts);
  var person;

  var lS = localStorage.getItem("Crosshair");

  console.log(lS + " localstoragecrosshairvalue");

  console.log(localStorage.getItem("Crosshair") + " localstoragecrosshairvalue");

  if (lS == null || lS == undefined) {
    localStorage.setItem("Crosshair", "+");
  } else {
    changeCrosshair.value = String(lS);

  }



  console.log(lS + " localstoragecrosshairvalue");
  changeCrosshair.addEventListener("change", () => {
    localStorage.setItem("Crosshair", changeCrosshair.value);
    console.log(localStorage.getItem("Crosshair") + " lcchvalue");
  });
  if (localStorage.getItem("crosswidth") == null || localStorage.getItem("crosswidth") == undefined) {
    console.log("crosshairwidth=undefinedawcrapnotagainihatewhenthishappens");
    localStorage.setItem("crosswidth", "1");
  }
  console.log("code up to line number 653 has no issues");
  function makeCh() {

    if (document.querySelector(".CrossHair")) {


      if (document.getElementsByClassName("CrossHair")[0].innerHTML == "+") {
        document.body.removeEventListener("keyup", okeyup);
        if (document.getElementById("noa-canvas")) {
          document.getElementById("noa-canvas").style.imageRendering = "auto";
        }
        if (localStorage.getItem("PBOF") == "Y") {

          document.getElementById("noa-canvas").style.imageRendering = "pixelated";

        } else if (localStorage.getItem("PBOF") == "N") {

          document.getElementById("noa-canvas").style.imageRendering = "auto";

        }

        document.body.addEventListener("keyup", gamekeyup);

        clearInterval(mch);
        customizeThumb.style.zIndex = "0";
        gbs.remove();
        divraButts.style.display = "none";
        document.querySelector(".CrossHair").style.width = localStorage.getItem("crosswidth") + 'px';
        document.querySelector(".CrossHair").style.height = localStorage.getItem("crosswidth") + "px";

        setInterval(croz, 1500);
      }


      if (changeCrosshair.value == 'sudiCrosshair') {

        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://lh3.googleusercontent.com/mfdjL6r1en6mWI3QVMnBbcSX-7QpgBE5EyXo0YbK6299QSJsi58GkfecyL0W7yYljK37vV6Mk7wD69QNdp8LiNw=s400)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == '+Crosshair') {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/JeJjZ9j.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";

      } else if (changeCrosshair.value == "poopCss") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/3784ppG.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "bala") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://www.google.com/s2/favicons?sz=64&domain=bloxd.io)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";

      } else if (changeCrosshair.value == "crosshair00") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/Y4Mxe1B.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair01") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/tbfd0eb.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair02") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/aFw5z9z.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair03") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/0M98QU7.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair04") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/96PGABg.pngg)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair05") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/lCutXr9.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair06") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/EHdo6Y9.png';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair07") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/6LFkbMH.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair08") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/IbSSS5T.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair09") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/NDpEANb.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair10") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/y9slq0w.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair11") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/Wp7FoBU.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair12") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/JC54ey0.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "crosshair13") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/B6NC0OG.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "rick") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://c.tenor.com/yheo1GGu3FwAAAAd/tenor.gif)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "P1") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/B29af1N.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "https://i.imgur.com/ggGTkhY.png") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/K1mBFTz.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "https://i.imgur.com/t0wxBxL.png") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/t0wxBxL.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "https://cdn.discordapp.com/attachments/1193362300745285713/1193362645571612762/crosshair.png?ex=65ac7092&is=6599fb92&hm=64ba4263fb1c1cfa3ea1e554d0a3acb9a67104ccc2a44f06a06fb2107daeb445&") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://cdn.discordapp.com/attachments/1193362300745285713/1193362645571612762/crosshair.png?ex=65ac7092&is=6599fb92&hm=64ba4263fb1c1cfa3ea1e554d0a3acb9a67104ccc2a44f06a06fb2107daeb445&)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "https://i.ibb.co/n8pFY3b/arYc1V6.png") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.ibb.co/n8pFY3b/arYc1V6.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "https://i.imgur.com/OwwsiPH.png") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/OwwsiPH.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else if (changeCrosshair.value == "https://i.imgur.com/J6BMKcj.png") {
        document.getElementsByClassName("CrossHair")[0].innerHTML = "";
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'url(https://i.imgur.com/J6BMKcj.png)';
        document.getElementsByClassName("CrossHair")[0].style.backgroundRepeat = "no-repeat";
        document.getElementsByClassName("CrossHair")[0].style.backgroundSize = "contain";
      } else {
        document.getElementsByClassName("CrossHair")[0].innerHTML = changeCrosshair.value;
        document.getElementsByClassName("CrossHair")[0].style.backgroundImage = 'none';
      }


      localStorage.setItem("Crosshair", changeCrosshair.value);
    }
  }
  console.log("code up to line number 817 has no issues");


  function gamekeyup(eventis) {
    console.log(document.getElementsByClassName("ChatInput")[0].value);
    if (document.getElementsByClassName("ChatInput")[0].value == "") {
      console.log("gkuac");
      okeyup(eventis);
      var kley = eventis;

      if (kley == "t" || kley == "T") {
        console.log("ASDFSADFASDGSDAGSDAFDSAGSDAFSDAsdlfkjsdlakhgsdlkagjsdljfsladkglksdhfslkdaghdkas;lfjdskalghfdskaljfgdskajgfkwejgsdfiudsgwudkf");
        document.body.removeEventListener("keyup", gamekeyup);
        console.log("chattingaleewrt");
        if (kley == "Enter") {
          console.log("chattingalgoawyosadifusadofhjsdklafjsadkljeweewrt");
          document.body.addEventListener("keyup", gamekeyup);

        }
      }

      if (kley == "b" || kley == "B") {
        if (divra.style.display == "none") {
          divra.style.display = "block";
        } else if (divra.style.display == "block") {
          divra.style.display = "none";
        }
      }

      if (kley == "x" || kley == "X") {
        if (dseb == 1) {
          gbsw.click();
          document.getElementById("root").dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Tab' }));
          document.getElementById("DivrraSettingsExitButton").click();
          if (document.getElementById("aas1")) {
            document.getElementById("aas1").remove();
            gbs.remove();
            customizeThumb.style.display = "block";
            thumbnailwrap.remove();
            dseb = 0;
            bads.remove();
            thumbnail1.remove();
            abis.remove();
            dseb = 0;
            document.getElementById("root").dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Tab' }));
          }
        } else {
          exitPointerLock();
          console.log(dseb);
          dseb = 1;
          customizeThumb.click();
          togglePointerLock: !1;
        }

        console.log(eventis);



      }

      if (kley == "Enter") {
        document.body.removeEventListener("keyup", gamekeyup);
        if (kley == "Enter") {
          document.body.addEventListener("keyup", gamekeyup);

        }
      }
      if (kley == "e" || kley == "E") {
        WriteOnBoardTextArea();
      }
    }
  }





  changeCrosshair.stabIndex = "-1";
  changeCrosshair.innerHTML = "Change Crosshair";
  divraButts.appendChild(changeCrosshair);
  changeCrosshair.style.width = "90px";
  option1CROSSHAIR.value = "+";
  option1CROSSHAIR.innerHTML = "+";
  var option2CROSSHAIR = document.createElement("option");
  var noCrosshair = document.createElement("option");
  noCrosshair.innerHTML = "No Crosshair";
  noCrosshair.value = "";
  option2CROSSHAIR.innerHTML = "⋅";
  option2CROSSHAIR.value = "⋅";
  changeCrosshair.appendChild(option1CROSSHAIR);
  changeCrosshair.appendChild(option2CROSSHAIR);
  var option3CROSSHAIR = document.createElement("option");
  option3CROSSHAIR.innerHTML = "⮿";
  option3CROSSHAIR.value = "⮿";
  changeCrosshair.appendChild(option3CROSSHAIR);
  var option4CROSSHAIR = document.createElement("option");
  option4CROSSHAIR.innerHTML = "⊡";
  option4CROSSHAIR.value = "⊡";
  changeCrosshair.appendChild(option4CROSSHAIR);
  console.log("code up to line number 897 has no issues");
  var option5CROSSHAIR = document.createElement("option");
  option5CROSSHAIR.innerHTML = "+";
  option5CROSSHAIR.value = "+";
  changeCrosshair.appendChild(option5CROSSHAIR);

  var option6CROSSHAIR = document.createElement("option");
  option6CROSSHAIR.innerHTML = "⚹";
  option6CROSSHAIR.value = "⚹";
  changeCrosshair.appendChild(option6CROSSHAIR);

  var option7CROSSHAIR = document.createElement("option");
  option7CROSSHAIR.innerHTML = "×";
  option7CROSSHAIR.value = "×";
  changeCrosshair.appendChild(option7CROSSHAIR);

  var option8CROSSHAIR = document.createElement("option");
  option8CROSSHAIR.innerHTML = "🔥";
  option8CROSSHAIR.value = "🔥";
  changeCrosshair.appendChild(option8CROSSHAIR);
  var crosshair123 = document.createElement("option");
  Cross(crosshair123, "🐢", "🐢");
  var crosshair1234 = document.createElement("button");
  Cross(crosshair1234, "⯄", "⯄");
  var suckmaglazz = document.createElement("option");
  Cross(suckmaglazz, "⛒", "⛒");
  var suckmaglaazz = document.createElement("option");
  Cross(suckmaglaazz, "❄", "❄");
  var suckmaglaazez = document.createElement("option");
  Cross(suckmaglaazez, "🎄", "🎄");
  var suckmaeglaazez = document.createElement("option");
  Cross(suckmaeglaazez, "🥚", "🥚");
  var suckmaegleaazez = document.createElement("option");
  Cross(suckmaegleaazez, "🏖", "🏖");
  var suckmaegleeaazez = document.createElement("option");
  Cross(suckmaegleeaazez, "🎃", "🎃");
  var suckemagleeazz = document.createElement("option");
  Cross(suckemagleeazz, "💿", "💿");

  var suckeemaglazz = document.createElement("option");
  Cross(suckeemaglazz, "🫥", "🫥");

  var suckeeemaglazz = document.createElement("option");
  Cross(suckeeemaglazz, "🍎", "🍎");

  var suckeeeemaglazz = document.createElement("option");
  Cross(suckeeeemaglazz, "🥔", "🥔");
  var suckeeeeemaglazz = document.createElement("option");
  Cross(suckeeeeemaglazz, "🫐", "🫐");
  var suckeeeeeemaglazz = document.createElement("option");
  Cross(suckeeeeeemaglazz, "🥕", "🥕");
  var option9CROSSHAIR = document.createElement("option");
  option9CROSSHAIR.innerHTML = "⛶";
  option9CROSSHAIR.value = "⛶";
  changeCrosshair.appendChild(option9CROSSHAIR);

  var option10CROSSHAIR = document.createElement("option");
  option10CROSSHAIR.innerHTML = "⚔";
  option10CROSSHAIR.value = "⚔";
  changeCrosshair.appendChild(option10CROSSHAIR);
  var sacrelabeu = document.createElement("option");
  sacrelabeu.value = "MOM STINKS";
  sacrelabeu.value = "{⋅}";
  sacrelabeu.innerHTML = "{⋅}";
  changeCrosshair.appendChild(sacrelabeu);
  var option11CROSSHAIR = document.createElement("option");
  option11CROSSHAIR.innerHTML = "▪";
  option11CROSSHAIR.value = "▪";
  changeCrosshair.appendChild(option11CROSSHAIR);

  var option12CROSSHAIR = document.createElement("option");
  option12CROSSHAIR.innerHTML = "💎";
  option12CROSSHAIR.value = "💎";
  changeCrosshair.appendChild(option12CROSSHAIR);

  var option13CROSSHAIR = document.createElement("option");
  option13CROSSHAIR.innerHTML = "�";
  option13CROSSHAIR.value = "�";
  changeCrosshair.appendChild(option13CROSSHAIR);

  var option14CROSSHAIR = document.createElement("option");
  option14CROSSHAIR.innerHTML = "🎮";
  option14CROSSHAIR.value = "🎮";
  changeCrosshair.appendChild(option14CROSSHAIR);

  var option15CROSSHAIR = document.createElement("option");
  option15CROSSHAIR.innerHTML = "(⋅)";
  option15CROSSHAIR.value = "(⋅)";
  changeCrosshair.appendChild(option15CROSSHAIR);

  var option16CROSSHAIR = document.createElement("option");
  option16CROSSHAIR.innerHTML = "🎯";
  option16CROSSHAIR.value = "🎯";
  changeCrosshair.appendChild(option16CROSSHAIR);
  var option17CROSSHAIR = document.createElement("option");
  option17CROSSHAIR.innerHTML = "○";
  option17CROSSHAIR.value = "○";
  changeCrosshair.appendChild(option17CROSSHAIR);
  option17CROSSHAIR.disabled = false;
  var option18CROSSHAIR = document.createElement("option");
  option18CROSSHAIR.innerHTML = "Ultimate Crosshair";
  option18CROSSHAIR.value = "+Crosshair";
  changeCrosshair.appendChild(option18CROSSHAIR);
  var option19CROSSHAIR = document.createElement("option");
  option19CROSSHAIR.innerHTML = "Terrible Crosshair";
  option19CROSSHAIR.value = "poopCss";
  changeCrosshair.appendChild(option19CROSSHAIR);

  var option20CROSSHAIR = document.createElement("option");
  option20CROSSHAIR.innerHTML = "No crosshair";
  option20CROSSHAIR.value = "";
  changeCrosshair.appendChild(noCrosshair);
  var option21CROSSHAIR = document.createElement("option");
  Cross(option21CROSSHAIR, "Bloxd.io Icon", "bala");
  var crosshair00 = document.createElement("option");
  Cross(crosshair00, "X with a +", "crosshair00");
  var crosshair01 = document.createElement("option");
  Cross(crosshair01, "X with a hole in the middle", "crosshair01");
  var crosshair02 = document.createElement("option");
  Cross(crosshair02, "+ with a big hole in the middle", "crosshair02");
  var crosshair03 = document.createElement("option");
  Cross(crosshair03, "+ with a small hole in the middle", "crosshair03");
  var crosshair04 = document.createElement("option");
  Cross(crosshair04, "Idk what this is", "crosshair04");
  var crosshair05 = document.createElement("option");
  Cross(crosshair05, "Patterned Cross", "crosshair05");
  var crosshair06 = document.createElement("option");
  Cross(crosshair06, "Circle in a Square", "crosshair06");
  var crosshair07 = document.createElement("option");
  Cross(crosshair07, "⬛", "crosshair07");
  var crosshair08 = document.createElement("option");
  Cross(crosshair08, "🟥", "crosshair08");
  var crosshair09 = document.createElement("option");
  Cross(crosshair09, "🟧", "crosshair09");
  var crosshair10 = document.createElement("option");
  Cross(crosshair10, "🟨", "crosshair10");
  var crosshair11 = document.createElement("option");
  Cross(crosshair11, "🟩", "crosshair11");
  var crosshair12 = document.createElement("option");
  Cross(crosshair12, "🟦", "crosshair12");
  var crosshair13 = document.createElement("option");
  Cross(crosshair13, "🟪", "crosshair13");
  var crosshair14 = document.createElement("option");
  Cross(crosshair14, "𖣓", "𖣓");
  var ickroll = document.createElement("option");
  Cross(ickroll, "G.O.A.T", "rick");
  var holePlus = document.createElement("option");
  Cross(holePlus, "Pro Crosshair 1", "P1");
  var P2 = document.createElement("option");
  Cross(P2, "Pro Crosshair 2", "https://i.imgur.com/ggGTkhY.png");
  var p3 = document.createElement("option");
  Cross(p3, "Pro Crosshair 3", "https://i.imgur.com/t0wxBxL.png");
  var p4 = document.createElement("option");
  Cross(p4, "Pro Crosshair 4", "https://i.imgur.com/OwwsiPH.png");
  var p5 = document.createElement("option");
  Cross(p5, "Pro Crosshair 5", "https://i.ibb.co/n8pFY3b/arYc1V6.png");
  var p6 = document.createElement("option");
  Cross(p6, "Pro Crosshair 6", "https://i.imgur.com/J6BMKcj.png");
  var Blxm = document.createElement("option");
  //Cross(Blxm,"BloxdMaster's Crosshair" , "https://cdn.discordapp.com/attachments/1193362300745285713/1193362645571612762/crosshair.png?ex=65ac7092&is=6599fb92&hm=64ba4263fb1c1cfa3ea1e554d0a3acb9a67104ccc2a44f06a06fb2107daeb445&");
  Blxm.disabled = true;


console.log("DivraClientisthebest");

  changeCrosshair.addEventListener("mouseover", () => {
    changeCrosshair.style.transform = "scale(1.1)";
  });
  changeCrosshair.addEventListener("mouseout", () => {
    changeCrosshair.style.transform = "scale(1.0)";
  });
  changeCrosshair.style.borderRadius = "10px";
  changeCrosshair.style.backgroundColor = "rgb(222,222,222)";
  changeCrosshair.style.border = "none";
  changeCrosshair.style.padding = "5px";
  changeCrosshair.style.cursor = "pointer";

  var vuiewRulz = document.createElement("button");
  vuiewRulz.innerHTML = "View Bloxd Rules";
  divraButts.appendChild(vuiewRulz);
  vuiewRulz.style.borderRadius = "10px";
  vuiewRulz.style.backgroundColor = "rgb(222,222,222)";
  vuiewRulz.style.border = "none";
  vuiewRulz.style.padding = "5px";
  vuiewRulz.style.cursor = "pointer";
  vuiewRulz.addEventListener("mouseover", () => {
    vuiewRulz.style.transform = "scale(1.1)";
  });
  vuiewRulz.addEventListener("mouseout", () => {
    vuiewRulz.style.transform = "scale(1.0)";
  });
  vuiewRulz.tabIndex = "-1";
  vuiewRulz.addEventListener("click", () => {
    alert("1. Be respectful of others. \n\n2. Don't harass or bully other players. \n\n3. Discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation, or disabilities) is not allowed. \n\n4. Cursing is not allowed, so do not try to avoid the swear filter. \n\n5. Spamming is not allowed in any form whatsoever. \n\n6. Do not try to post any links in game, it doesn't normally allow you to do so for that reason. \n\n7. Don't do anything NSFW related or sexually suggestive. \n\n8. Online dating is not allowed. \n\n9. Don't use any offensive/inappropriate names. \n\n10. Don't impersonate any staff or developers. This can include players if the player is clearly trying to impersonate you. \n\n11. Hacking/Cheating/Autoclicking is strictly against the rules, don't try it. \n\n12. Advocating for or encouraging any of the above rule breaking is not allowed.")
  });
  vuiewRulz.style.zIndex = "-1";
  document.getElementsByClassName("DiscordButtonDiv").tabIndex = "-1";

  function hotbarG(abs) {
    document.getElementsByClassName("item ")[abs].style.borderRadius = "1000px";
    document.getElementsByClassName("item ")[abs].style.padding = "2.5px";
    document.getElementsByClassName("item ")[abs].style.backgroundColor = "gray";
    document.getElementsByClassName("item ")[abs].style.border = "none";
    //document.getElementsByClassName("item ")[abs].innerHTML=abs+1;


  }
  //  changeCrosshair.addEventListener("click",()=>{
  //     crosshairChange();
  //     console.log("changedCROSSHAIRRRRRR");
  //  });
  divraButts.style.opacity = "0.7";

  function makerespawn() {

    if (document.getElementsByClassName("RespawnButton")[0].innerHTML == "Auto Respawning in 2 Seconds") {
      document.getElementsByClassName("RespawnButton")[0].click();
      //console.log("autoRespawned");
    } else { //what?
      // console.log("No Autorespan Dectected");
    }
  }
  console.log("code up to line number 1118 has no issues");
  //<i class="fa-solid fa-gear"></i>
  //document.getElementsByClassName("TopRightElements")[0].style.display="none";
  // document.getElementsByClassName("HomeScreenBottomRight")[0].style.display="none";
  console.log("thumbnaills" + localStorage.getItem("thumbnail"));
  var settingzSEL = document.createElement("button");
  settingzSEL.title = "Divra Settings";
  settingzSEL.innerHTML = " <i class='fa-solid fa-gear'></i> ";
  settingzSEL.style.borderRadius = "10px";
  settingzSEL.style.backgroundColor = "rgb(222,222,222)";
  settingzSEL.tabIndex = "-1";
  settingzSEL.style.border = "none";
  settingzSEL.style.padding = "5px";
  settingzSEL.style.cursor = "pointer";
  settingzSEL.addEventListener("mouseover", () => {
    settingzSEL.style.transform = "scale(1.1)";
  });
  settingzSEL.addEventListener("mouseout", () => {
    settingzSEL.style.transform = "scale(1.0)";
  });
  var chHot = document.createElement("button");
  chHot.innerHTML = "Change Hotbar (Only works if you are in a game)";
  chHot.tabIndex = "-1";

  function ButtsG(chHote, tit, stu) {
    chHote.title = tit;
    chHote.innerHTML = stu;
    chHote.style.borderRadius = "10px";
    chHote.style.backgroundColor = "rgb(222,222,222)";
    chHote.style.border = "none";
    chHote.style.padding = "5px";
    chHote.style.cursor = "pointer";
    chHote.addEventListener("mouseover", () => {
      chHote.style.transform = "scale(1.1)";
    });
    chHote.addEventListener("mouseout", () => {
      chHote.style.transform = "scale(1.0)";
    });
  }
  ButtsG(chHot, "Change Your Hotbar to something more interesting", "Change Hotbar (Only works if you are in a game)");
  chHot.addEventListener("click", () => {
    hotbarG(0);
    hotbarG(1);
    hotbarG(2);
    hotbarG(3);
    hotbarG(4);
    hotbarG(5);
    hotbarG(6);
    hotbarG(7);
    hotbarG(8);
    hotbarG(9);

  });
  divraButts.appendChild(chHot);
  /* var setn;
  settingzSEL.addEventListener("click",()=>{
    if(setin1==0){
        setn= document.createElement("div");
  setn.style.display="none";
  var setin1 = 0;
  setn.style.opacity="0.9";
  setn.zIndex="5";
  setn.style.position="fixed";
  // setn.style.textAlign="center";
  setn.style.top="50px";
  setn.style.left="50px";
  setn.style.width="60%";
  setn.style.height="60%";
  setn.style.backgroundColor="rgb(75,75,75)";
        setn.style.display="block";
        document.getElementById("root").style.filter="brightness(50%)";
        setin1=1;
    }else{
        document.getElementById("root").style.filter="brightness(100%)";
       setn.remove();
        setin1=0;
    }
  });
  document.body.appendChild(setn);
   
  divraButts.appendChild(settingzSEL);
  */




  //google translate

  //function googleTranslateElementInit() {
  //new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  //}
  //setTimeout(googleTranslateElementInit,100);

  var subz = document.createElement("img");
  subz.style.height = "80px";
  subz.style.width = "300px";

  subz.style.zIndex = "3";
  document.getElementById("root").appendChild(subz);
  subz.id = "subs 2";

  subz.style.position = "fixed";
  subz.style.bottom = "0";
  subz.style.right = "0";
  subz.style.border = "none";
  subz.draggable = false;

  subz.style.opacity = "0.99";
  //subz.style.cursor="pointer";
  subz.src = "https://i.imgur.com/YlEhqT1.png";
  var subs = document.createElement("iframe");
  var conyt = document.createElement("button");
  var subsHid = document.createElement("div");

  subz.style.zIndex = "-1";
  subs.id = "subs1";
  var channelID = document.createElement("input");
  channelID.placeholder = "Youtube Channel Id";
  channelID.style.borderRadius = "20px";
  channelID.style.padding = "2.5px";
  divraButts.appendChild(channelID);
  channelID.style.backgroundColor = "white";
  channelID.style.opacity = "1";
  channelID.value = "";
  channelID.style.border = "1.5px solid gray";
  channelID.tabIndex = "-1";
  let year = d.getFullYear();
  let hour = d.getHours() + 3;

  function BloxdmasterSubs() {
    if (subs.style.zIndex == "-1") {
      subs.style.zIndex = "91";
      subz.style.zIndex = "-1";
    } else {
      subz.style.zIndex = "91";
      subs.style.zIndex = "-9";
    }
  }
  // subs.style.borderRadius="1000px";
  channelID.autocomplete = "UCwEbSFbb4e7-XbAlcgmuTVw";
  var Bigsmall = document.createElement("input");
  Bigsmall.type = "range";
  Bigsmall.max = "3";
  Bigsmall.style.width = "35px";
  Bigsmall.min = "1";

  channelID.addEventListener("keyup", (kpoop) => {
    if (kpoop.key == "Enter") {
      if (channelID.value == "blxm") {
        name();
        //changeCrosshair.value = "https://cdn.discordapp.com/attachments/1164211645145419836/1200316119412637767/4procrossahairv1.png?ex=65c5bc7f&is=65b3477f&hm=7d20af03f0099c27cc35b3cb8f9a3352032c3b29df13c42f652f2abc3cfa92a1&";
        subs.style.zIndex = "4";

        subs.src = "https://livecounts.io/embed/youtube-live-subscriber-counter/UCwEbSFbb4e7-XbAlcgmuTVw";

        channelID.style.display = "none";
      } else {
        subs.style.zIndex = "4";
        subs.src = "https://livecounts.io/embed/youtube-live-subscriber-counter/" + channelID.value;
        channelID.style.display = "none";
      }

    }
  });
  subs.style.height = "80px";
  subsHid.style.height = "80px";
  subs.style.width = "300px";
  subsHid.style.width = "300px";
  subs.frameborder = "0";
  subs.style.zIndex = "-4";
  document.getElementById("root").appendChild(subs);
  // document.getElementById("root").appendChild(subsHid);
  subsHid.position = "fixed";
  subsHid.style.bottom = "0";
  subsHid.style.zIndex = "3";
  subsHid.style.border = "none";
  subsHid.style.backgroundColor = "white";
  subsHid.style.right = "0";
  subs.style.position = "fixed";
  subs.style.bottom = "0";
  subs.style.right = "0";
  subs.style.border = "none";
  subs.draggable = false;

  subs.style.opacity = "0.75";
  subs.style.cursor = "pointer";
  var brithtnez = document.createElement("input");
  brithtnez.type = "range";
  brithtnez.max = "200";
  brithtnez.min = "10";

  divraButts.appendChild(brithtnez);

  function brit() {
    document.getElementById("noa-canvas").style.filter = "brightness(0%)";
    if (brithtnez.value > 200) {
      document.getElementById("noa-canvas").style.filter = "brightness(200%)";
    } else if (brithtnez.value < 180 && brithtnez.value > 160) {
      document.getElementById("noa-canvas").style.filter = "brightness(180%)";
    } else if (brithtnez.value > 160 && brithtnez.value > 140) {
      document.getElementById("noa-canvas").style.filter = "brightness(160%)";
    } else if (brithtnez.value < 140 && brithtnez.value > 120) {
      document.getElementById("noa-canvas").style.filter = "brightness(140%)";
    } else if (brithtnez.value < 120 && brithtnez.value > 100) {
      document.getElementById("noa-canvas").style.filter = "brightness(120%)";
    } else if (brithtnez.value < 100 && brithtnez.value > 90) {
      document.getElementById("noa-canvas").style.filter = "brightness(100%)";
    } else if (brithtnez.value < 90 && brithtnez.value > 70) {
      document.getElementById("noa-canvas").style.filter = "brightness(80%)";
    } else if (brithtnez.value < 70 && brithtnez.value > 50) {
      document.getElementById("noa-canvas").style.filter = "brightness(60%)";
    } else if (brithtnez.value < 50 && brithtnez.value > 30) {
      document.getElementById("noa-canvas").style.filter = "brightness(40%)";
    } else if (brithtnez.value < 30 && brithtnez.value > 10) {
      document.getElementById("noa-canvas").style.filter = "brightness(20%)";
    } else if (brithtnez.value < 10 && brithtnez.value > 0) {
      document.getElementById("noa-canvas").style.filter = "brightness(0%)";
    }
    console.log(brithtnez.value);
    console.log(document.getElementById("noa-canvas").style.filter);
  }
  brithtnez.addEventListener("change", brit);




  var ebrithtnez = document.createElement("input");
  ebrithtnez.type = "range";
  ebrithtnez.max = "200";
  ebrithtnez.min = "10";
  ebrithtnez.value = "100";
  brithtnez.value = "100";
  divraButts.appendChild(ebrithtnez);
  console.log("code up to line number 1356 has no issues");
  function ebrit() {
    document.getElementById("noa-canvas").style.filter = "contrast(0%)";
    if (ebrithtnez.value > 200) {
      document.getElementById("noa-canvas").style.filter = "contrast(200%)";
    } else if (ebrithtnez.value < 180 && ebrithtnez.value > 160) {
      document.getElementById("noa-canvas").style.filter = "contrast(180%)";
    } else if (ebrithtnez.value > 160 && ebrithtnez.value > 140) {
      document.getElementById("noa-canvas").style.filter = "contrast(160%)";
    } else if (ebrithtnez.value < 140 && ebrithtnez.value > 120) {
      document.getElementById("noa-canvas").style.filter = "contrast(140%)";
    } else if (ebrithtnez.value < 120 && ebrithtnez.value > 100) {
      document.getElementById("noa-canvas").style.filter = "contrast(120%)";
    } else if (ebrithtnez.value < 100 && ebrithtnez.value > 90) {
      document.getElementById("noa-canvas").style.filter = "contrast(100%)";
    } else if (ebrithtnez.value < 90 && ebrithtnez.value > 70) {
      document.getElementById("noa-canvas").style.filter = "contrast(80%)";
    } else if (ebrithtnez.value < 70 && ebrithtnez.value > 50) {
      document.getElementById("noa-canvas").style.filter = "contrast(60%)";
    } else if (ebrithtnez.value < 50 && ebrithtnez.value > 30) {
      document.getElementById("noa-canvas").style.filter = "contrast(40%)";
    } else if (ebrithtnez.value < 30 && ebrithtnez.value > 10) {
      document.getElementById("noa-canvas").style.filter = "contrast(20%)";
    } else if (ebrithtnez.value < 10 && ebrithtnez.value > 0) {
      document.getElementById("noa-canvas").style.filter = "contrast(0%)";
    }
    // console.log(ebrithtnez.value);
    //  console.log(document.getElementById("noa-canvas").style.filter);
  }
  ebrithtnez.addEventListener("change", ebrit);
  var butCheekz = document.createElement("button");
  var noChat = document.getElementsByClassName("Chat")
  butCheekz.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
  butCheekz.title = "Hide Divra Buttons";
  butCheekz.style.borderRadius = "10px";
  butCheekz.style.backgroundColor = "rgb(222,222,222)";
  butCheekz.style.border = "none";
  butCheekz.style.padding = "5px";
  butCheekz.style.cursor = "pointer";
  butCheekz.addEventListener("mouseover", () => {
    butCheekz.style.transform = "scale(1.1)";
  });
  butCheekz.addEventListener("mouseout", () => {
    butCheekz.style.transform = "scale(1.0)";
  });
  divraButts.appendChild(butCheekz);
  butCheekz.addEventListener("click", () => {
    divraButts.style.display = "none";
    butCheekz.style.display = "block";

  });
  divraButts.appendChild(timerstart);
  timerstart.innerHTML = "Start Timer";

  timerend.innerHTML = "Pause Timer";

  divraButts.appendChild(timerend);
  var timer = document.createElement("p");
  divra.appendChild(timer);
  var hr = document.createElement("span");
  timer.appendChild(hr);
  var mr = document.createElement("span");
  timer.appendChild(mr);
  var sr = document.createElement("span");
  timer.appendChild(sr);
  var timr;
  var thr = 0;
  var tmr = 0;
  var tsr = 0;

  function timrs() {

    tsr++;
    hr.innerHTML = String(thr) + ":";
    mr.innerHTML = String(tmr) + ":";
    sr.innerHTML = String(tsr);
    if (tsr < 10) {
      sr.innerHTML = "0" + tsr;
    }
    if (tmr < 10) {
      mr.innerHTML = "0" + tmr + ":";
    }
    if (thr < 10) {
      hr.innerHTML = "0" + thr + ":";
    }
    if (tsr > 59) {
      tmr++;
      tsr = 0;
      hr.innerHTML = String(thr) + ":";
      mr.innerHTML = String(tmr) + ":";
    } else if (tmr == 60) {
      thr++;
      tmr = 0;
      hr.innerHTML = String(thr) + ":";

    }



    // console.log(tsr);

  }
  timerstart.addEventListener("click", () => {
    clearInterval(timr);
    timr = setInterval(timrs, 1000)
  });
  timerend.addEventListener("click", () => {
    clearInterval(timr);
  });

  timerstart.style.borderRadius = "10px";
  timerstart.style.backgroundColor = "rgb(222,222,222)";
  timerstart.style.border = "none";
  timerstart.style.padding = "5px";
  timerstart.style.cursor = "pointer";
  timerstart.addEventListener("mouseover", () => {
    timerstart.style.transform = "scale(1.1)";
  });
  timerstart.addEventListener("mouseout", () => {
    timerstart.style.transform = "scale(1.0)";
  });
  function thdv1(Num, hrefx) {
    document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(" + Num + ") > img").src = hrefx;
  }

  timerend.style.borderRadius = "10px";
  timerend.style.backgroundColor = "rgb(222,222,222)";
  timerend.style.border = "none";
  timerend.style.padding = "5px";
  timerend.style.cursor = "pointer";
  timerend.addEventListener("mouseover", () => {
    timerend.style.transform = "scale(1.1)";
  });
  timerend.addEventListener("mouseout", () => {
    timerend.style.transform = "scale(1.0)";
  });




  //Cursor Change
  var cursor = document.createElement("button");
  cursor.innerHTML = "Change Cursor";
  cursor.style.borderRadius = "10px";
  cursor.style.backgroundColor = "rgb(222,222,222)";
  cursor.style.border = "none";
  cursor.style.padding = "5px";
  cursor.style.cursor = "url(https://technopro-bloxd.w3spaces.com/Def.png), auto";
  cursor.addEventListener("click", () => {
    document.style.cursor = "url(https://technopro-bloxd.w3spaces.com/Def.png), auto, pointer";
  });
  Bigsmall.addEventListener("change", () => {
    if (Bigsmall.value == "1") {
      divra.style.width = "7%";
      divra.style.fontSize = "0.4em";
      divra.style.height = "15.75%";
    } else if (Bigsmall.value == "2") {
      divra.style.width = "11%";
      divra.style.fontSize = "0.6em";
      divra.style.height = "23%";
    } else if (Bigsmall.value == "3") {
      divra.style.width = "15%";
      divra.style.height = "32.5%";
      divra.style.fontSize = "1em";
    }
  });

  cursor.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(1.1)";
  });
  cursor.addEventListener("mouseout", () => {
    cursor.style.transform = "scale(1.0)";
  });
  // divraButts.appendChild(cursor);
  var reTimer = document.createElement("button");
  reTimer.innerHTML = 'Reset Timer';
  reTimer.style.borderRadius = "10px";
  reTimer.style.backgroundColor = "rgb(222,222,222)";
  reTimer.style.border = "none";
  reTimer.style.padding = "5px";

  reTimer.addEventListener("click", () => {
    thr = 0;
    tmr = 0;
    tsr = 0;
    clearInterval(timr);
    hr.innerHTML = "00:";
    mr.innerHTML = "00:";
    sr.innerHTML = "00";
  });
  divraButts.appendChild(reTimer);
  reTimer.style.cursor = "pointer";
  reTimer.addEventListener("mouseover", () => {
    reTimer.style.transform = "scale(1.1)";
  });
  reTimer.addEventListener("mouseout", () => {
    reTimer.style.transform = "scale(1.0)";
  });
  var DevLOG = document.createElement("button");
  DevLOG.style.display = "none";
  DevLOG.innerHTML = "View Bloxd Dev Log";
  DevLOG.style.borderRadius = "10px";
  DevLOG.style.backgroundColor = "rgb(222,222,222)";
  DevLOG.style.border = "none";
  DevLOG.style.padding = "5px";
  DevLOG.style.cursor = "pointer";
  console.log("code up to line number 1560 has no issues");
  DevLOG.addEventListener("click", () => {
    window.open("https://technopro-bloxd.w3spaces.com/game/devlog.txt");
  });
  DevLOG.addEventListener("mouseover", () => {
    DevLOG.style.transform = "scale(1.1)";
  });
  DevLOG.addEventListener("mouseout", () => {
    DevLOG.style.transform = "scale(1.0)";
  });
  var los = "Divra";
  divraButts.appendChild(DevLOG);
  var record = document.createElement("a");
  record.innerHTML = "Record";
  record.style.borderRadius = "10px";
  record.style.backgroundColor = "rgb(222,222,222)";
  record.style.border = "none";
  record.style.padding = "5px";
  record.style.cursor = "pointer";
  record.href = "https://www.apowersoft.com/free-online-screen-recorder?from=ap-chrome-plugin";
  record.target = "_blank";
  record.addEventListener("mouseover", () => {
    record.style.transform = "scale(1.1)";
  });
  record.addEventListener("mouseout", () => {
    record.style.transform = "scale(1.0)";
  });
  record.style.textDecoration = "none";

  customizeThumb.innerHTML = "Divra Settings"
  //document.querySelector("#root > div.WholeAppWrapper > div > div.HomeScreenBottomRight").appendChild(customizeThumb);
  // document.querySelector("#root > div.WholeAppWrapper > div > img").style.zIndex="0.9px";
  document.querySelector("#root > div.WholeAppWrapper > div > div.HomeScreenBottomRight").insertBefore(customizeThumb, document.querySelector("#root > div.WholeAppWrapper > div > div.HomeScreenBottomRight > a:nth-child(1)"));
  customizeThumb.style.filter = "drop-shadow(233px 233px 29px gray)";
  customizeThumb.style.zIndex = "314159";


  customizeThumb.style.borderRadius = "5000px";
  customizeThumb.border = "none";

  // customizeThumb.style.backgroundColor = "#3392ff";
  customizeThumb.style.cursor = "pointer";
  customizeThumb.style.border = "none";
  customizeThumb.style.padding = "1px";
  customizeThumb.style.color = "white";
  customizeThumb.className = "SmallTextLight BottomRightClickableBloxdInfo";
  divra.className = "SmallTextLight";
  console.log("code up to line number 1604 has no issues");


  var thumMenu = document.createElement("div");
  var wea;
  wea = setInterval(() => {
    console.log("TumbnailSaving machine started.");
    if (localStorage.getItem("thumbnail") == null || localStorage.getItem("thumbnail") == undefined) {
      localStorage.setItem("thumbnail", "unrecognizednevergonnagiveyouupnevergonnaletyoudownnevergonnarunaroundanddesertyou");
    } else if (localStorage.getItem("thumbnail") == "t1") {
      console.log("t1-thumb");
      if (document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(1) > img") != null) {
        console.log("NOt yet saving");
        document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(1) > img").src = "https://i.imgur.com/midF8Qc.png";
        document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(2) > img").src = "https://i.imgur.com/ykCk0ou.png";
        document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(3) > img").src = "https://i.imgur.com/zPfrt2K.png";
        document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(4) > img").src = "https://i.imgur.com/w8YqWBb.png";
        document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(5) > img").src = "https://i.imgur.com/MELGQUG.png";
        thdv1("6", "https://i.ibb.co/L0L9QrN/OneBlock.webp");
        thdv1("7", "https://i.ibb.co/BZZgchd/Pirates.webp");
        thdv1("8", "https://i.ibb.co/1qXcN7r/Greenville.webp");
        thdv1("9", "https://i.ibb.co/0fCR81G/Screenshot-2024-04-22-8-52-43-PM.png");
        thdv1("10", "https://i.ibb.co/NFmTvcL/Shooting.webp");
        thdv1("11", "https://i.ibb.co/8dVCdGC/BloxdHop.webp");
        thdv1("12", "https://i.ibb.co/NKZq2KK/Doodlecube.webp");
        thdv1("13", "https://i.ibb.co/Fw4Hk31/Parcour.webp");
        thdv1("14", "https://i.ibb.co/7bj83Wm/xmwariegus.webp");
        thdv1("15", "https://i.ibb.co/KX1kwKr/Murder-Mistery.webp");
        thdv1("16", "https://i.ibb.co/8MPy4ZS/Plots.webp");
        thdv1("17", "https://i.ibb.co/kSNPNTW/Infection.png");
        thdv1("18", "https://i.ibb.co/BsfGKYC/worlds.webp");
        if (document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(5) > img").src == "https://i.imgur.com/MELGQUG.png") {
          clearInterval(wea);
        }
      }
    }
  }, 1000);
  console.log(wea);
  var thumbnailwrap = document.createElement("div");

 
 
 
 
 
 
 
 
 //Divra Settings
  customizeThumb.addEventListener("click", () => {
    var gbs = document.createElement("div");
    dseb = 1;
    gbs.id = "aas1";
    customizeThumb.style.display = "none";
    gbs.className = "GameBackgroundScreen ";
    gbs.style.display = "flex";
    gbs.style.zIndex = "4";
    thumMenu.style.zIndex = "43";
    gbsw = document.createElement("div");
    gbsw.className = "GameBackgroundScreen ";
    gbsw.style.zIndex = "5";
    gbsw.style.display = "flex";
    gbs.appendChild(gbsw);
    gbsw.id = "oaidjfosad";
    gbsw.addEventListener("click", () => {
      gbs.remove();
      customizeThumb.style.display = "block";
      thumbnailwrap.remove();
      dseb = 0;
      bads.remove();
      thumbnail1.remove();
      abis.remove();
    });
    var scriptcode = document.createElement("script");
    scriptcode.id = "scriptcodedivra";
    document.body.appendChild(scriptcode);
    document.body.appendChild(scriptcode);
    document.getElementById("root").appendChild(gbs);
    gbs.appendChild(thumMenu);
    thumMenu.className = "SettingsMenu SmallTextLight";
    thumMenu.id = "thumMenu"
    thumMenu.style.fixed = true;
    thumMenu.style.width = "75%";
    thumMenu.style.height = "75%";

    var exitbutton = document.createElement("div");
    exitbutton.id = "DivrraSettingsExitButton"
    exitbutton.className = "NewButton RedButton SettingsResumeExitButton SettingsExitButton";
    var exitbutton1 = document.createElement("div");
    exitbutton1.className = "ButtonBottomBorder";
    exitbutton.appendChild(exitbutton1);
    var exitbutton2 = document.createElement("div");
    exitbutton2.className = "ButtonTopBorder"
    exitbutton.appendChild(exitbutton2);
    var scl = document.createElement("div");
    scl.appendChild(exitbutton);
    exitbutton.innerHTML = 'Exit Settings';
    thumMenu.style.cursor = "default";
    scl.style.position = "fixed";
    exitbutton.style.cursor = "pointer";
    thumMenu.appendChild(scl);
    var selection = document.createElement("select");



    selection.title = "i was 2 lazy to make a proper menu lol";
    selection.className = "SmallTextLight NewButton BlueButton";
    console.log(localStorage.getItem("DASFB")+" = "+ selection.value);
    selection.value = localStorage.getItem("DASFB");
    var sel1 = document.createElement("option");

    function selo(id, text) {
      id.innerHTML = text;
      id.value = text;
      selection.appendChild(id);
    }
    selo(sel1, "Settings Section Selector");

    sel1.disabled = true;
    sel1.selected = true;
    sel1.value = "";
    var sel2 = document.createElement("option");
    selo(sel2, "Crosshair & Hotbar Settings ⚙");
    var sel3 = document.createElement("option");
    selo(sel3, "Keystrokes & Youtuber Settings ⚙");
    var sel4 = document.createElement("option");
    selo(sel4, "Advanced Divra Settings ⚙");
    var sel5 = document.createElement("option");
    var devmode = document.createElement("option");
    var thumbnal = document.createElement("option");
    selo(thumbnal, "Gamemode Thumbnails 🖼");
    selo(devmode, 'Dev Mode 🧑‍💻<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>');
    selo(sel5, "Advanced Bloxd.io Settings ⚙");
    sel4.hidden = true;

    var thumbnail1 = document.createElement("img");
    thumbnail1.src = "https://i.ibb.co/BsfGKYC/worlds.webp";
    thumbnail1.style.aspectRatio = "16/9";

    thumbnail1.style.cusor = "pointer";
    thumbnail1.addEventListener("mouseover", () => {
      thumbnail1.style.transform = "scale(1.1)";
    });
    thumbnail1.addEventListener("mouseout", () => {
      thumbnail1.style.transform = "scale(1)";
    });
    thumbnail1.width = "170";
    thumMenu.appendChild(thumbnailwrap);
    selection.id = "selection";
    thumbnailwrap.id = "thw";
    thumbnailwrap.appendChild(thumbnail1);
    thumbnailwrap.style.display = "none";
    thumbnail1.draggable = 'false';
    thumbnailwrap.style.position = "relative";
    thumbnailwrap.style.left = "40%";
    var bads = document.createElement("p");
    bads.innerHTML = los;
    document.body.appendChild(bads);
    bads.zIndex = "-1";

    console.log("thumbnaills" + localStorage.getItem("thumbnail"));
    thumbnail1.style.top = "10%";

    thumbnail1.style.position = "fixed";
    thumbnail1.style.cursor = "pointer";
    thumbnail1.style.borderStyle = "solid";
    thumbnail1.addEventListener("click", () => {
      localStorage.setItem("thumbnail", "t1");
      document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(1) > img").src = "https://i.imgur.com/midF8Qc.png";
      document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(2) > img").src = "https://i.imgur.com/ykCk0ou.png";
      document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(3) > img").src = "https://i.imgur.com/zPfrt2K.png";
      document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(4) > img").src = "https://i.imgur.com/w8YqWBb.png";
      document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(5) > img").src = "https://i.imgur.com/MELGQUG.png";
      thdv1("6", "https://i.ibb.co/L0L9QrN/OneBlock.webp");
      thdv1("7", "https://i.ibb.co/BZZgchd/Pirates.webp");
      thdv1("8", "https://i.ibb.co/1qXcN7r/Greenville.webp");
      thdv1("9", "https://i.ibb.co/0fCR81G/Screenshot-2024-04-22-8-52-43-PM.png");
      thdv1("10", "https://i.ibb.co/NFmTvcL/Shooting.webp");
      thdv1("11", "https://i.ibb.co/8dVCdGC/BloxdHop.webp");
      thdv1("12", "https://i.ibb.co/NKZq2KK/Doodlecube.webp");
      thdv1("13", "https://i.ibb.co/Fw4Hk31/Parcour.webp");
      thdv1("14", "https://i.ibb.co/7bj83Wm/xmwariegus.webp");
      thdv1("15", "https://i.ibb.co/KX1kwKr/Murder-Mistery.webp");
      thdv1("16", "https://i.ibb.co/8MPy4ZS/Plots.webp");
      thdv1("17", "https://i.ibb.co/kSNPNTW/Infection.png");
      thdv1("18", "https://i.ibb.co/BsfGKYC/worlds.webp");
    });
    thumMenu.style.display = "flex";
    var abis = document.createElement("div");
    thumMenu.appendChild(abis);
    function css4ds(ais) {
      ais.style.position = "relative";
      ais.style.left = "40%";
      ais.style.display = "none";
    }
    css4ds(abis);
    var CrosshairAndYTSettings = document.createElement("div");
    thumMenu.appendChild(CrosshairAndYTSettings);
    css4ds(CrosshairAndYTSettings);
    var Crosshair_Width = document.createElement("input");
    Crosshair_Width.type="range";
    Crosshair_Width.max="30";
    Crosshair_Width.min="10";
    Crosshair_Width.id="Cri";
    var l4Crosshair_Width = document.createElement("label");
    l4Crosshair_Width.htmlFor = "Cri";
    l4Crosshair_Width.innerHTML="Crosshair Size";
    CrosshairAndYTSettings.appendChild(l4Crosshair_Width);
    CrosshairAndYTSettings.appendChild(Crosshair_Width);
    var PixelatedBloxdOnOff = document.createElement("input");
    PixelatedBloxdOnOff.type = "checkbox";
    PixelatedBloxdOnOff.style.fontSize = "34px";
    PixelatedBloxdOnOff.style.cursor = "pointer";
    PixelatedBloxdOnOff.style.transform = "scale(2)";
    PixelatedBloxdOnOff.style.marginTop = "10px";
    PixelatedBloxdOnOff.id = "PBOF";
    var PBOF = document.createElement("label");
    PBOF.htmlFor = "PBOF";
    PBOF.innerHTML = "Pixelated Bloxd.io";
    abis.appendChild(PBOF);
    var br1 = document.createElement("br");
    abis.appendChild(PixelatedBloxdOnOff);
    abis.appendChild(br1);
    var s2b2 = document.createElement("input");
    s2b2.type = "checkbox";
    var s2l2 = document.createElement("label");
    s2b2.id = "s2b2";
    s2b2.htmlFor = "s2b2";

    s2l2.style.verticalAlign = "middle";
    s2l2.style.lineHeight = "1.75px";
    abis.appendChild(s2l2);
    abis.appendChild(s2b2);
    function afdgmn(Numbericks, laughtext) {
      document.querySelector("#root > div.WholeAppWrapper > div > div:nth-child(3) > div > div.ChooseGameWrapper > div:nth-child(" + String(Numbericks) + ") > div > div").innerHTML = laughtext;
    }
    if (localStorage.getItem("s2b2") == null || localStorage.getItem("s2b2") == undefined) {
      localStorage.setItem("s2b2", "N");
    } else {
      if (localStorage.getItem("s2b2") == "Y") {
        s2b2.checked = true;
      } else if (localStorage.getItem("s2b2") == "N") {
        s2b2.checked = false;
      }
    }
    s2b2.addEventListener("click", () => {
      //something
      if (s2b2.checked == true) {

        localStorage.setItem("s2b2", "Y");
      } else if (s2b2.checked == false) {
        localStorage.getItem("s2b2", "N");
      }

    });
    s2b2.style.transform = "scale(2)";

    s2l2.innerHTML = "aPrIl &#129315; FoOlS &#129315; mOdE &#129315; ";
    s2b2.style.cursor = "pointer";
    PixelatedBloxdOnOff.style.verticalAlign = "middle";
    PixelatedBloxdOnOff.style.lineHeight = "1.75px";
    s2l2.style.lineHeight = "1.75px";
    console.log(localStorage.getItem("PBOF"));
    console.log(localStorage.getItem("PBOF"));
    if (localStorage.getItem("PBOF") == null || localStorage.getItem("PBOF") == undefined) {
      localStorage.setItem("PBOF", "N");
      console.log(localStorage.getItem("PBOF"));
      console.log(localStorage.getItem("PBOF"));
      console.log(localStorage.getItem("PBOF"));
    }
    if (localStorage.getItem("PBOF") == "Y") {
      PixelatedBloxdOnOff.checked = true;
      console.log(localStorage.getItem("PBOF"));
      console.log(localStorage.getItem("PBOF"));
      console.log(localStorage.getItem("PBOF"));
    } else if (localStorage.getItem("PBOF") == "N") {
      console.log(localStorage.getItem("PBOF"));
      PixelatedBloxdOnOff.checked = false;
      console.log(localStorage.getItem("PBOF"));
      console.log(localStorage.getItem("PBOF"));
    }
    PixelatedBloxdOnOff.addEventListener("click", () => {
      console.log(localStorage.getItem("PBOF"));
      console.log(localStorage.getItem("PBOF"));
      console.log(localStorage.getItem("PBOF"));

      console.log(localStorage.getItem("PBOF"));

      console.log(localStorage.getItem("PBOF"));
      if (PixelatedBloxdOnOff.checked == false) {
        console.log(document.getElementById("noa-canvas"));
        if (document.getElementById("noa-canvas") != null) {
          document.getElementById("noa-canvas").style.imageRendering = "auto";
          console.log(document.getElementById("noa-canvas").style.imageRendering + " Image rendering of the noa");
        }
        localStorage.setItem("PBOF", "N");
      

      } else {
        localStorage.setItem("PBOF", "Y");
        console.log("PBOF LS = " + localStorage.getItem("PBOF"));
        if (document.getElementById("noa-canvas") != null) {
          console.log(document.getElementById("noa-canvas").style.imageRendering + " Image rendering of the noa");
          document.getElementById("noa-canvas").style.imageRendering = "pixelated";

        }
      

      }
    });
   

    PBOF.style.marginRight = "10px";
    PBOF.style.marginLeft = "10px";
    PBOF.style.lineHeight = "1.75px";
    PBOF.style.verticalAlign = "middle";

    selection.addEventListener("change", () => {
      localStorage.setItem("DASFB", selection.value);

      thumbnailwrap.hidden;
      thumbnail1.hidden;
      if (selection.value == "Gamemode Thumbnails 🖼") {
        thumbnailwrap.style.display = "block";
        abis.style.display = "none";
      } else if (selection.value == "Advanced Bloxd.io Settings ⚙") {
        abis.style.display = "block";
        thumbnailwrap.style.display = "none";
      }
    });
    selection.style.color = "white";
    selection.style.height = "1.5em";
    selection.style.margin = "0.5em,0.5em,0.5em,0.5em";
    selection.style.position = "fixed";
    selection.tabIndex = "-1";

    scl.appendChild(selection);
    thumMenu.style.position = "fixed";
    exitbutton.addEventListener("click", () => {
      gbsw.click();
    });
  });


  console.log("code up to line number 1812 has no issues");

  //  divraButts.innerHTML='<div class="start-screen-recording"><div><div class="rec-dot"></div><span>Start</span></div></div><script src="https://api.apowersoft.com/screen-recorder?lang=en" defer></script>'
  //  divraButts.appendChild(record);
  /* var rdiv1 = document.createElement("div");
  rdiv1.class="start-screen-recording";
  var rdivu = document.createElement("div");
  rdiv1.appendChild(rdivu);
  rdivu.appendChild(rdiv2);
  var rdiv2 = document.createElement("div");
  rdiv2.class="rec-dot";
  var rspan1 = document.createElement("span");
  rspan1.innerHTML="Start";
  rdiv2.appendChild(rspan1);
   
  var rscript = document.createElement("script");
  rscript.src="https://api.apowersoft.com/screen-recorder?lang=en";
  rscript.defer=true;
  */



  /*
  <div class="start-screen-recording"><div><div class="rec-dot"></div><span>Start</span></div></div><script src="https://api.apowersoft.com/screen-recorder?lang=en" defer></script>
  */


  //testing




  function autoRESPAWN() {
    document.getElementsByClassName("RespawnButton")[0].innerHTML = "Auto Respawning in 2 Seconds";


    setTimeout(makerespawn, 1000);
  }
  // setInterval(autoRESPAWN,6001);

  mch = setInterval(makeCh, 1500);

  function attheendofthecodeyouwillalwaysmakeafunctionsnamethatissolongucantcomprehendandobviouslyyouneednospacesanduhav2spelletwromg() {
    changeCrosshair.value = String(localStorage.getItem("Crosshair"));

    console.log("Divra done loading. Entering Bloxd.io.");
    console.log(changeCrosshair.value);
  }


  divraButts.appendChild(Bigsmall);
  setTimeout(attheendofthecodeyouwillalwaysmakeafunctionsnamethatissolongucantcomprehendandobviouslyyouneednospacesanduhav2spelletwromg, 1000);
  console.log("All code has no issues");
}
setTimeout(body, 200);
upper();