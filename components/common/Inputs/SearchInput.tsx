import React from 'react';

import SearchIcon from '@/components/icons/SearchIcon';

import styles from '@/styles/components/common/Inputs/search-input.module.scss';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!onChange) {
      return;
    }

    const { target } = e as React.ChangeEvent<HTMLInputElement>;

    onChange(target.value);
  };

  return (
    <label htmlFor="search-input" className={styles.label}>
      <div className={styles['icon-wrap']}>
        <SearchIcon />
      </div>
      <input
        placeholder={placeholder}
        id="search-input"
        className={styles['search-input']}
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default SearchInput;
