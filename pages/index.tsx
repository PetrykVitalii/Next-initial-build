import type { NextPage } from 'next';

interface Props {}

const Home: NextPage<Props> = () => {
  console.log('a');

  // const [films, setFilms] = useState<IFilm[]>([]);

  // useEffect(() => {
  //   if (filmsState === RequestState.LOADED) {
  //     return;
  //   }

  //   if (initialFilms) {
  //     dispatch(filmsActions.setFilmsState(RequestState.LOADED));
  //     dispatch(filmsActions.setFilms(initialFilms));
  //     return;
  //   }

  //   dispatch(getFilms() as unknown as AnyAction);
  // }, [initialFilms]);

  // useEffect(() => {
  //   setFilms(selectedFilms);
  // }, [selectedFilms]);

  return (
    <div>Main</div>
  );
};

export async function getServerSideProps() {
  return { props: { initialFilms: [] } };
}

export default Home;
