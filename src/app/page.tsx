import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image className={styles.logo} src="/logo.svg" alt="МТС logo" width={400} height={400} priority />
      </main>
      <h1 className={styles.heading}>ПОРТАЛ</h1>
    </div>
  );
}
