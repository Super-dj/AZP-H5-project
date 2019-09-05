(function(win) {
	var pageWidth = 10.8;
	var docEl = document.documentElement;
	windowScale = function() {
		docEl.style.fontSize = docEl.getBoundingClientRect().width / pageWidth + 'px';
	}
	windowScale();
	window.onresize = windowScale;
})(window);
