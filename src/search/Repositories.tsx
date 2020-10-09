import React from "react";
import { useQuery } from "react-query";
import { getRepositoris } from "../connectors/repositories/connector";
import { useDelay } from "../hooks/useDelay";
import RepositoriesSearch from "./RepositoriesSearch";

export interface RepositoriesProps {}

const Repositories: React.FC<RepositoriesProps> = () => {
  const { data } = useQuery(["repositories", { q: "tetris" }], getRepositoris, {
    enabled: true,
  });

  console.log(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return <RepositoriesSearch onChange={handleChange}/>;
};

export default Repositories;
