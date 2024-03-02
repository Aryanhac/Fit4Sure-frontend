import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// for get OTP
const getOTP = createAsyncThunk("post/postGetLogin", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"}};
        const response = await axios.post(`https://fit4sure.in/api/getOTP`,data,config);
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});

// for get OTP
const otpVerification = createAsyncThunk("post/postOTPVerification", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"}, withCredentials: true};
        const response = await axios.post(`https://fit4sure.in/api/otpVerification`,data,config);
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});

// getting user after loading the page 
const loadUser = createAsyncThunk("get/getLoadUser", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get(`https://fit4sure.in/api/profile`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

//LogOut
const logOutUser= createAsyncThunk("get/getLogOut", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get(`https://fit4sure.in/api/logOut`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export {getOTP,otpVerification,loadUser,logOutUser}