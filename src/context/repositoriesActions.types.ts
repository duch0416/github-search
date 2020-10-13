import { RepositoriesActions } from "./repositoriesActions.enum";

export type IAction =
  | { type: RepositoriesActions.SET_QUERY; payload: string }
  | { type: RepositoriesActions.SET_SORTBY; payload: any };

export type ISort = {
  column: string;
  descending: boolean | undefined;
};
