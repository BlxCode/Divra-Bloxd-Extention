var broshow = document.getElementById("watbrowser");
const getBrowserName = () => {
  let browserInfo = navigator.userAgent;
  let browser;
  if (browserInfo.includes('Opera') || browserInfo.includes('OPR')) {
    if (browserInfo.includes('Safari')) {
      browser = "Opera";
    }
  } else if (browserInfo.includes('Edg')) {
    browser = 'Edge';
  } else if (browserInfo.includes('Chrome')) {
    if (browserInfo.includes('Opr') == false) {
      browser = "Chrome";
    }
  } else if (browserInfo.includes('Safari')) {
    browser = 'Safari';
  } else if (browserInfo.includes('Firefox')) {
    browser = 'Firefox'
  } else {
    browser = 'either Internet Explorer, or a browser we\'ve never seen before';
  }
  return browser;
}
document.addEventListener("DOMContentLoaded", function () {

  const browserName = getBrowserName();
  broshow.innerHTML = `${browserName}`;
  console.log(browserName);
});
function forever() {
  if (window.innerWidth > 600) {
    document.getElementsByClassName("boxedt1")[1].style.borderLeftColor = 'rgb(255, 255, 255)';
    document.getElementsByClassName("boxedt1")[1].style.borderLeftStyle = 'solid';
    document.getElementsByClassName("boxedt1")[0].style.borderRightColor = 'rgb(255, 255, 255)';
    document.getElementsByClassName("boxedt1")[0].style.borderRightStyle = 'solid';
  } else {
    document.getElementsByClassName("boxedt1")[1].style.borderLeftColor = 'rgb(255, 255, 255)';
    document.getElementsByClassName("boxedt1")[1].style.borderLeftStyle = 'none';
    document.getElementsByClassName("boxedt1")[0].style.borderRightColor = 'rgb(255, 255, 255)';
    document.getElementsByClassName("boxedt1")[0].style.borderRightStyle = 'none';

  }
}
forever();
setInterval(forever, 100);
