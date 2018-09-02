var clock = document.getElementById('clock');
var color = document.getElementById('color');

function createClock(){
	var time = new Date();
	var h = (time.getHours() % 24).toString();
	var m = time.getMinutes().toString();
	var s = time.getSeconds().toString();

	if (h.length < 2){
		h = '0' + h;
	}
	if (m.length < 2){
		m = '0' + m;
	}
	if (s.length < 2){
		s = '0' + s;
	}
	var clockStr = h +':' + m + ":" + s;
	var colorStr = '#' + h + m + s;
	var colorText = '#' + (h*4) + m + s;

	clock.textContent = clockStr;
	color.textContent = colorStr;
	
	document.getElementsByClassName('clock-wrap')[0].style.background = colorStr;
	document.getElementsByClassName('clock-wrap')[0].style.color = colorText;

}
createClock();
setInterval(createClock, 1000);