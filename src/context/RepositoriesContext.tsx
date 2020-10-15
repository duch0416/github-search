import React, { createContext, useReducer, Dispatch,  } from "react";

import { repositoriesReducer } from './repositoriesReducer';


type IInitialState = {
  query: string;
  sort: {
    column: string;
    descending: boolean;
  };
};

export const initialState = {
  query: "",
  sort: {
    column: "",
    descending: false
  }
};


export const RepositoriesContext = createContext<{
    state: IInitialState;
    dispatch: Dispatch<any>;
}>({state: initialState, dispatch: () => null })

export const RepositoriesProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(repositoriesReducer, initialState);

    return(
        <RepositoriesContext.Provider value={{state, dispatch}}>
          {children}
        </RepositoriesContext.Provider>
    )
}


