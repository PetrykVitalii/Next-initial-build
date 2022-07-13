import React from 'react';

import ThreeDotsMenuIcon from '@/components/icons/ThreeDotsMenuIcon';

import useLanguage from '@/components/hooks/useLanguage';

import styles from '@/styles/components/common/SideBars/bonus.module.scss';

interface Props {
  img: string;
  currency: string;
  profit: number;
  price: number;
  freeSpins: number;
  isExclusive: boolean;
}

const BonusCard: React.FC<Props> = ({
  profit,
  currency,
  price,
  freeSpins,
  isExclusive,
  img,
}) => {
  const [{ faqLn }] = useLanguage();

  return (
    <div className={styles.bonus}>
      <div className={styles.img}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.wrap}>
        {isExclusive && <div className={styles.exclusive}>{faqLn.exclusive}</div>}
        <div className={styles.info}>
          <div>
            <span className={styles['up-to']}>{`${profit}% ${faqLn.up_to} `}</span>
            <span className={styles.price}>{`${currency} ${price}`}</span>
          </div>
          <div className={styles['free-spins']}>
            {`+ ${freeSpins} ${faqLn.free_spins}`}
          </div>
        </div>
        <ThreeDotsMenuIcon />
      </div>
    </div>
  );
};

export default BonusCard;
