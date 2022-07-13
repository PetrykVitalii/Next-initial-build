import React from 'react';

import UserRatingIcon from '@/components/icons/UserRatingIcon';
import PayountIcon from '@/components/icons/PayountIcon';

import useLanguage from '@/components/hooks/useLanguage';

import styles from '@/styles/components/common/SideBars/casino.module.scss';

interface Props {
  userRating: number;
  payount: string;
  img: string;
  name: string;
}

const CasinoCard: React.FC<Props> = ({
  name,
  userRating,
  payount,
  img,
}) => {
  const [{ faqLn }] = useLanguage();

  return (
    <div className={styles.casino}>
      <div className={styles.img}>
        <img src={img} alt="img" />
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
