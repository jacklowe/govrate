import React, { useState, useEffect } from "react";
import Headline from "./headline";
import GovsTable from "./govsTable";
import SearchBox from "./searchBox";

const Govs = () => {
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleQueryChange = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <section>
      <Headline />
      <SearchBox
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
      />
      <GovsTable govs={govs} />
    </section>
  );
};

export default Govs;
