import type { NextPage } from 'next';
import { useSelector } from 'react-redux';

import Container from '@/components/common/Container';
import SideBars, { SideBarsType } from '@/components/common/SideBars/SideBars';

import { selectAllBonuses } from '@/store/selectors/bonuses';
import { selectAllSlotGames } from '@/store/selectors/slotGames';
import { selectaAllCasinos } from '@/store/selectors/casinos';

import styles from '@/styles/pages/faq.module.scss';

interface Props {}

const Faq: NextPage<Props> = () => {
  const bonuses = useSelector(selectAllBonuses);
  const slotGames = useSelector(selectAllSlotGames);
  const casinos = useSelector(selectaAllCasinos);

  return (
    <Container
      leftLayout={<div className={styles['left-layout']}>leftLayout</div>}
      rightLayout={(
        <div className={styles['right-layout']}>
          <SideBars type={SideBarsType.TopCasinos} title="Top Casinos" items={casinos} />
          <SideBars type={SideBarsType.TopBonuses} title="Top Bonuses" items={bonuses} />
          <SideBars type={SideBarsType.TopSlotGames} title="Top Slot Games" items={slotGames} />
        </div>
      )}
    />
  );
};

export async function getServerSideProps() {
  return { props: { initial: [] } };
}

export default Faq;
