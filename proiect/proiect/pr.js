function myFuction(){
    var x=document.getElementsByClassName("button1");
    x[0].style.display="none";
}

var x = document.getElementById("song"); 

function playAudio() { 
  x.play(); 
} 
/*function fireClickEvent(element) {
  var evt = new window.MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
  });

  element.dispatchEvent(evt);
}
function openNewURLInTheSameWindow(targetURL) {
  var a = document.createElement('a');
  var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById(a);
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
  a.href = targetURL;
  fireClickEvent(a);
}*/

var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "http://www.domainname.ext/path/ImageFile.png",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}