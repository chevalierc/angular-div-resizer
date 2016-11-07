angular.module('resizer', []).directive('resizer', function($document) {

	return function($scope, $element, $attrs) {

		$element.on('mousedown', function(event) {
			event.preventDefault();

			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
		});

		function mousemove(event) {

			if ($attrs.resizer == 'vertical') {
				// Handle vertical resizer
				var x = event.pageX;

				if ($attrs.resizerMax && x > $attrs.resizerMax) {
					x = parseInt($attrs.resizerMax);
				}

                if ($attrs.resizerMax && x < $attrs.resizerMin) {
					x = parseInt($attrs.resizerMin);
				}

				$element.css({
					left: x + 'px'
				});

				document.getElementById($attrs.resizerLeft.substring(1)).style.width = x + 'px'
				document.getElementById($attrs.resizerRight.substring(1)).style.left = (x + parseInt($attrs.resizerWidth)) + 'px'

			} else {
				// Handle horizontal resizer
				var y = window.innerHeight - event.pageY;

				$element.css({
					bottom: y + 'px'
				});

				document.getElementById($attrs.resizerTop.substring(1)).style.bottom = y + 'px'
				document.getElementById($attrs.resizerBottom.substring(1)).style.height = (y + parseInt($attrs.resizerHeight)) + 'px'
			}
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	};
});
