import React, { useState, useEffect } from "react";
import { getGovs } from "../services/govService";
import getPage from "../utils/paginate";
import Headline from "./Headline";
import GovsTable from "./GovsTable";
import SearchBox from "./SearchBox";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import "./Govs.css";

const Govs = () => {
  const [govs, setGovs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedGovs, setSearchedGovs] = useState([]);
  const [pagedGovs, setPagedGovs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLength = 6;

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
    setIsLoading(true);

    fetchGovs().then(g => {
      setGovs(g);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    const searchedGovs = [...govs].filter(gov =>
      gov.country.toLowerCase().startsWith(query)
    );
    setSearchedGovs(searchedGovs);

    const pagedGovs = getPage(searchedGovs, currentPage, pageLength);

    setPagedGovs(pagedGovs);
  }, [searchQuery, currentPage, govs]);

  const tableWithPagination = (
    <React.Fragment>
      <GovsTable govs={pagedGovs} searchQuery={searchQuery} />
      {searchedGovs[0] && (
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </React.Fragment>
  );

  return (
    <section className="Govs">
      <Headline />
      <SearchBox
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
      />
      {isLoading ? <Spinner /> : tableWithPagination}
    </section>
  );
};

export default Govs;
