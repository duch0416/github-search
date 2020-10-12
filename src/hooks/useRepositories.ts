import { useQuery } from "react-query"

import { getRepositoris } from './../connectors/repositories/connector/index';

export const useRepositories = (query: string) => {
    return useQuery(["repositories", {q: query}], getRepositoris, {
        enabled: query
    })
}