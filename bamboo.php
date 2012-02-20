<div id="bambooPlans">
<?php
	include('includes/common.inc');
	$cfg = fopen (dirname(__FILE__)."\\config\\bambooPlanList.cfg", "r");
	$index = 0;
	while ($url = trim(fgets($cfg))) {
		$domain = getFirstRegexCapture('/(http[s]?:\/\/[^\/]*)\//', $url);
		$buildStatusPage = file_get_contents($url);
		$pattern = '/<div id="buildStatusInner3"> <p class="([^"]*)"> <strong>Latest Status:<\/strong> (.*) <\/p> <\/div> <!-- END #buildStatusInner3 -->/';
		if (preg_match($pattern, $buildStatusPage, $matches)) {
			$buildStatus = $matches[1];
			$statusSummary = str_replace('<a href="/', '<a href="'.$domain.'/', $matches[2]);
			
			echo("\t<div id='bambooPlan".$index++."' class='".$buildStatus."'>");
			echo("<img alt='".$buildStatus."' src='images/".$buildStatus.".gif' />");
			echo(" ".$statusSummary."</div>\n");
		}
	}
	fclose ($cfg);
?>
</div>