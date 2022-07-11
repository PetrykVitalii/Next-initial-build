import type { NextPage } from 'next';

import MainApi from '@/api/main';

import Container from '@/components/common/Container';

import styles from '@/styles/pages/faq.module.scss';
import SideBars, { SideBarsType } from '@/components/common/SideBars';

interface Props {}

const Faq: NextPage<Props> = () => {
  console.log('a');

  return (
    <Container
      leftLayout={<div className={styles['left-layout']}>leftLayout</div>}
      rightLayout={(
        <div className={styles['right-layout']}>
          <SideBars type={SideBarsType.TopCasinos} title="Top Casinos" items={new Array(7).fill('Top Casinos')} />
          <SideBars type={SideBarsType.TopBonuses} title="Top Bonuses" items={new Array(7).fill('Top Bonuses')} />
          <SideBars type={SideBarsType.TopSlotGames} title="Top Slot Games" items={new Array(7).fill('Top Slot Games')} />
        </div>
      )}
    />
  );
};

export async function getServerSideProps() {
  const mainApi = new MainApi();
  const initialFilms = await mainApi.getFilms();

  return { props: { initialFilms } };
}

export default Faq;
