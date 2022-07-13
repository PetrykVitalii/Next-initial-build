import React from 'react';

import SearchInput from '@/components/common/Inputs/SearchInput';

import FaqItem from '@/components/Faq/FaqItem';

import PayountIcon from '@/components/icons/PayountIcon';

import useLanguage from '@/components/hooks/useLanguage';

import styles from '@/styles/components/Faq/faq-info.module.scss';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const FaqInfo: React.FC<Props> = ({
  onChange,
  value,
}) => {
  const [{ faqLn }] = useLanguage();

  return (
    <div className={styles['faq-info']}>
      <div>
        <h2 className={styles.title}>{`${faqLn.faq} h1`}</h2>
        <div className={styles.wrap}>
          <div className={styles['icon-wrap']}>
            <PayountIcon />
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
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
        <div className={styles.faqs}>
          <FaqItem
            title="What are lorem ipsum dolor sit amet lorem ipsum?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada."
          />
          <FaqItem
            title="What are lorem ipsum dolor sit amet lorem ipsum?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada."
          />
          <FaqItem
            title="What are lorem ipsum dolor sit amet lorem ipsum?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque nulla a porta malesuada. Vivamus ultricies sed justo ac vehicula. Ut dapibus sit amet nibh ac malesuada. Nam sagittis eget risus eu commodo. Nam nec tempor magna. Vivamus porta rutrum augue et molestie. Curabitur eget ullamcorper sem, rutrum imperdiet enim. Morbi bibendum mauris non venenatis vulputate. Suspendisse condimentum quam eget orci tristique, ac aliquet nibh malesuada."
          />
        </div>
      </div>
    </div>
  );
};

export default FaqInfo;
