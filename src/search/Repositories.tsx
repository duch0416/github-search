import React, { useState } from "react";

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
  const { data, isLoading } = useRepositories(debouncedValue);
  useRepositoriesEffects(debouncedValue, setParams)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const p = getParams()
  console.log(p)

  return (
    <>
      <RepositoriesSearch onChange={handleChange} />
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
