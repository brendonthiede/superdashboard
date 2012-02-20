superdashboard.slider = (function() {
	var isInitialized = false;
	var sliderTimer = null;
	var isAutoSlide = false;
	var autoSlideDuration = 5000;
	var sliderIndex = 0;
	var sliderCount = 0;
	
	// private functions
	function init() {
		sliderCount = $("div.slide").length;
		sliderIndex = sliderCount - 1;
		isInitialized = true;
	}
	
	function transitionSlide(index) {
		$("div.slide").css('z-index', 10);
		$("div.slide").eq(sliderIndex).css('z-index', 20);
		if (index >= sliderCount) {
			sliderIndex = 0;
		} else if (index < 0) {
			sliderIndex = sliderCount - 1;
		} else {
			sliderIndex = index;
		}
		$("#sliderCount").text((sliderIndex + 1) + '/' + sliderCount);
		$("div.slide").eq(sliderIndex).css('height', '0').css('z-index', 30).animate({height: '100%'}, 1500);
	}
	
	// public functions
	function startSlider(duration) {
		isAutoSlide = true;
		if (duration > 1500) {
			autoSlideDuration = duration;
		}
		showNext();
		$("#startStopSlider").html("<a href='#' onClick='superdashboard.slider.stopSlider();'>Manual</a>");
	}
	
	function stopSlider() {
		clearTimeout(sliderTimer);
		isAutoSlide = false;
		$("#startStopSlider").html("<a href='#' onClick='superdashboard.slider.startSlider();'>Auto</a>");
	}
	
	function showNext() {
		if (!isInitialized) {
			init();
		}
		transitionSlide(sliderIndex + 1);
		if (isAutoSlide) {
			sliderTimer = setTimeout("superdashboard.slider.showNext();", autoSlideDuration);
		}
	}
	
	function showPrevious() {
		if (!isInitialized) {
			init();
		}
		transitionSlide(sliderIndex - 1);
	}
	
	return {
		startSlider: startSlider,
		stopSlider: stopSlider,
		showNext: showNext,
		showPrevious: showPrevious
	};
})();