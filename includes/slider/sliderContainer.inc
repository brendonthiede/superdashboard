<div id="sliderContainer">
	<div id="sliderFrame">
		<?php
			$f = fopen (dirname(__FILE__)."\\..\\..\\config\\sliderList.cfg", "r");
			$index = 0;
			while ($line = fgets($f)) {
				if (strlen($line) > 0) {
		        	echo('        <div id="slideDiv' . $index++ . '" class="slide">');
		            echo('            <iframe src="' . $line . '">Oh no!!!</iframe>');
		        	echo('        </div>');
				}
		    }
		    fclose ($f);
        ?>
    </div>
</div>