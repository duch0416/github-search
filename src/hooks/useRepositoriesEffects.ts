import { Params } from "../models/params.enum";
import { useEffectAfterMount } from "./useEffectAfterMount";


export const useRepositoriesEffects = (debouncedValue: string, setParams: any) => {
    useEffectAfterMount(() => {
        setParams({ name: Params.QUERY, value: debouncedValue });
      }, [debouncedValue]);

      
}