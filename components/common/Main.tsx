import React from 'react';

import styles from '@/styles/components/common/main.module.scss';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
);

export default Main;
