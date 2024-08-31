import { apiSlice } from "../../../core/api/api_slice";

const branchApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBranches: builder.query({
            query: () => ({
                url: `/branch`,
                method: "GET",
                params: { lang: `en` },
            }),
        }),
        getBranchById: builder.query({
            query: (id: string) => ({
                url: `/branches/${id}`,
                method: "GET",
            }),
        }),
        createBranch: builder.mutation({
            query: (body: any) => ({
                url: `/branch`,
                method: "POST",
                body,
                params: { lang: `ar` }, 
            }),
        }),
        deleteBranch: builder.mutation({
            query: (id: string) => ({
                url: `/branches/${id}`,
                method: "DELETE",
            }),
        }),
        updateBranch: builder.mutation({
            query: ({ body, id }: { body: any; id: string }) => ({
                url: `/branches/${id}`,
                method: "PATCH",
                body,
            }),
        }),
    }),
});

export const {
    useGetAllBranchesQuery,
    useGetBranchByIdQuery,
    useCreateBranchMutation,
    useUpdateBranchMutation,
    useDeleteBranchMutation,
} = branchApi;
