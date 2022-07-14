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

  public getFaqs(s: string = '') {
    // return this.instance.get<IFaq[]>('/faqs?s='search');

    const fakeData: IFaq[] = [
      {
        title: 'title',
        text: 'text',
        id: '1',
      },
      {
        title: 'What are lorem ipsum dolor sit amet lorem ipsum?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada.',
        id: '2',
      },
      {
        title: 'What are lorem ipsum',
        text: 'Condimentum quam eget orci tristique, ac aliquet nibh malesuada.',
        id: '3',
      },
      {
        title: 'Ipsum dolor sit amet lorem ipsum',
        text: 'Ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem ipsum',
        id: '4',
      },
      {
        title: 'Title',
        text: 'Ttext text text text text text text text text text Ttext text text text text text text text text text Ttext text text text text text text text text text Ttext text text text text text text text text text Ttext text text text text text text text text text',
        id: '5',
      },
      {
        title: 'What are lorem ipsum',
        text: 'Condimentum quam eget orci tristique, ac aliquet nibh malesuada.',
        id: '6',
      },
      {
        title: 'Ipsum dolor sit amet lorem ipsum',
        text: 'Ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem ipsum',
        id: '7',
      },
      {
        title: 'Title',
        text: 'Ttext text text text text text text text text text Ttext text text text text text text text text text Ttext text text text text text text text text text Ttext text text text text text text text text text Ttext text text text text text text text text text',
        id: '8',
      },
      {
        title: 'What are lorem ipsum dolor sit amet lorem ipsum?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada.',
        id: '9',
      },
    ].filter(({ title }) => title.toLowerCase().includes(s.toLowerCase()));

    return fakeDelay(fakeData);
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
        isExclusive: false,
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
        isExclusive: false,
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
