import React from 'react';

import useLanguage from '@/components/hooks/useLanguage';

import styles from '@/styles/components/common/SideBars/bonus.module.scss';
import ThreeDotsMenuIcon from '@/components/icons/ThreeDotsMenuIcon';

interface Props {
  img: string;
  currency: string;
  profit: number;
  price: number;
  freeSpins: number;
  isExclusive: boolean;
}

const Bonus: React.FC<Props> = ({
  profit = 400,
  currency = '$',
  price = 4000,
  freeSpins = 100,
  isExclusive = true,
  img = 'https://st2.depositphotos.com/1560768/6162/i/600/depositphotos_61621057-stock-photo-no-image-available.jpg',
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

export default Bonus;
