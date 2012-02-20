superdashboard.alerts = (function() {
	var isAlertShowing = false;
	var audioCount = 0;

	var isAlertExists = function() {
		return $("#buildError").is(":checked");
	};

	var checkForAlert = function() {
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
	
	var bindKeypressToSnooze = function() {
		$(document).keypress(function() {
			superdashboard.alerts.snooze();
			$(this).removeAttr("keypress");
		});
	};
	
	var playRepeatingSound = function(playerName, count) {
		audioCount = count;
		playSound(playerName);
	};
	
	var playSound = function(playerName) {
		document.getElementById('alarmAudioPlayer').play();
		audioCount--;
		if (audioCount > 0) {
			setTimeout("superdashboard.alerts.playSound('" + playerName + "');", 2200);
		}
	};
	
	var snooze = function() {
		$("#sirenDiv").hide();
	};

	return {
		checkForAlert: checkForAlert,
		snooze: snooze,
		playSound: playSound
	};
})();