import AbstractLanguage from '@/utils/language/AbstractLanguage';

export default class Faq extends AbstractLanguage {
  get user_rating() {
    return this.getText({
      EN: 'User Rating',
    });
  }

  get payout() {
    return this.getText({
      EN: 'Payout',
    });
  }

  get top_casinos() {
    return this.getText({
      EN: 'Top Casinos',
    });
  }

  get top_bonuses() {
    return this.getText({
      EN: 'Top Bonuses',
    });
  }

  get top_slot_games() {
    return this.getText({
      EN: 'Top Slot Games',
    });
  }

  get rtp() {
    return this.getText({
      EN: 'RTP',
    });
  }

  get by_rtg() {
    return this.getText({
      EN: 'by RTG',
    });
  }

  get free_spins() {
    return this.getText({
      EN: 'Free Spins',
    });
  }

  get up_to() {
    return this.getText({
      EN: 'up to',
    });
  }

  get exclusive() {
    return this.getText({
      EN: 'Exclusive',
    });
  }

  get faq_text() {
    return this.getText({
      EN: 'Nulla eget magna ut purus iaculis dapibus. Vestibulum euismod fringilla gravida. Donec a quam a elit tristique fringilla. Nam ipsum enim, bibendum vitae magna et, placerat porttitor enim. Suspendisse potenti. Donec ut lorem placerat, feugiat magna non, sodales risus. Fusce rutrum suscipit diam, eu tempor erat sollicitudin vel.',
    });
  }

  get faq() {
    return this.getText({
      EN: 'FAQ',
    });
  }

  get faq_info() {
    return this.getText({
      EN: 'FAQ lorem ipsum h2',
    });
  }

  get search_placeholder() {
    return this.getText({
      EN: 'Search in FAQ...',
    });
  }
}
