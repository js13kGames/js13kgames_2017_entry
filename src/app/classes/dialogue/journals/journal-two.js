import { JournalParent } from "./journal-parent";

export class JournalTwo extends JournalParent {
	constructor() {
		super();
		this.setText(this.myText());
	}

	myText() {
		return [
      'What are these gross things?',
      'It looks like they are rotting. Best to stay away.',
      'Argh... My head... It\'s like someone knocking on door.',
      '@you HaVeNT SeeN aNyTHiNG yeT@',
      'Who said that?! Where..?',
      '+..It has begun.+',
		];
	}
}