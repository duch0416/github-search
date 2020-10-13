import React, { useEffect, useState } from "react";
import {queryCache, useQueryCache} from "react-query"

import { Styles } from "../styles/tableStyles";
import RepositoriesList from "./RepositoriesList";
import RepositoriesSearch from "./RepositoriesSearch";
import { useDebounceSearch } from "../hooks/useDebounceSearch";
import { useRepositories } from "../hooks/useRepositories";
import { useParams } from "../hooks/useParams";
import { columns } from "../columns";
import { useRepositoriesEffects } from "../hooks/useRepositoriesEffects";

const Repositories: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getParams, setParams } = useParams();
  const debouncedValue = useDebounceSearch(searchValue);
  const p = getParams()
  const { data, isLoading } = useRepositories(debouncedValue, p.q);
  useRepositoriesEffects(debouncedValue, setParams)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <RepositoriesSearch onChange={handleChange} value={searchValue}/>
      <Styles>
        <RepositoriesList
          columns={columns}
          data={data ? data.data.items : []}
        />
      </Styles>
    </>
  );
};

export default Repositories;
