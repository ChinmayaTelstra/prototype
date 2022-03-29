const initialState = {
    myorders : []
}

export const myOrdersReducer=(state=initialState , action)=>{

    switch (action.type)
    {
        case 'GET_MY_ORDERS' : return{
            ...state,
            myorders : action.payload
        }
        default : return state
    }
}