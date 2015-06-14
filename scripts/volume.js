var progressBar = document.querySelector('.progbar');
var audioTag = document.querySelector('audio');
var playButton = document.querySelector('.playbutton');
var volume = document.createElement('input');
var audioSource;

progressBar.appendChild(volume);
volume.type = 'range';
volume.min = '0.0';
volume.max = '1.0';
volume.step = '0.01';
volume.value = '1.0';

playButton.addEventListener('click', function(e){
	audioSource = audioTag.getAttribute('src');
})
volume.addEventListener('input', function(){
	audioTag.volume = volume.value;
})