import { createSlice} from "@reduxjs/toolkit";



//Get user form localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState ={
    user:user ? user: null
}



export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
      reset: (state) => {
        state.user = null;
      },
        setReduxUser: (state, action) => {
          state.user = action.payload;
          localStorage.setItem('user',JSON.stringify(action.payload))
        },
        logout: (state,action)=>{
          state.user = null;
          localStorage.removeItem('user')
        }
    },
    
})


export const {reset ,setReduxUser,logout} = authSlice.actions
export default authSlice.reducer