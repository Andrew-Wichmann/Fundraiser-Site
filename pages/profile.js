import { getProfileData } from "lib/profileData";

import NumberFormat from "react-number-format";

export default function ({ pledge, maxPledge }) {
  return (
    <>
      <p>
        Andrew Wichmann, you pledged{" "}
        {
          <NumberFormat
            value={pledge}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        }{" "}
        for every effort point Andrew earns in his training, and a maximum of{" "}
        <NumberFormat
          value={maxPledge}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </p>
      ;
    </>
  );
}

export async function getServerSideProps(context) {
  const a = await getProfileData();
  return { props: a };
}
