import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import MainApi from '@/api/main';

import Container from '@/components/common/Container';
import SideBars, { SideBarsType } from '@/components/common/SideBars/SideBars';

import FaqInfo from '@/components/Faq/FaqInfo';

import { selectAllBonuses, selectBonusesState } from '@/store/selectors/bonuses';
import { selectAllSlotGames, selectSlotGamesState } from '@/store/selectors/slotGames';
import { selectaAllCasinos, selectCasinosState } from '@/store/selectors/casinos';
import { RequestState } from '@/store/reducers/common';
import { casinosActions, getCasinos } from '@/store/actions/casinos';
import { bonusesActions, getBonuses } from '@/store/actions/bonuses';
import { selectAllFaqs, selectFaqsState } from '@/store/selectors/faqs';
import { getSlotGames, slotGamesActions } from '@/store/actions/slotGames';
import { Actions } from '@/store';
import { faqsActions, getFaqs } from '@/store/actions/faqs';

import { IFaq } from '@/interfaces/faq';
import { IBonus } from '@/interfaces/bonus';
import { ICasino } from '@/interfaces/casino';
import { ISlotGame } from '@/interfaces/slotGame';

import useSearchDebounce from '@/components/hooks/useSearchDebounce';

import styles from '@/styles/pages/faq.module.scss';

interface Props {
  initialFaqs: IFaq[] | null,
  initialBonuses: IBonus[] | null,
  initialCasinos: ICasino[] | null,
  initialSlotGames: ISlotGame[] | null,
}

const Faq: NextPage<Props> = ({
  initialFaqs, initialBonuses, initialCasinos, initialSlotGames,
}) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const bonuses = useSelector(selectAllBonuses);
  const bonusesState = useSelector(selectBonusesState);

  const slotGames = useSelector(selectAllSlotGames);
  const slotGamesState = useSelector(selectSlotGamesState);

  const casinos = useSelector(selectaAllCasinos);
  const casinosState = useSelector(selectCasinosState);

  const faqs = useSelector(selectAllFaqs);
  const faqsState = useSelector(selectFaqsState);

  const searchFaqs = (search: string) => {
    dispatch(getFaqs(search, { silent: true }) as Actions);
  };

  useSearchDebounce(searchValue, searchFaqs);

  useEffect(() => {
    if (faqsState === RequestState.LOADED) {
      return;
    }

    if (initialFaqs) {
      dispatch(faqsActions.setFaqs(initialFaqs));
      dispatch(faqsActions.setFaqsState(RequestState.LOADED));
      return;
    }

    dispatch(getFaqs() as Actions);
  }, []);

  useEffect(() => {
    if (casinosState === RequestState.LOADED) {
      return;
    }

    if (initialCasinos) {
      dispatch(casinosActions.setCasinos(initialCasinos));
      dispatch(casinosActions.setCasinosState(RequestState.LOADED));
      return;
    }

    dispatch(getCasinos() as Actions);
  }, []);

  useEffect(() => {
    if (bonusesState === RequestState.LOADED) {
      return;
    }

    if (initialBonuses) {
      dispatch(bonusesActions.setBonuses(initialBonuses));
      dispatch(bonusesActions.setBonusesState(RequestState.LOADED));
      return;
    }

    dispatch(getBonuses() as Actions);
  }, []);

  useEffect(() => {
    if (slotGamesState === RequestState.LOADED) {
      return;
    }

    if (initialSlotGames) {
      dispatch(slotGamesActions.setSlotGames(initialSlotGames));
      dispatch(slotGamesActions.setSlotGamesState(RequestState.LOADED));
      return;
    }

    dispatch(getSlotGames() as Actions);
  }, []);

  return (
    <Container
      leftLayout={(
        <div className={styles['left-layout']}>
          <FaqInfo onChange={setSearchValue} searchValue={searchValue} faqs={faqs} />
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
  const mainApi = new MainApi();

  const [faqs, bonuses, casinos, slotGames] = await Promise.all([
    mainApi.getFaqs(),
    mainApi.getBonuses(),
    mainApi.getCasinos(),
    mainApi.getSlotGames(),
  ]);

  return {
    props:
      {
        initialFaqs: faqs,
        initialBonuses: bonuses,
        initialCasinos: casinos,
        initialSlotGames: slotGames,
      },
  };
}

export default Faq;
