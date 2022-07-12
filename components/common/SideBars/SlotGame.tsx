import React from 'react';

import UserRatingIcon from '@/components/icons/UserRatingIcon';
import PayountIcon from '@/components/icons/PayountIcon';

import useLanguage from '@/components/hooks/useLanguage';

import styles from '@/styles/components/common/SideBars/slot-game.module.scss';

interface Props {
  userRating: number;
  payount: number;
  img: string;
  name: string;
}

const SlotGame: React.FC<Props> = ({
  name = 'The Hive',
  userRating = 9.8,
  payount = 95,
  img = 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
}) => {
  const [{ faqLn }] = useLanguage();

  return (
    <div className={styles['slot-games']}>
      <div className={styles.img}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          {name}
          <span>{faqLn.by_rtg}</span>
        </div>
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
                {`% ${faqLn.rtp}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotGame;
