var Volume = function() {
  this.progbar = $('.progbar');
  this.audio = $('audio');
  this.volume = $('<input>').attr({
    id: 'volume',
    type: 'range',
    min: '0.0',
    max: '1.0',
    step: '0.01',
    value: '1.0'
  });
  this.repeatButton = $('<input>').attr({
    class: 'repeatButton',
    type: 'checkbox'
  });
  this.repeatButtonLabel = $('<span>').text('repeat');
};

Volume.prototype.main = function() {
  this.volume.appendTo(this.progbar);
  this.repeatButton.appendTo(this.progbar);
  this.repeatButtonLabel.appendTo(this.progbar);
};

Volume.prototype.setEventHandler = function() {
  var self = this;
  self.volume.on('input', function() {
    self.audio[0].volume = self.volume[0].value;
  });
  self.repeatButton.on('click', function() {
    if(self.repeatButton[0].checked) {
      self.audio.attr('loop', 'loop');
    } else {
      self.audio.removeAttr('loop');
    }
  });
};

var volume = new Volume();
volume.main();
volume.setEventHandler();
