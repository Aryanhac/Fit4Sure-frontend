import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const submitConsultancyForm = createAsyncThunk("post/submitConsultancyForm", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"}};
        const response = await axios.post('https://fit4sure.in/api/addConsultancyForm',data,config);
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});

const getConsultancyForms = createAsyncThunk("get/getConsultancyForms", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('https://fit4sure.in/api/getConsultancyForms',{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const getConsultancyForm = createAsyncThunk("get/getConsultancyForm", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.get(`https://fit4sure.in/api/getConsultancyForm/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const updateConsultancy = createAsyncThunk("update/updateConsultancy", async (id,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"multipart/form-data"},withCredentials:true};
        const response = await axios.put(`https://fit4sure.in/api/updateConsultancy/${id}`,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export {submitConsultancyForm, getConsultancyForms, getConsultancyForm, updateConsultancy};