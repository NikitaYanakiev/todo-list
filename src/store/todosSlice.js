import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    isEdit: false,
    data: [],
    editId: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await axios.get("https://dummyjson.com/todos?limit=10");
    return response.data.todos;
});

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.data.push({
                id: state.data.length + 1,
                todo: action.payload,
            });
        },
        deleteItem: (state, action) => {
            state.data = state.data.filter(
                (item) => item.id !== action.payload.id
            );
        },
        deleteAll: (state) => {
            state.data = [];
        },
        enterEditMode: (state, action) => {
            state.isEdit = true;
            state.editId = action.payload.id;
        },
        saveEdit: (state, action) => {
            state.data = state.data.map((item) =>
                item.id === state.editId ? { ...item, todo: action.payload } : item
            );
            state.isEdit = false;
            state.editId = null;
        },
        exitEditMode: (state) => {
            state.isEdit = false;
            state.editId = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchTodos.rejected, (state) => {
            state.isLoading = false;
            state.data = [];
        });
    },
});

export const { addItem, deleteItem, deleteAll, enterEditMode, saveEdit, exitEditMode } = todosSlice.actions;

export default todosSlice.reducer;
