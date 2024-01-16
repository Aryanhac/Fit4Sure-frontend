import {configureStore} from '@reduxjs/toolkit';
import {createConsultancySlice, adminConsultancySlice} from './ConsultancyReducer';
import {trainerSlice} from './TrainerReducer';

const store = configureStore({
    reducer:{
        createConsultancy: createConsultancySlice.reducer,
        adminConsultancy: adminConsultancySlice.reducer,
        trainer: trainerSlice.reducer 
    }
});
export default store;