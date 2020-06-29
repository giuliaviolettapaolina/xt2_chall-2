window.onload = function () {
	startTime();
};

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);

	document.getElementById('datum').innerHTML = new Date().toLocaleDateString();
	document.getElementById('tijd').innerHTML = h + ':' + m + ':' + s;
	var t = setTimeout(startTime, 500);
	if (h >= 20 || h <= 4) {
		document.getElementById('flexContainer').style.backgroundColor = '#4F4F4F';
		document.getElementById('tijd').style.color = '#BDBDBD';
		document.getElementById('datum').style.color = '#BDBDBD';

		document.getElementById('zon_maan').style.backgroundColor = '#E4E4E4';
	} else {
		document.getElementById('flexContainer').style.backgroundColor = '#FFF';
		document.getElementById('tijd').style.color = '#000';
		document.getElementById('datum').style.color = '#4F4F4F';

		document.getElementById('zon_maan').style.backgroundColor = '#ffa500';
	}
}

function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	} // add zero in front of numbers < 10
	return i;
}
