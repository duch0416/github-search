import { useEffect, useRef } from "react";

export const useEffectAfterMount = (effect: any, deps: Array<any>) => {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun) {
      isFirstRun.current = false;
      return;
    }
    effect && effect();
  }, deps);
};
