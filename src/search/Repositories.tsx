import React, { useState } from "react";
import { useDebounceSearch } from "../hooks/useDebounceSearch";

import { Styles } from "../styles";
import RepositoriesList from "./RepositoriesList";
import RepositoriesSearch from "./RepositoriesSearch";

export interface RepositoriesProps {}

const Repositories: React.FC<RepositoriesProps> = () => {
  const [searchValue, setSearchValue] = useState("")
  const debouncedValue = useDebounceSearch(searchValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Owner",
        accessor: "owner.login",
      },
      {
        Header: "Stars",
        accessor: "stargazers_count",
      },
      {
        Header: "Created at",
        accessor: "created_at",
      },
    ],
    []
  );



  return (
    <>
      <RepositoriesSearch onChange={handleChange} />
      <Styles>
        <RepositoriesList
          columns={columns}
          data={[]}
        />
      </Styles>
    </>
  );
};

export default Repositories;
