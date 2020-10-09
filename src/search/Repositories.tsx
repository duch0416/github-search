import React from "react";
import { useQuery } from "react-query";
import { getRepositoris } from "../connectors/repositories/connector";
import { useDelay } from "../hooks/useDelay";
import { Styles } from "../styles";
import RepositoriesList from "./RepositoriesList";
import RepositoriesSearch from "./RepositoriesSearch";

export interface RepositoriesProps {}

const Repositories: React.FC<RepositoriesProps> = () => {
  const { data } = useQuery(["repositories", { q: "tetris" }], getRepositoris, {
    enabled: true,
  });

  console.log(data);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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

  console.log(data?.data.items);

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
