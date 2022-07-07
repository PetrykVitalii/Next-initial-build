import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';

import Header from '@/components/common/Header';

import MainApi from '@/api/main';

import { IFilm } from '@/store/reducers/films';
import { filmsActions, getFilms } from '@/store/actions/films';
import { RequestState } from '@/store/reducers/common';
import { selectAllFilms, selectFilmsState } from '@/store/selectors/films';
import Loader from '@/components/common/Loader';

interface Props {
  initialFilms: IFilm[] | null;
}

const Home: NextPage<Props> = ({ initialFilms }) => {
  const dispatch = useDispatch();
  const selectedFilms = useSelector(selectAllFilms);
  const filmsState = useSelector(selectFilmsState);

  const [films, setFilms] = useState<IFilm[]>([]);

  useEffect(() => {
    if (filmsState === RequestState.LOADED) {
      return;
    }

    if (initialFilms) {
      dispatch(filmsActions.setFilmsState(RequestState.LOADED));
      dispatch(filmsActions.setFilms(initialFilms));
      return;
    }

    dispatch(getFilms() as unknown as AnyAction);
  }, [initialFilms]);

  useEffect(() => {
    setFilms(selectedFilms);
  }, [selectedFilms]);

  return (
    <>
      <Header />
      {filmsState === RequestState.LOADING && <Loader />}
    </>
  );
};

export async function getServerSideProps() {
  const mainApi = new MainApi();
  const initialFilms = await mainApi.getFilms();

  return { props: { initialFilms } };
}

export default Home;
