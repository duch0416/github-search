import { useQuery, useQueryCache } from "react-query"

import { getRepositoris } from './../connectors/repositories/connector/index';

export const useRepositories = (query: string, initValue: string) => {
    const cache = useQueryCache()
    const cachedData = cache.getQueryData(["repositories", {q: query ? query : initValue}])

    return useQuery(["repositories", {q: query ? query : initValue}], getRepositoris, {
        enabled: !cachedData && (query || initValue)
    })
}