import { useHistory } from "react-router-dom";
import { useEffectAfterMount } from "./useEffectAfterMount";

export const useRepositoriesEffects = (debouncedValue: string, setParams: any) => {
    const history = useHistory()

    useEffectAfterMount(() => {
        const url = setParams({ name: "q", value: debouncedValue });
        history.push(`?${url}`)
      }, [debouncedValue]);

      
}