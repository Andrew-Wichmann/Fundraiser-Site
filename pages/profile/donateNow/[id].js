import useSWR from "swr";
import fetcher from "lib/fetcher";
import { useRouter } from "next/router";
import Link from "next/link";
import NumberFormat from "react-number-format";

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(
    `https://mockend.com/Andrew-Wichmann/Fundraiser-Site/users/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <Link href={`/profile/${id}`}>
        <a>Back to profile page</a>
      </Link>
      <h1>
        Congrats! You just donated{" "}
        <NumberFormat
          value={data.pledgeRate * data.pointsEarned}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </h1>
    </>
  );
};
