import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState= {
    cart:[],
};

const prodcutReducer=(state =initialState , action)=>{
    const selectedId = state.cart.find((product)=>product._id === action.payload._id);

switch(action.type){
    case ADD_TO_CART:
        if(selectedId){
            const newCart= state.cart.filter(

                (product)=>product._id !== selectedId._id);

            selectedId.quantity= selectedId.quantity+1;

            return {
                ...state,
                cart:[...newCart,selectedId],
            };
        }
        return{
            ...state,
            cart:[...state.cart, {...action.payload, quantity: 1}],
        };
    case REMOVE_FROM_CART:
        if(selectedId.quantity >1){
            const newCart= state.cart.filter(

                (product)=>product._id !== selectedId._id);

            selectedId.quantity= selectedId.quantity -1;

            return {
                ...state,
                cart:[...newCart,selectedId],
            };
        }
        return{
            ...state,
            cart:state.cart.filter((product)=>product._id !== action.payload._id),
        };
    default:
        return state;
}
};

export default prodcutReducer;