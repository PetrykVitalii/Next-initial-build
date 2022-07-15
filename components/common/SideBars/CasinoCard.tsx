import React from 'react';
import Image from 'next/image';

import UserRatingIcon from '@/components/icons/UserRatingIcon';
import PayountIcon from '@/components/icons/PayountIcon';

import Image1 from '@/assets/images/card1.png';
import Image2 from '@/assets/images/card2.png';
import Image3 from '@/assets/images/card3.png';
import Image4 from '@/assets/images/card4.png';
import Image5 from '@/assets/images/card5.png';
import Image6 from '@/assets/images/card6.png';
import Image7 from '@/assets/images/card7.png';

import useLanguage from '@/components/hooks/useLanguage';

import styles from '@/styles/components/common/SideBars/casino.module.scss';

interface Props {
  userRating: number;
  payount: string;
  img: number;
  name: string;
}

const CasinoCard: React.FC<Props> = ({
  name,
  userRating,
  payount,
  img,
}) => {
  const [{ faqLn }] = useLanguage();

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  return (
    <div className={styles.casino}>
      <div className={styles.img}>
        <Image src={images[img]} alt="img" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.wrap}>
          <div className={styles.rating}>
            <div className={styles['icon-wrap']}>
              <UserRatingIcon />
            </div>
            <div className={styles.block}>
              <div className={styles['block-count']}>{userRating}</div>
              <div className={styles['block-text']}>{faqLn.user_rating}</div>
            </div>
          </div>
          <div className={styles.payout}>
            <div className={styles['icon-wrap']}>
              <PayountIcon />
            </div>
            <div className={styles.block}>
              <div className={styles['block-count']}>{payount}</div>
              <div className={styles['block-text']}>
                {`${faqLn.payout} %`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoCard;
