(function() {

	var scriptContent = function() {
		function check() {
			var notifier = window.Notifier;
			if (notifier && notifier.lcSend) {
				var originalLcSend = notifier.lcSend;
				notifier.lcSend = function(act) {
					if (act !== 'audio_start' && act !== 'video_start') {
						originalLcSend.apply(notifier, arguments);
					}
				};
			} else {
				setTimeout(check, 300);
			}
		}
		check();
	};

	var script = document.createElement('script');
	script.text = '(' + scriptContent.toString() + ')();';
	document.body.appendChild(script);

})();
