import React from 'react';
import Image from 'next/image';

import ThreeDotsMenuIcon from '@/components/icons/ThreeDotsMenuIcon';

import Image1 from '@/assets/images/card1.png';
import Image2 from '@/assets/images/card2.png';
import Image3 from '@/assets/images/card3.png';
import Image4 from '@/assets/images/card4.png';
import Image5 from '@/assets/images/card5.png';
import Image6 from '@/assets/images/card6.png';
import Image7 from '@/assets/images/card7.png';

import useLanguage from '@/components/hooks/useLanguage';

import styles from '@/styles/components/common/SideBars/bonus.module.scss';

interface Props {
  img: number;
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

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  return (
    <div className={styles.bonus}>
      <div className={styles.img}>
        <Image src={images[img]} alt="img" />
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
