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
    },
    {
      id: 4,
      country: "France",
      averageRating: 4.2
    }
  ]);
  const [filteredGovs, setFilteredGovs] = useState(govs);

  const handleQueryChange = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const length = searchQuery.length;
    const query = searchQuery.toLowerCase();

    const filteredGovs = [...govs].filter(
      gov => query === gov.country.slice(0, length).toLowerCase()
    );
    setFilteredGovs(filteredGovs);
  }, [searchQuery, govs]);

  return (
    <section>
      <Headline />
      <SearchBox
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
      />
      <GovsTable govs={filteredGovs} />
    </section>
  );
};

export default Govs;
