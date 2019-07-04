import React, { useState } from "react";
import Headline from "./headline";
import GovsTable from "./govsTable";
import SearchBox from "./searchBox";

const Govs = () => {
  const [govs, setGovs] = useState([
    {
      id: 1,
      country: "UK",
      averageRating: 3.2
    },
    {
      id: 2,
      country: "USA",
      averageRating: 3.2
    },
    {
      id: 3,
      country: "Germany",
      averageRating: 3.2
    }
  ]);

  return (
    <section>
      <Headline />
      <SearchBox />
      <GovsTable govs={govs} />
    </section>
  );
};

export default Govs;
