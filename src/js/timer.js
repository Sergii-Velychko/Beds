Now = new Date;
year = Now.getFullYear(); month = Now.getMonth(); day=Now.getDate()+1; hour=0; minute=0; sec=0;

	dateFuture = new Date(year, month, day, hour, minute, sec);

	function CountBox() {
		dateNow = new Date;
		amount = dateFuture - dateNow.getTime();
		delete dateNow;
		if (amount < 0) {
			window.location.reload();
			out =
			"<div id='countbox-hours1'><span></span>0</div><div id='countbox-hours2'><span></span>0</div><div id='countbox-hours-text'></div></div>" + 
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div id='countbox-mins1'><span></span>0</div><div id='countbox-mins2'><span></span>0</div><div id='countbox-mins-text'></div></div>" + 
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div id='countbox-secs1'><span></span>0</div><div id='countbox-secs2'><span></span>0</div><div id='countbox-secs-text'></div></div>";
			document.getElementById("countbox").innerHTML = out
		} else {
			days = 0;
			days1 = 0;
			days2 = 0;
			hours = 0;
			hours1 = 0;
			hours2 = 0;
			mins = 0;
			mins1 = 0;
			mins2 = 0;
			secs = 0;
			secs1 = 0;
			secs2 = 0;
			out = "";
			amount = Math.floor(amount / 1e3);
			days = Math.floor(amount / 86400);
			days1 = (days >= 10) ? days.toString().charAt(0) : '0';
			days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
			amount = amount % 86400;
			hours = Math.floor(amount / 3600);
			hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
			hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
			amount = amount % 3600;
			mins = Math.floor(amount / 60);
			mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
			mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
			amount = amount % 60;
			secs = Math.floor(amount);
			secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
			secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
			out = 
			"<div class='countbox-num'><div id='countbox-hours1'>" + hours1 + "</div><div id='countbox-hours2'><span></span>" + hours2 + "</div><div id='countbox-hours-text'></div></div>" + 
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div id='countbox-mins1'>" + mins1 + "</div><div id='countbox-mins2'><span></span>" + mins2 + "</div><div id='countbox-mins-text'></div></div>" + 
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div id='countbox-secs1'>" + secs1 + "</div><div id='countbox-secs2'><span></span>" + secs2 + "</div><div id='countbox-secs-text'></div></div>";
			document.getElementById("countbox").innerHTML = out;
			setTimeout("CountBox()", 1e3)
		}
	};
	window.onload = function () {
		CountBox();
};