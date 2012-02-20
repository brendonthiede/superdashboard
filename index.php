<html>
    <head>
        <title>Super Dashboard</title>
        <link href="css/base.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/jquery1.7.1.min.js"></script>
        <script type="text/javascript" src="js/base.js"></script>
        <script type="text/javascript">
        	$(document).ready(function() {
        		superdashboard.alerts.checkForAlert();
        		superdashboard.slider.showNext();
        	});
        </script>
    </head>
    <body>
    	<?php include("includes/slider.inc"); ?>
        <?php include("includes/alarmAudio.inc"); ?>
        <?php include("includes/alarmVisual.inc"); ?>
		<!-- Temporary checkbox for testing out alarm capabilities -->
        <div id="systemStatusDiv" style="position: relative; top: 0; left: 0;"><input id="buildError" type="checkbox" />Build Error</div>
    </body>
</html>