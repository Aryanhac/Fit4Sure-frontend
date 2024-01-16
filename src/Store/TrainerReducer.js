import { createSlice } from "@reduxjs/toolkit";
import {getTrainers, getTrainer, addTrainer, updateTrainer, assignTrainer} from "./TrainerActions";

const trainerSlice = createSlice({
    name: 'Trainer',
    initialState: { loading: false, error: false, success: false, trainer:[] },
    reducers: {
        clearError(state, action) {
            state.error = false;
        },
        clearSuccess: (state, action) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        // getTrainerList
        builder
            .addCase(getTrainers.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getTrainers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.trainer = action.payload.trainers
            })
            .addCase(getTrainers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // getTrainer
        builder
            .addCase(getTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.trainer = action.payload.trainers
            })
            .addCase(getTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // addTrainer
        builder
            .addCase(addTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
            })
            .addCase(addTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //updateTrainer
        builder
            .addCase(updateTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.trainer=action.payload.trainer;
            })
            .addCase(updateTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //assignTrainer
        builder
            .addCase(assignTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(assignTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.trainer = action.payload.trainer;
            })
            .addCase(assignTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


const trainerAction = trainerSlice.actions;

export {
    trainerAction,
    trainerSlice,
};
