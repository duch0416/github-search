import React, { useEffect, useState } from "react";

import { Styles } from "../styles";
import RepositoriesList from "./RepositoriesList";
import RepositoriesSearch from "./RepositoriesSearch";
import { useDebounceSearch } from "../hooks/useDebounceSearch";
import { useRepositories } from "../hooks/useRepositories";
import { useParams } from "../hooks/useParams";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";
import { Params } from "../models/params.enum";

const Repositories: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const { getParams, setParams } = useParams();
  const debouncedValue = useDebounceSearch(searchValue);
  const { data } = useRepositories(debouncedValue, page);

  useEffectAfterMount(() => {
    setParams({ name: Params.QUERY, value: debouncedValue });
    const p = getParams()
    console.log(p)
  }, [debouncedValue]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
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
          data={data ? data.data.items : []}
        />
      </Styles>
      <button onClick={() => {}}>next page</button>
    </>
  );
};

export default Repositories;
