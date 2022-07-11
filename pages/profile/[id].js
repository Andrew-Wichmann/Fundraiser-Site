import useSWR from "swr";
import fetcher from "lib/fetcher";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";

import styles from "./Profile.module.css";

export default function () {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(
    `https://mockend.com/Andrew-Wichmann/Fundraiser-Site/users/${id}`,
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
        total effort points and has
        <NumberFormat
          value={data.pointsLeft}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />{" "}
        more to go.
      </p>
    </div>
  );
}
