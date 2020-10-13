import { ISort } from './repositoriesActions.types';
import { RepositoriesActions } from './repositoriesActions.enum';

export const setQueryValue = (value: string) => {
    return {
        type: RepositoriesActions.SET_QUERY,
        payload: value
    }
}

export const setSortBy = (data: ISort) => {
    return{
        type: RepositoriesActions.SET_SORTBY,
        payload: data
    }
}