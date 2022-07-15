import type { NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const Home: NextPage<Props> = () => (
  <Link href="/faq">
    <a>FAQ</a>
  </Link>
);

export default Home;
