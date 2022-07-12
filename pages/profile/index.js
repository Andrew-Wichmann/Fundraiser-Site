import { useState, useEffect } from "react";

import Link from "next/link";
import NumberFormat from "react-number-format";
import netlifyIdentity from "netlify-identity-widget";
import fetcher from "lib/fetcher";
import useSWR from "swr";

import styles from "./Profile.module.css";

const silly = {
  "andrewp.wichmann@gmail.com": 1,
};

const ProfilePage = ({ user }) => {
  const { data, error } = useSWR(
    `https://mockend.com/Andrew-Wichmann/Fundraiser-Site/users/${
      silly[user.email]
    }`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className={styles.profileContent}>
      <p>
        {data.userName}, you pledged{" "}
        {
          <NumberFormat
            value={data.pledgeRate}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        }{" "}
        for every effort point Andrew earns in his training, and a maximum of{" "}
        <NumberFormat
          value={data.pledgeMax}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </p>
      <p>
        Andrew has earned{" "}
        <NumberFormat
          value={data.pointsEarned}
          displayType={"text"}
          thousandSeparator={true}
        />{" "}
        of his{" "}
        <NumberFormat
          value={data.pointsMax}
          displayType={"text"}
          thousandSeparator={true}
        />{" "}
        total effort points and has{" "}
        <NumberFormat
          value={data.pointsLeft}
          displayType={"text"}
          thousandSeparator={true}
        />{" "}
        more to go.
      </p>
      <Link href={`/profile/donateNow/`}>End and donate now</Link>
      <Link href={`/profile/edit/`}>Edit pledge</Link>
      <Link href={`/profile/delete/`}>Delete account</Link>
    </div>
  );
};

export default function () {
  const [user, setUser] = useState();
  netlifyIdentity.on("init", (u) => {
    setUser(u);
  });
  netlifyIdentity.on("login", (u) => {
    setUser(u);
  });
  netlifyIdentity.on("logout", () => {
    setUser();
  });

  if (!user) {
    return (
      <>
        <Link href="/">You're not logged in. Go back to the home page.</Link>
      </>
    );
  }
  return <ProfilePage user={user}></ProfilePage>;
}
