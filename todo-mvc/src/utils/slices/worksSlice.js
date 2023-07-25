import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    works: [],
    getId : 0,
    showCondition : 'All',
};

export const worksSlice = createSlice({
    name: "works",
    initialState,
    reducers: {
        addWork: (state,action) => {
            const preObj = {
                id : state.getId++,
                title : action.payload,
                isDone : false,
            }
            state.works.push(preObj);
        },
        deleteWork: (state,action) => {
            state.works = state.works.filter(work=>{
                return work.id !== action.payload
            })
        },
        toggleDoneWork: (state, action) => {
            state.works = state.works.map(work=>{
                if(work.id === action.payload)
                    work.isDone = !work.isDone;
                return work;
            })
        },
        changeShow : (state,action)=>{
            state.showCondition = action.payload;
        },
        deleteDoneWork : (state)=>{
            state.works = state.works.filter((work) => {
                return !work.isDone;
            });
        }
    },
});

// Action creators are generated for each case reducer function
export const { addWork, deleteWork, toggleDoneWork, changeShow,deleteDoneWork } = worksSlice.actions;

export default worksSlice.reducer;
