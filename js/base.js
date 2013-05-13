/**
 * @author Brendon
 * depends on jQuery
 */

var superdashboard = (function() {
	return {
		alerts: null,
		slider: null
	};	
})();

$(document).ready(function() {
	superdashboard.alerts.checkForAlert();
	superdashboard.slider.showNext();
	if ($("#bambooPlans").find("img").length > 0) {
		setInterval(function() {
			$("#bambooPlans").load('includes/bamboo.php');
		}, 5000);
	}
});