/* eslint-disable class-methods-use-this */
import HttpClient from '@/api/http-client';

import { IBonus } from '@/interfaces/bonus';
import { ICasino } from '@/interfaces/casino';
import { IFaq } from '@/interfaces/faq';
import { ISlotGame } from '@/interfaces/slotGame';

import { fakeDelay } from '@/utils/fakeAPI';

export default class MainApi extends HttpClient {
  public constructor() {
    super(process.env.API_URL);
  }

  public getFaqs() {
    return this.instance.get<IFaq[]>('/faqs');
  }

  public getCasinos() {
    // return this.instance.get<ICasino[]>('/casinos');
    const fakeData: ICasino[] = [
      {
        userRating: 9.5,
        payount: '95%',
        img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        name: 'FAIR GO casino',
        id: '1',
      },
      {
        userRating: 9.5,
        payount: '95%',
        img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        name: 'FAIR GO casino',
        id: '2',
      },
      {
        userRating: 9.5,
        payount: '95%',
        img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        name: 'FAIR GO casino',
        id: '3',
      },
      {
        userRating: 9.5,
        payount: '95%',
        img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        name: 'FAIR GO casino',
        id: '4',
      },
      {
        userRating: 9.5,
        payount: '95%',
        img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        name: 'FAIR GO casino',
        id: '5',
      },
      {
        userRating: 9.5,
        payount: '95%',
        img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        name: 'FAIR GO casino',
        id: '6',
      },
      {
        userRating: 9.5,
        payount: '95%',
        img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        name: 'FAIR GO casino',
        id: '7',
      },
    ];
    return fakeDelay(fakeData);
  }

  public getBonuses() {
    // return this.instance.get<IBonus[]>('/bonuses');

    const fakeData: IBonus[] = [
      {
        profit: 400,
        currency: '$',
        price: 4000,
        freeSpins: 100,
        isExclusive: true,
        id: '11',
        img: 'https://st2.depositphotos.com/1560768/6162/i/600/depositphotos_61621057-stock-photo-no-image-available.jpg',
      },
      {
        profit: 400,
        currency: '$',
        price: 4000,
        freeSpins: 100,
        isExclusive: true,
        id: '12',
        img: 'https://st2.depositphotos.com/1560768/6162/i/600/depositphotos_61621057-stock-photo-no-image-available.jpg',
      },
      {
        profit: 400,
        currency: '$',
        price: 4000,
        freeSpins: 100,
        isExclusive: true,
        id: '13',
        img: 'https://st2.depositphotos.com/1560768/6162/i/600/depositphotos_61621057-stock-photo-no-image-available.jpg',
      },
      {
        profit: 400,
        currency: '$',
        price: 4000,
        freeSpins: 100,
        isExclusive: true,
        id: '14',
        img: 'https://st2.depositphotos.com/1560768/6162/i/600/depositphotos_61621057-stock-photo-no-image-available.jpg',
      },
      {
        profit: 400,
        currency: '$',
        price: 4000,
        freeSpins: 100,
        isExclusive: true,
        id: '15',
        img: 'https://st2.depositphotos.com/1560768/6162/i/600/depositphotos_61621057-stock-photo-no-image-available.jpg',
      },
      {
        profit: 400,
        currency: '$',
        price: 4000,
        freeSpins: 100,
        isExclusive: true,
        id: '16',
        img: 'https://st2.depositphotos.com/1560768/6162/i/600/depositphotos_61621057-stock-photo-no-image-available.jpg',
      },
      {
        profit: 400,
        currency: '$',
        price: 4000,
        freeSpins: 100,
        isExclusive: true,
        id: '17',
        img: 'https://st2.depositphotos.com/1560768/6162/i/600/depositphotos_61621057-stock-photo-no-image-available.jpg',
      },
    ];

    return fakeDelay(fakeData);
  }

  public getSlotGames() {
    // return this.instance.get<ISlotGame[]>('/slot-games');

    const fakeData: ISlotGame[] = [
      {
        name: 'The Hive',
        userRating: 9.8,
        payount: 95,
        img: 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
        id: '21',
      },
      {
        name: 'The Hive',
        userRating: 9.8,
        payount: 95,
        img: 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
        id: '22',
      },
      {
        name: 'The Hive',
        userRating: 9.8,
        payount: 95,
        img: 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
        id: '23',
      },
      {
        name: 'The Hive',
        userRating: 9.8,
        payount: 95,
        img: 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
        id: '24',
      },
      {
        name: 'The Hive',
        userRating: 9.8,
        payount: 95,
        img: 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
        id: '25',
      },
      {
        name: 'The Hive',
        userRating: 9.8,
        payount: 95,
        img: 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
        id: '26',
      },
      {
        name: 'The Hive',
        userRating: 9.8,
        payount: 95,
        img: 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
        id: '27',
      },
    ];

    return fakeDelay(fakeData);
  }
}
