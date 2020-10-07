window.onload = function() {
  var confettiSettings = {
    "target":"confetti-holder","max":"200","size":"1",
    "animate":true,
    "props":["circle","square","triangle","line",{"type":"svg","src":"./gift.svg","size":25,"weight":0.2}],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","rotate":true,"start_from_edge":true,"respawn":true}
  ;
var c = new ConfettiGenerator(confettiSettings);
c.render();

//variables
let flip = document.querySelector('.flip');
let letter = document.querySelector('.letter');
let envelope = document.querySelector('.envelope');
let confetti = document.querySelector('#confetti-holder');


//open
function open(){
	flip.classList.add('open');
	flip.classList.remove('close');
	setTimeout(function(){
	letter.classList.add('letterOpen');
	letter.classList.remove('letterClose');
	envelope.classList.remove('envelopClose');
	envelope.classList.add('envelopOpen');
	letter.style.zIndex = '7';
    confetti.style.zIndex = '6';
	},400);
}
var closed = true;
//close
function close(){
	letter.classList.remove('letterOpen');
	letter.classList.add('letterClose');
	envelope.classList.remove('envelopOpen');
	envelope.classList.add('envelopClose');
    confetti.style.zIndex = '15';
	setTimeout(function(){
		flip.classList.remove('open');
		flip.classList.add('close');
		letter.style.zIndex = '5';
	},300);
}

  var msgContainer = document.getElementById("msg");
document.body.addEventListener('click', ()=>{
  if (closed){
    open();
    closed = false;
  } else {
    close();
    closed = true;
  }
});
}