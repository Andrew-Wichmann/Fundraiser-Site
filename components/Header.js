import { useState, useEffect } from "react";
import netlifyAuth from "../lib/netlifyAuth";
import Link from "next/link";

import styles from "./Header.module.css";

export default function Header({ title }) {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  let [user, setUser] = useState(netlifyAuth.user);
  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
    });
  };

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false);
      setUser(null);
    });
  };

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
      setUser(user);
    });
  }, [loggedIn]);
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
        {loggedIn ? (
          <>
            <div>{user && <>Welcome {user?.user_metadata.full_name}!</>}</div>
            <a href="/profile">My pledge</a>
            <a onClick={logout}>Log out</a>
          </>
        ) : (
          <a onClick={login}>Log in</a>
        )}
      </div>
    </div>
  );
}
