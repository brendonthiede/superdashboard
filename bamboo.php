<div id="bambooPlans">
<?php
	$cfg = fopen (dirname(__FILE__)."\\config\\bambooPlanList.cfg", "r");
	$index = 0;
	while ($url = trim(fgets($cfg))) {
		$buildStatusPage = file_get_contents($url);
		$pattern = '/<div id="buildStatusInner3"> <p class="([^"]*)"> <strong>Latest Status:<\/strong> (.*) <\/p> <\/div> <!-- END #buildStatusInner3 -->/';
		if (preg_match($pattern, $buildStatusPage, $matches)) {
			$buildStatus = $matches[1];
			$statusSummary = $matches[2];
			$buildCompletionTime = "";
			$pattern = '/Build completed on <strong>(.*)<\/strong>/';
			if (preg_match($pattern, $buildStatusPage, $matches)) {
				$buildCompletionTime = $matches[1];
			}
			
			echo("\t<div id='bambooPlan".$index."' class='".$buildStatus."'>");
			if ($buildStatus == "success") {
				echo("<img alt='success' src='http://10.6.0.145:8035/s/1600/1/_/images/jt/icn_plan_passed.gif'> ");
			}
			echo($statusSummary);
			echo(" at <span id='buildCompletionTime".$index."' class='buildCompletionTime'>".$buildCompletionTime."</span>");
			echo("</div>\n");
			$index++;
		}
	}
	fclose ($cfg);
?>
</div>