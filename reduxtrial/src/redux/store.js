import {configureStore} from  '@reduxjs/toolkit'

export const userSlice= createSlice(
    {
        name:'user',
        initialState:{
            name:'john',
            email:'john@gmail.com'
        },
    }
)