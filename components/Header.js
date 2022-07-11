import Link from "next/link";

import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <a id={styles.headerLogo}>{title}</a>
        <Link className={styles.active} href="/">
          Home
        </Link>
        <Link href="/about">About</Link>
        <a
          id={styles.oneOffDonation}
          href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E190660&id=6"
        >
          One off donation
        </a>
      </div>
      <div className={styles.headerRight}>
        <a href="#login">Log in / Sign up (coming soon™)</a>
      </div>
    </div>
  );
}
