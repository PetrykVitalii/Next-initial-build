import React, { useMemo, useState } from 'react';

import FaqIcon from '@/components/icons/FaqIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import MinusIcon from '@/components/icons/MinusIcon';

import useToggle from '@/components/hooks/useToggle';

import styles from '@/styles/components/Faq/faq-item.module.scss';

interface Props {
  title: string;
  text: string;
}

const FaqItem: React.FC<Props> = ({ title, text }) => {
  const [isCollapse, setIsCollapse] = useToggle(true);
  const [textRef, setTextRef] = useState<HTMLDivElement | null>(null);

  const hasCollapse = useMemo(
    () => textRef && textRef.scrollHeight > textRef.offsetHeight,
    [textRef],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles['title-wrap']}>
        <div className={styles['icon-wrap']}>
          <FaqIcon />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={`${styles['text-wrap']} ${isCollapse && styles['text-wrap-collapse']}`}>
        <div ref={(ref) => setTextRef(ref)} className={`${styles.text} ${isCollapse && styles['text-collapse']}`}>{text}</div>
      </div>
      {hasCollapse && (
      <div className={styles['icon-position-wrap']} onClick={setIsCollapse}>
        {isCollapse ? <PlusIcon /> : <MinusIcon />}
      </div>
      )}
    </div>
  );
};

export default FaqItem;
