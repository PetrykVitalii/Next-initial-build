import React from 'react';

import CasinoCard from '@/components/common/SideBars/CasinoCard';
import BonusCard from '@/components/common/SideBars/BonusCard';
import SlotGameCard from '@/components/common/SideBars/SlotGameCard';

import { ICasino } from '@/interfaces/casino';
import { IBonus } from '@/interfaces/bonus';
import { ISlotGame } from '@/interfaces/slotGame';

import styles from '@/styles/components/common/SideBars/side-bars.module.scss';

export enum SideBarsType {
  TopCasinos = 'top_casinos',
  TopBonuses = 'top_bonuses',
  TopSlotGames = 'top_slot_games',
}

interface Props {
  title: string;
  items: ICasino[] | IBonus[] | ISlotGame[];
  type: SideBarsType,
}

const SideBars: React.FC<Props> = ({ title, type, items = [] }) => (
  <div className={styles['block-wrapper']}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles['items-wrapper']}>
      {items.map((item) => {
        switch (type) {
          case SideBarsType.TopCasinos:
            const casino = { ...item } as ICasino;

            return (
              <CasinoCard
                key={casino.id}
                userRating={casino.userRating}
                payount={casino.payount}
                img={casino.img}
                name={casino.name}
              />
            );
          case SideBarsType.TopBonuses:
            const bonus = { ...item } as IBonus;

            return (
              <BonusCard
                key={bonus.id}
                currency={bonus.currency}
                profit={bonus.profit}
                img={bonus.img}
                price={bonus.price}
                freeSpins={bonus.freeSpins}
                isExclusive={bonus.isExclusive}
              />
            );
          case SideBarsType.TopSlotGames:
            const slotGame = { ...item } as ISlotGame;

            return (
              <SlotGameCard
                key={slotGame.id}
                userRating={slotGame.userRating}
                payount={slotGame.payount}
                img={slotGame.img}
                name={slotGame.name}
              />
            );
          default:
            return <></>;
        }
      })}
    </div>
  </div>
);

export default SideBars;
