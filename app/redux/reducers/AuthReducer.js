
import {
    LOGIN_ACTION_SUCCESS,
    LOGIN_ACTION_ERROR,
    SINGUP_ACTION_SUCCESS,
    SINGUP_ACTION_ERROR,
} from '../actions/ActionTypes';



export const authReducer = (state = {}, action) => {
    switch(action.type){
        case LOGIN_ACTION_SUCCESS:
            return{
                user: action.user,
                success: true,
            };
        case LOGIN_ACTION_ERROR:
            return{
                success: false,
            };
        case SINGUP_ACTION_SUCCESS:
            return{
                user: action.user,
                success: true,
            };
        case SINGUP_ACTION_ERROR:
            return{
                success: false,
            };

        default:
            return state;
    }
};
  