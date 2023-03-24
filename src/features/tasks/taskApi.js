import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
      providesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        url: `/tasks/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      //   try {
      //     const task = await queryFulfilled;
      //     // console.log(task?.data);
      //     if (task?.data) {
      //       console.log("hi");
      //       dispatch(
      //         apiSlice.util.updateQueryData("getTasks", (draft) =>
      //           draft.push(task.data)
      //         )
      //       );
      //     }
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useAddTaskMutation,
} = taskApi;
