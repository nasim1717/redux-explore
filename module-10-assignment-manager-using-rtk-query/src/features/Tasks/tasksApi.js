import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
        }),
        getEditTask: builder.query({
            query: (id) => `/tasks/${id}`,
        }),
        tasksStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: status
            }),
        }),
        addTask: builder.mutation({
            query: (data) => ({
                url: "/tasks",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const tasks = await queryFulfilled;
                    // console.log("task-->", tasks);
                    dispatch(apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
                        draft.push(tasks.data);
                    }))
                } catch (er) { }
            },
        }),
        editTask: builder.mutation({
            query: ({ id, tasks: data }) => ({
                url: `tasks/${id}`,
                method: "PATCH",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
                        const findeIndexed = draft.findIndex(task => task.id === result.data.id);
                        draft[findeIndexed] = result.data;
                    }))
                } catch (er) { console.log("erro", er) };
            }
        }),
        removeTasks: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = dispatch(apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
                    const deletedata = draft.filter(data => data.id !== arg);
                    return deletedata;
                }))

                try {
                    const removedata = await queryFulfilled;

                } catch (er) {
                    result.undo()
                }
            }
        })
    })
});

export const {
    useGetTasksQuery,
    useTasksStatusMutation,
    useAddTaskMutation,
    useRemoveTasksMutation,
    useEditTaskMutation,
    useGetEditTaskQuery
} = taskApi;