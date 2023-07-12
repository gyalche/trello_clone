import Image from 'next/image';
import Header from '../../component/Header';
import Board from '../../component/Board';

export default function Home() {
  return (
    <main>
      {/*header*/}
      <Header />
      <Board />
      {/*body*/}
    </main>
  );
}
