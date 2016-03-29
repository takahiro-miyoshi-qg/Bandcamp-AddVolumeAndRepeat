var progbar = $('.progbar');
var audio = $('audio');

var volume = $('<input>').attr({
	id: 'volume',
	type: 'range',
	min: '0.0',
	max: '1.0',
	step: '0.01',
	value: '1.0'
}).appendTo(progbar);

var repeatButton = $('<input>').attr({
	class: 'repeatButton',
	type: 'checkbox'
}).appendTo(progbar);

var repeatButtonLabel = $('<span>').text('repeat').appendTo(progbar);

volume.on('input', function() {
  "use strict";
	audio[0].volume = volume[0].value;
});

repeatButton.click(function() {
  "use strict";
	if(repeatButton[0].checked) {
		audio.attr('loop', 'loop');
	} else {
		audio.removeAttr('loop');
	}
});