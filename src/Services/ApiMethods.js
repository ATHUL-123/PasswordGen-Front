import { apiCall } from "./ApiCalls";
import { userUrl } from "../Const/Urls";

// @desc      Register
// @method    POST
export const Register = async (data) => {
    try {
        const response = await apiCall('post',userUrl.register, data);
        return response;
    } catch (error) {
        throw error; 
    }
};

// @desc      Register
// @method    POST
export const Login = async (data) => {
    try {
        const response = await apiCall('post',userUrl.login, data);
        return response;
    } catch (error) {
        throw error; 
    }
};

// @desc      Register
// @method    POST
export const GeneratePassword = async (data) => {
    try {
        const response = await apiCall('post',userUrl.generate, data);
        return response;
    } catch (error) {
        throw error; 
    }
};

// @desc      Register
// @method    POST
export const savePassword = async (data) => {
    try {
        const response = await apiCall('post',userUrl.savePassword, data);
        return response;
    } catch (error) {
        throw error; 
    }
};

// @desc      Register
// @method    POST
export const fetchSaved = async () => {
    try {
        const response = await apiCall('get',userUrl.fetchSaved);
        return response;
    } catch (error) {
        throw error; 
    }
};

// @desc      Register
// @method    POST
export const removeSaved = async (passId) => {
    try {
        
        const response = await apiCall('patch',userUrl.removeSaved(passId));
        return response;
    } catch (error) {
        throw error; 
    }
};