import { ADD_NOTICE } from "../actions/types";

const initialState = {
    notices : [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type){
        case ADD_NOTICE:
            return{
                notices: [...state.notices, action.payload]
            };

        default:
            return state;
    }
}