import { createSlice} from '@reduxjs/toolkit'

const initialState ={
       searchUser:''
      
}

export const searchSlice = createSlice({
    name:'searchUsers',
    initialState,
    reducers:{ 
        userSearch :(state , action)=>{
            state.searchUser = action.payload;
            console.log(action.payload)
        }
     }
})

export const {userSearch } = searchSlice.actions
export default searchSlice.reducer