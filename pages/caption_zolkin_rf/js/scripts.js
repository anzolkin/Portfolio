/** Countdown Timer **/

$(document).ready(function() {
	/*"use strict";*/
	function startCountdown(){
		$("#countdowncont").countdown({
			date: "28 may 2023 20:00:00", /** Enter new date here **/
			format: "on"
		},
		function() {
			// callback function
		});
		setTimeout(startCountdown,1000);
	}
	startCountdown();
	
});

