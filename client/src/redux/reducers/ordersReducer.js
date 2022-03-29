const initialState = {
    orders : []
}

export const ordersReducer=(state=initialState , action)=>{

     
    switch (action.type)
    {
        case 'GET_ALL_ORDERS' : return{
            ...state,
            orders : action.payload
        }
        default : return state
    }
}