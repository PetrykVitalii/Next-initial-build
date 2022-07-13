import React from 'react';

import FaqIcon from '@/components/icons/FaqIcon';

import styles from '@/styles/components/Faq/faq-item.module.scss';

interface Props {
  title: string;
  text: string;
}

const FaqItem: React.FC<Props> = ({ title, text }) => {
  console.log('qwe');

  return (
    <div className={styles.wrapper}>
      <div className={styles['title-wrap']}>
        <div className={styles['icon-wrap']}>
          <FaqIcon />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default FaqItem;
