import React from 'react';
import Masonry from 'react-masonry-css';

import SearchInput from '@/components/common/Inputs/SearchInput';

import FaqItem from '@/components/Faq/FaqItem';

import FaqTitleIcon from '@/components/icons/FaqTitleIcon';

import useLanguage from '@/components/hooks/useLanguage';

import { IFaq } from '@/interfaces/faq';

import styles from '@/styles/components/Faq/faq-info.module.scss';

interface Props {
  onChange: (value: string) => void;
  searchValue: string;
  faqs: IFaq[];
}

const FaqInfo: React.FC<Props> = ({
  onChange,
  searchValue,
  faqs,
}) => {
  const [{ faqLn }] = useLanguage();

  return (
    <div className={styles['faq-info']}>
      <div>
        <h2 className={styles.title}>{`${faqLn.faq} h1`}</h2>
        <div className={styles.wrap}>
          <div className={styles['icon-wrap']}>
            <FaqTitleIcon />
          </div>
          <div className={styles.text}>{faqLn.faq_text}</div>
        </div>
      </div>
      <div className={styles['faqs-wrapper']}>
        <div className={styles.wrapper}>
          <div className={styles['sub-title']}>{faqLn.faq_info}</div>
          <div className={styles['input-wrap']}>
            <SearchInput
              placeholder={faqLn.search_placeholder}
              value={searchValue}
              onChange={onChange}
            />
          </div>
        </div>
        <Masonry
          breakpointCols={{
            default: 3,
            1200: 2,
            800: 1,
          }}
          className={styles['my-masonry-grid']}
          columnClassName={styles['my-masonry-grid_column']}
        >
          {faqs.map(({ title, text, id }) => (
            <FaqItem
              title={title}
              text={text}
              key={id}
            />
          ))}
        </Masonry>
        <div className={styles.faqs} />
      </div>
    </div>
  );
};

export default FaqInfo;
