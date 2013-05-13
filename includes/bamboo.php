<?php
	include('common.inc');

	$cfg = fopen (dirname(__FILE__)."/../config/bambooPlanList.cfg", "r");
	$index = 0;
	$badDomains = array();
	while ($url = trim(fgets($cfg))) {
		$domain = getFirstRegexCapture('/(http[s]?:\/\/[^\/]*)\//', $url);
		if (!isset($badDomains[$domain])) {
			$buildStatusPage = @file_get_contents($url);
			if ($buildStatusPage === false) {
				echo "<div class='bambooError'>";
				echo "Error loading ".$url." (".$domain." will now be ignored).";
				echo "</div>";
				$badDomains[$domain] = $domain;
			} else {
				$pattern = '/<div id="buildStatusInner3"> <p class="([^"]*)"> <strong>Latest Status:<\/strong> (.*) <\/p> <\/div> <!-- END #buildStatusInner3 -->/';
				if (preg_match($pattern, $buildStatusPage, $matches)) {
					$buildStatus = $matches[1];
					$statusSummary = str_replace('<a href="/', '<a href="'.$domain.'/', $matches[2]);
					
					echo("\t<div id='bambooPlan".$index++."' class='".$buildStatus."'>");
					echo("<img alt='".$buildStatus."' src='images/".$buildStatus.".gif' />");
					echo(" ".$statusSummary."</div>\n");
				}
			}
		}
	}
	fclose ($cfg);