 // setInterval()
 var i=0;
 var setintervalId=setInterval(function(){
     console.log(++i);
 },1000);
 console.log(document.getElementById("butn"));
 function clearTime(){
     console.log(document.getElementById("butn"));
     clearInterval(setintervalId);
 }