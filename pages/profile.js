import useSWR from "swr";
import fetcher from "lib/fetcher";

import NumberFormat from "react-number-format";
export default function () {
  const { data, error } = useSWR(
    "https://mockend.com/Andrew-Wichmann/Fundraiser-Site/users/1",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <p>
        Andrew Wichmann, you pledged{" "}
        {
          <NumberFormat
            value={data.pledge}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        }{" "}
        for every effort point Andrew earns in his training, and a maximum of{" "}
        <NumberFormat
          value={data.maxPledge}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </p>
    </>
  );
}
