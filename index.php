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
    	<div id="sliderContainer" style="position: relative; top: 0; left: 0; height: 50%; width: 100%; margin-bottom: 5px">
	    	<div id="sliderFrame">
		        <div id="seenowdoDiv" class="slide">
		            <iframe src="http://seenowdo.com">Oh no!!!</iframe>
		        </div>
		        <div id="googleDiv" class="slide">
		            <iframe src="google.php">Oh no!!!</iframe>
		        </div>
	        </div>
        </div>
        <div id="sliderControls" style="position: relative; top: 0px; left: 0; z-index: 40">
        	<table width="100%"><tbody><tr>
        		<td width="90%">&nbsp;</td>
        		<td><a href='#' onClick='superdashboard.slider.showPrevious()'>&lt;&lt;</a></td>
        		<td><div id="startStopSlider"><a href='#' onClick='superdashboard.slider.startSlider(5000);'>Auto</a></div></td>
        		<td><div id="sliderCount">0/0</div></td>
        		<td width="10%"><a href='#' onClick='superdashboard.slider.showNext()'>&gt;&gt;</a></td>
        		</tr></tbody></table>
    	</div>
        <div id="systemStatusDiv" style="position: relative; top: 0; left: 0;"><input id="buildError" type="checkbox" />Build Error</div>
        <?php include("alarmAudio.inc"); ?>
        <?php include("alarmVisual.inc"); ?>
    </body>
</html>