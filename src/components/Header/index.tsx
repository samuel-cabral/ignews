import Image from 'next/image';
import { SignInButton } from '../SignInButton';

import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" width="110" height="31" alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active} passHref>
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active} prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
