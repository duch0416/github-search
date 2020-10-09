import {  useState } from "react";

import { useEffectAfterMount } from "./useEffectAfterMount";

export const useDebounceSearch = (value: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffectAfterMount(() => {
    const timer = setTimeout(() => {
      console.log("ok")
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debouncedValue;
};
