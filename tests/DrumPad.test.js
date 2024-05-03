import { jest } from '@jest/globals';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import DrumPad from '../src/DrumPad';

if (!customElements.get('drum-pad')) {
    customElements.define('drum-pad', DrumPad);
}

describe('DrumPad Component', () => {
    let drumPad;

    beforeEach(() => {
        drumPad = document.createElement('drum-pad');
        document.body.appendChild(drumPad);
    });

    afterEach(() => {
        document.body.removeChild(drumPad);
    });

    test('DrumPad successfully created', () => {
        expect(drumPad).toBeInstanceOf(HTMLElement);
    });

    test('DrumPad has "beat" attribute', () => {
        expect(drumPad).toHaveAttribute('beat');
    });

    test('DrumPad plays sound on click', () => {
        drumPad.playSound = jest.fn();
        const padElement = drumPad.querySelector('div.pad-button');
        fireEvent.click(padElement);
        expect(drumPad.playSound).toHaveBeenCalled();
    });

    test('DrumPad has correct audio source', () => {
        const audioElement = drumPad.getAudioTrack();
        expect(audioElement.src).toBe(drumPad.urlsList[drumPad.getAttribute('beat')]);
      });

    //@TODO  
    //   test('DrumPad has correct keyboard key assigned', () => {
    //     const audioElement = drumPad.getAudioTrack();
    //     expect(drumPad.beat).toBe(drumPad.urlsList[drumPad.getAttribute('beat')]);
    //   });



})