class Volume {
    progressBar: JQuery = $('.progbar');
    audio: JQuery = $('audio');
    volume: JQuery = $('<input>').attr({
        id: 'volume',
        type: 'range',
        min: '0.0',
        max: '1.0',
        step: '0.01',
        value: '1.0'
    });
    repeatButton: JQuery = $('<input>').attr({
        class: 'repeatButton',
        type: 'checkbox'
    });
    repeatButtonLabel: JQuery = $('<span>').text('repeat');

    main = () => {
        this.volume.appendTo(this.progressBar);
        this.repeatButton.appendTo(this.progressBar);
        this.repeatButtonLabel.appendTo(this.progressBar);
    };

    setEventHandler = () => {
        const volumeInput: HTMLInputElement = this.volume[0] as HTMLInputElement;
        const audioInput: HTMLAudioElement = this.audio[0] as HTMLAudioElement;

        this.volume.on('input', () => {
            audioInput.volume = Number(volumeInput.value);
        });

        this.repeatButton.on('click', () => {
            const repeatInput: HTMLInputElement = this.repeatButton[0] as HTMLInputElement;
            if (repeatInput.checked) {
                this.audio.attr('loop', 'loop');
            } else {
                this.audio.removeAttr('loop');
            }
        });
    }
}

const volume = new Volume();
volume.main();
volume.setEventHandler();
