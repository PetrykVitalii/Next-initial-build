import React from 'react';

import styles from '@/styles/components/common/side-bars.module.scss';

export enum SideBarsType {
  TopCasinos = 'top_casinos',
  TopBonuses = 'top_bonuses',
  TopSlotGames = 'top_slot_games',
}

interface Props {
  title: string;
  items: string[];
  type: SideBarsType,
}

const SideBars: React.FC<Props> = ({ title, type, items = [] }) => (
  <div className={styles['block-wrapper']}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles['items-wrapper']}>
      {items.map((item) => {
        switch (type) {
          case SideBarsType.TopCasinos:
            return <div>{item}</div>;
          case SideBarsType.TopBonuses:
            return <div>{item}</div>;
          case SideBarsType.TopSlotGames:
            return <div>{item}</div>;
          default:
            return <></>;
        }
      })}
    </div>
  </div>
);

export default SideBars;
