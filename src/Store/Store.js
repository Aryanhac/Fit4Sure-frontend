import {configureStore} from '@reduxjs/toolkit';
import {createConsultancySlice, adminConsultancySlice} from './ConsultancyReducer';
import {trainerSlice} from './TrainerReducer';
import { userSlice } from './UserReducer';

const store = configureStore({
    reducer:{
        createConsultancy: createConsultancySlice.reducer,
        adminConsultancy: adminConsultancySlice.reducer,
        trainer: trainerSlice.reducer ,
        user: userSlice.reducer
    }
});
export default store;