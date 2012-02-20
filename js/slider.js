superdashboard.slider = (function() {
	var isInitialized = false;
	var sliderTimer = null;
	var isAutoSlide = false;
	var autoSlideDuration = 5000;
	var sliderIndex = 0;
	var sliderCount = 0;
	
	var init = function() {
		sliderCount = $("div.slide").length;
		sliderIndex = sliderCount - 1;
		isInitialized = true;
	};
	
	var transitionForward = function() {
		transitionSlide(sliderIndex + 1);
	};
	
	var transitionBackward = function() {
		transitionSlide(sliderIndex - 1);
	};
	
	var transitionSlide = function(index) {
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
	};
	
	var startSlider = function(duration) {
		isAutoSlide = true;
		if (duration > 1500) {
			autoSlideDuration = duration;
		}
		showNext();
		$("#startStopSlider").html("<a href='#' onClick='superdashboard.slider.stopSlider();'>Manual</a>");
	};
	
	var stopSlider = function() {
		clearTimeout(sliderTimer);
		isAutoSlide = false;
		$("#startStopSlider").html("<a href='#' onClick='superdashboard.slider.startSlider();'>Auto</a>");
	};
	
	var showNext = function() {
		if (!isInitialized) {
			init();
		}
		transitionForward();
		if (isAutoSlide) {
			sliderTimer = setTimeout("superdashboard.slider.showNext();", autoSlideDuration);
		}
	};
	
	var showPrevious = function() {
		if (!isInitialized) {
			init();
		}
		transitionBackward();
	};
	
	return {
		startSlider: startSlider,
		stopSlider: stopSlider,
		showNext: showNext,
		showPrevious: showPrevious
	};
})();