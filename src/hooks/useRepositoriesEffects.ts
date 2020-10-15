import { Params } from "./../models/params.enum";
import { ISort } from "./../context/repositoriesActions.types";
import { useHistory } from "react-router-dom";
import { useEffectAfterMount } from "./useEffectAfterMount";

export const useRepositoriesEffects = (
  debouncedValue: string,
  sortBy: ISort,
  setParams: any
) => {
  const history = useHistory();

  useEffectAfterMount(() => {
    const url = setParams({ name: Params.QUERY, value: debouncedValue });
    history.push(`?${url}`);
  }, [debouncedValue]);

  useEffectAfterMount(() => {
    setParams({ name: Params.COLUMN, value: sortBy?.column });
    const url = setParams({
      name: Params.DESCENDING,
      value: sortBy?.descending,
    });
    history.push(`?${url}`);
  }, [sortBy]);
};
