import React from "react";
import Headline from "./headline";
import GovsTable from "./govsTable";
import SearchBox from "./common/searchBox";

const Govs = () => {
  return (
    <section>
      <Headline />
      <SearchBox />
      <GovsTable />
    </section>
  );
};

export default Govs;
