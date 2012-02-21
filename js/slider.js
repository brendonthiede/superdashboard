superdashboard.slider = (function() {
	var isInitialized = false;
	var isAutoSlide = false;
	var sliderTimer = null;
	var autoSlideDuration = 3500;
	var sliderIndex = -1;
	var sliderCount = 0;
	
	// private functions
	function init() {
		sliderCount = $("div.slide").length;
		isInitialized = true;
	}
	
	function transitionSlide(index) {
		if (!isInitialized) {
			init();
		}
		$("#slideDiv" + sliderIndex).hide();
		if (index >= sliderCount) {
			sliderIndex = 0;
		} else if (index < 0) {
			sliderIndex = sliderCount - 1;
		} else {
			sliderIndex = index;
		}
		$("#sliderCount").text((sliderIndex + 1) + '/' + sliderCount);
		$("#slideDiv" + sliderIndex).show();
	}
	
	// public functions
	function startSlider(duration) {
		isAutoSlide = true;
		if (duration > 1500) {
			autoSlideDuration = duration;
		}
		showNext();
		$("#autoSlideControl").hide();
		$("#manualSlideControl").show();
	}
	
	function stopSlider() {
		clearTimeout(sliderTimer);
		isAutoSlide = false;
		$("#manualSlideControl").hide();
		$("#autoSlideControl").show();
	}
	
	function showNext() {
		transitionSlide(sliderIndex + 1);
		if (isAutoSlide) {
			sliderTimer = setTimeout("superdashboard.slider.showNext();", autoSlideDuration);
		}
	}
	
	function showPrevious() {
		transitionSlide(sliderIndex - 1);
	}
	
	return {
		startSlider: startSlider,
		stopSlider: stopSlider,
		showNext: showNext,
		showPrevious: showPrevious
	};
})();