import React from 'react';

import styles from '@/styles/components/common/container.module.scss';

interface Props {
  leftLayout: React.ReactNode;
  rightLayout: React.ReactNode;
}

const Container: React.FC<Props> = ({ leftLayout, rightLayout }) => (
  <div className={styles.container}>
    {leftLayout}
    {rightLayout}
  </div>
);

export default Container;
