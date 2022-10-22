import Link from 'next/link';
import Image from 'next/image';
import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" width="110" height="31" alt="ig.news" />
        <nav>
          <Link href="/" passHref>
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts" prefetch>
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
