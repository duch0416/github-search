import React, { useContext, useEffect } from "react";

import { Styles } from "../styles/tableStyles";
import RepositoriesList from "./RepositoriesList";
import RepositoriesSearch from "./RepositoriesSearch";
import { useDebounceSearch } from "../hooks/useDebounceSearch";
import { useRepositories } from "../hooks/useRepositories";
import { useParams } from "../hooks/useParams";
import { columns } from "../columns";
import { useRepositoriesEffects } from "../hooks/useRepositoriesEffects";
import { useSearch } from "../hooks/useSearch";
import { RepositoriesContext } from "../context/RepositoriesContext";
import { LoadingIndicator, SearchMessage, Wrapper } from "../styles/repositoriesWrapper";
import { setQueryValue } from "../context/repositoriesActions";

const Repositories: React.FC = () => {
  const { state, dispatch } = useContext(RepositoriesContext);
  const { handleChange, searchValue, justMunted } = useSearch();
  const { getParams, setParams } = useParams();
  const debouncedValue = useDebounceSearch(searchValue);
  const p = getParams();
  const { data, isLoading, isError } = useRepositories(debouncedValue, p.q);
  useRepositoriesEffects(debouncedValue, state.sort, setParams);

  useEffect(() => {
    if(!state.query && p.q){
      dispatch(setQueryValue(p.q))
    }
  },[])

  return (
    <Wrapper>
      <RepositoriesSearch
        onChange={handleChange}
        value={justMunted ? p.q : searchValue}
      />
      {!data && !isLoading && <SearchMessage>Search for repositories</SearchMessage>}
      {isError && <span>Error</span>}
      {isLoading && <LoadingIndicator>Loading</LoadingIndicator>}
      {data && !isLoading && (
        <Styles>
          <RepositoriesList
            columns={columns}
            data={data ? data.data.items : []}
            column={p.column ? p.column : ""}
            descending={p.descending === "true" ? true : false}
            dispatch={dispatch}
          />
        </Styles>
      )}
    </Wrapper>
  );
};

export default Repositories;
