<?php
function getFirstRegexCapture($pattern, $subject) {
	if (preg_match($pattern, $subject, $matches)) {
		return $matches[1];
	}
	return "";
}

function getFirstRegexCaptureAfter($pattern, $subject, $after) {
	$pos = strrpos($subject, $after);
	if ($pos > 0) {
		return getFirstRegexCapture($pattern, substr($subject, $pos));
	}
	return "";
}
?>