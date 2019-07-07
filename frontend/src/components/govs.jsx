import React, { useState, useEffect } from "react";
import { getGovs } from "../services/govService";
import Headline from "./headline";
import GovsTable from "./govsTable";
import SearchBox from "./searchBox";

const Govs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [govs, setGovs] = useState([]);
  const [filteredGovs, setFilteredGovs] = useState(govs);

  const handleQueryChange = e => {
    setSearchQuery(e.target.value);
  };

  const fetchGovs = async () => {
    const { data } = await getGovs();
    return data;
  };

  useEffect(() => {
    fetchGovs().then(g => setGovs(g));
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    const filteredGovs = [...govs].filter(gov =>
      gov.country.toLowerCase().startsWith(query)
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
