let dialogue = document.getElementById('dialogue');
let speakerBox = document.getElementById('speaker');

let speechTimer = 5, sentencePause = 0, textPrefix = '', textSuffix = '',
	redToggle = false, words = [], speakers = [];

export class Dialogue {
	tick() {
		if (speechTimer >= 2) {
			if (words.length) {
				if (words[0].length) {
					this.speakNextLetter();
				} else {
					if (sentencePause >= 90) {
						this.resetForNextSentence();
					} else {
						sentencePause++;
					}
				}
			}
		}

		if (speechTimer < 30) speechTimer++;
	}

	resetForNextSentence() {
		words.splice(0, 1);
		speakers.splice(0, 1);
    this.clean();
	}

	clean() {
    dialogue.innerHTML = '';
    speakerBox.innerHTML = '';
    sentencePause = 0;
  }

	speakNextLetter() {
		speakerBox.innerHTML = speakers[0] + ':';

		let n = words[0][0];

		redToggle = n === '@' ? !redToggle : redToggle;

		textPrefix = redToggle ? '<span style="color:red">' : '';
		textSuffix = redToggle ? '</span>' : '';

		dialogue.innerHTML += textPrefix + n.replace('@', '') + textSuffix;

		words[0].splice(0, 1);

		speechTimer = 0;
	}

	addWords(speaker, _words) {
		words.push(_words.split(''));
		speakers.push(speaker);
	}

	clear() {
		words = [];
		speakers = [];
	  this.clean();
	}
}
