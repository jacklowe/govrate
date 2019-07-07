import React, { useState, useEffect } from "react";
import { getGovs } from "../services/govService";
import getPage from "../services/paginate";
import Headline from "./headline";
import GovsTable from "./govsTable";
import SearchBox from "./searchBox";

const Govs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [govs, setGovs] = useState([]);
  const [searchedGovs, setsearchedGovs] = useState([]);
  const [pagedGovs, setPagedGovs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLength = 5;

  const handleQueryChange = e => {
    setCurrentPage(1);
    setSearchQuery(e.target.value);
  };

  const maxPage = Math.ceil(searchedGovs.length / pageLength);
  const handlePageChange = newPage => {
    if (newPage < 1 || newPage > maxPage) return null;
    setCurrentPage(newPage);
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

    const searchedGovs = [...govs].filter(gov =>
      gov.country.toLowerCase().startsWith(query)
    );
    setsearchedGovs(searchedGovs);

    const pagedGovs = getPage(searchedGovs, currentPage, pageLength);

    setPagedGovs(pagedGovs);
  }, [searchQuery, currentPage, govs]);

  return (
    <section>
      <Headline />
      <SearchBox
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
      />
      <GovsTable govs={pagedGovs} />
      <ul>
        <li>
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        </li>
        <li>
          <button>{currentPage}</button>
        </li>
        <li>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Govs;
