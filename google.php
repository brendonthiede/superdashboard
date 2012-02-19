<?php
    $url = 'http://www.google.com';
    $output = str_ireplace(" src=\"/", " src=\"http://google.com/", file_get_contents($url));        
    
    echo str_ireplace(" src='/", " src='http://google.com/", $output);
?>