import { useEffect, useRef } from "react";

export const useEffectAfterMount = (effect: any, deps: Array<any>) => {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    
    if(effect){
      return effect();
    }
  }, deps);
};
