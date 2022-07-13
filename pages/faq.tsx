import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Container from '@/components/common/Container';
import SideBars, { SideBarsType } from '@/components/common/SideBars/SideBars';

import FaqInfo from '@/components/Faq/FaqInfo';

import { selectAllBonuses, selectBonusesState } from '@/store/selectors/bonuses';
import { selectAllSlotGames, selectSlotGamesState } from '@/store/selectors/slotGames';
import { selectaAllCasinos, selectCasinosState } from '@/store/selectors/casinos';
import { RequestState } from '@/store/reducers/common';
import { getCasinos } from '@/store/actions/casinos';
import { getBonuses } from '@/store/actions/bonuses';
import { getSlotGames } from '@/store/actions/slotGames';
import { Actions } from '@/store';

import styles from '@/styles/pages/faq.module.scss';

interface Props {}

const Faq: NextPage<Props> = () => {
  const dispatch = useDispatch();

  const bonuses = useSelector(selectAllBonuses);
  const bonusesState = useSelector(selectBonusesState);

  const slotGames = useSelector(selectAllSlotGames);
  const slotGamesState = useSelector(selectSlotGamesState);

  const casinos = useSelector(selectaAllCasinos);
  const casinosState = useSelector(selectCasinosState);

  useEffect(() => {
    if (casinosState === RequestState.LOADED) {
      return;
    }

    dispatch(getCasinos() as Actions);
  }, []);

  useEffect(() => {
    if (bonusesState === RequestState.LOADED) {
      return;
    }

    dispatch(getBonuses() as Actions);
  }, []);

  useEffect(() => {
    if (slotGamesState === RequestState.LOADED) {
      return;
    }

    dispatch(getSlotGames() as Actions);
  }, []);

  return (
    <Container
      leftLayout={(
        <div className={styles['left-layout']}>
          <FaqInfo />
        </div>
      )}
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
