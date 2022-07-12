/* eslint-disable class-methods-use-this */
import HttpClient from '@/api/http-client';

import { IBonus } from '@/interfaces/bonus';
import { ICasino } from '@/interfaces/casino';
import { IFaq } from '@/interfaces/faq';
import { ISlotGame } from '@/interfaces/slotGame';

export default class MainApi extends HttpClient {
  public constructor() {
    super(process.env.API_URL);
  }

  public getFaqs() {
    return this.instance.get<IFaq[]>('/faqs');
  }

  public getCasinos() {
    return this.instance.get<ICasino[]>('/casinos');
  }

  public getBonuses() {
    return this.instance.get<IBonus[]>('/bonuses');
  }

  public getSlotGames() {
    return this.instance.get<ISlotGame[]>('/slot-games');
  }
}
