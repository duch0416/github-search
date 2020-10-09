import { IParam } from "./../models/param.model";
import { useLocation } from "react-router-dom";

export const useParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const setParams = ({name, value}: IParam) => {
    searchParams.set(name, value);
  };

  const getParams = () => ({
      q: searchParams.get('q') || ''
  })
  
  return {
      setParams,
      getParams
  };
};
