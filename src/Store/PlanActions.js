import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPlans = createAsyncThunk("get/getPlans", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('https://fit4sure.in/api/getPlans');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const getPlan = createAsyncThunk("get/getPlan", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.get(`https://fit4sure.in/api/getPlan/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const addPlan = createAsyncThunk("post/addPlan", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};
        const response = await axios.post('https://fit4sure.in/api/addPlan',data,config);
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});

const updatePlan = createAsyncThunk("update/updatePlan", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{'Content-Type': 'application/json'},withCredentials:true};
        const response = await axios.put(`https://fit4sure.in/api/updatePlan/${data.id}`,data.form,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});


const deletePlan = createAsyncThunk("delete/deletePlan", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.delete(`https://fit4sure.in/api/deletePlan/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export {getPlans, getPlan, addPlan, updatePlan,deletePlan};