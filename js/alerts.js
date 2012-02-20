superdashboard.alerts = (function() {
	var isAlertShowing = false;
	var audioCount = 0;

	function isAlertExists() {
		return $("#buildError").is(":checked");
	}

	function checkForAlert() {
		if (isAlertExists()) {
			if (!isAlertShowing) {
				$("#sirenDiv").show();
				isAlertShowing = true;
				bindKeypressToSnooze();
				playRepeatingSound("alarmAudioPlayer", 4);
			}
		} else {
			if (isAlertShowing) {
				$("#sirenDiv").hide();
				isAlertShowing = false;
				$(this).removeAttr("keypress");
			}
		}
		setTimeout("superdashboard.alerts.checkForAlert();", 2000);
	}
	
	function bindKeypressToSnooze() {
		$(document).keypress(function() {
			superdashboard.alerts.snooze();
			$(this).removeAttr("keypress");
		});
	}
	
	function playRepeatingSound(playerName, count) {
		audioCount = count;
		playSound(playerName);
	}
	
	function playSound(playerName) {
		document.getElementById('alarmAudioPlayer').play();
		audioCount--;
		if (audioCount > 0) {
			setTimeout("superdashboard.alerts.playSound('" + playerName + "');", 2200);
		}
	}
	
	function snooze() {
		$("#sirenDiv").hide();
	}

	return {
		checkForAlert: checkForAlert,
		snooze: snooze,
		playSound: playSound
	};
})();