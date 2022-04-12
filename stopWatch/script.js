var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var startstop = document.getElementById("startstop");
var lapsminutes = document.getElementById("lapsminutes");
var lapsseconds = document.getElementById("lapsseconds");
var lapslist = document.getElementById("lapslist");
var colonstart = document.getElementById("colonstart");
var innerlist = document.createElement("div");
innerlist.setAttribute("id","innerlist");

var totalTime=0;
var totTime = document.createElement("label");


var isTimeron = false;
var timerId = false;
var isReset = true;

startstop.addEventListener("click",function(event){

  if(isTimeron)
  {
    clearInterval(timerId);

    event.target.innerHTML="Start";
    isTimeron = false;
    laps.innerHTML = "Reset";
    isReset = false;
  }
  else{
 timerId = setInterval(function(){
      totalTime++;
      minutes.innerHTML = parseInt(totalTime / 60);
      seconds.innerHTML = parseInt(totalTime % 60);
      
  },1000)

  startstop.innerHTML = "Stop";
  isTimeron = true;
  isReset=true;
}
}
)

laps.addEventListener("click",function()
{
  
 if(isReset)
 {

  var list = document.createElement("p");
  var lapsmin = document.createElement("lable");
  var lapssec = document.createElement("lable");
  var colon = document.createElement("lable");

  lapsmin.innerHTML = minutes.innerHTML;
  colon.innerHTML = ":";
  lapssec.innerHTML = seconds.innerHTML;


  list.appendChild(lapsmin);
  list.appendChild(colon);
  list.appendChild(lapssec);

  innerlist.appendChild(list);

  lapslist.appendChild(innerlist);

  lapslist.removeChild(lapsminutes);
  //lapslist.removeChild(lapsseconds);
  //lapslist.removeChild(colonstart);


  
 }
 else
 {
   minutes.innerHTML = "00";
   seconds.innerHTML = "00";
   totalTime=0;

   laps.innerHTML="Laps";

  innerlist =document.getElementById("innerlist")
  innerlist.innerHTML = " "
  lapsminutes.innerHTML = "--:--"
  lapslist.appendChild(lapsminutes)
  isReset=true;
 }
})