import { RepositoriesContext } from "./../context/RepositoriesContext";
import { useCallback, useContext, useRef } from "react";
import { setQueryValue } from "../context/repositoriesActions";

export const useSearch = () => {
  const justMunted = useRef(true);
  const { state, dispatch } = useContext(RepositoriesContext);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(justMunted.current){
      justMunted.current = false
    }

    dispatch(setQueryValue(e.target.value));
  }, []);

  return {
    handleChange,
    searchValue: state.query,
    justMunted: justMunted.current,
  };
};
