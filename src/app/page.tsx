import Link from 'next/link';
import Header from './header/header';

export default function Home() {
  return (
    <div className="container">
      <title>Поиск сотрудника</title>
      <Header></Header>
      <main>
        <Link href="/user">User</Link>
      </main>
    </div>
  );
}
