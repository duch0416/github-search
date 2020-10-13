import { IAction } from "./repositoriesActions.types";
import { RepositoriesActions } from "./repositoriesActions.enum";
import { initialState } from "./RepositoriesContext";

export const repositoriesReducer = (state = initialState, action: IAction) => {
  const { type } = action;
  switch (type) {
    case RepositoriesActions.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case RepositoriesActions.SET_SORTBY:
      return {
        ...state,
        sort: action.payload
      }  
    default:
      return state;
  }
};
