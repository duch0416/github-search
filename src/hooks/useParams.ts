import { Params } from "./../models/params.enum";
import { IParam } from "./../models/param.model";
import { useLocation } from "react-router-dom";

export const useParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const setParams = ({ name, value }: IParam) => {
    searchParams.set(name, value);
    return searchParams.toString()
  };

  const getParams = () => ({
    q: searchParams.get(Params.QUERY) || "",
    column: searchParams.get(Params.COLUMN) || "",
    descending: searchParams.get(Params.DESCENDING) || "",
  });

  return {
    setParams,
    getParams,
  };
};
