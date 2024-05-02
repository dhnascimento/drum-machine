
export default class DrumPad extends HTMLElement {
    constructor() {
        super();
        this.urlsList = {
            Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            R: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            S: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            D: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            F: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            Z: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        };
    }

    playSound(audio) {
        audio.play();
    }

    getAudioTrack() {
        return this.querySelector('audio');
    }

    connectedCallback() {
        // Create div placeholder element and set Tailwind class
        const padElement = document.createElement('div');
        // Create audio element, set track based on index relatively to parent
        const track = document.createElement('audio');
        const parent = this.parentElement;
        const trackIndex = Array.prototype.indexOf.call(parent.children, this);
        track.setAttribute('src', Object.values(this.urlsList)[trackIndex]);
        // Set class and beat attribute to div and drum-pad, respectively
        padElement.setAttribute('class', 'pad-button w-12 h-12 border-solid border-2 border-teal-200 m-2 p-1.5');
        this.setAttribute('beat', Object.keys(this.urlsList)[trackIndex]);

        this.appendChild(padElement);
        padElement.appendChild(track);

        padElement.addEventListener('click', (e) => {
            const audioElement = this.getAudioTrack();
            this.playSound(audioElement);
        });
    }

}

customElements.define('drum-pad', DrumPad);