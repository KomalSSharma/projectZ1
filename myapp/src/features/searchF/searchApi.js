import { rootApi } from "../api/rootApi";


export const searchApi = rootApi.injectEndpoints({
    endpoints: (builder)=>({      
        fetchUserSearch:builder.query({
            query:(name)=>`/search/users?q=${name}`,
        }),

    })
})

export const {useFetchUserSearchQuery} = searchApi