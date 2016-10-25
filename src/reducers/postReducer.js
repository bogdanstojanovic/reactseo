import * as postTypes from '../actions/postAction'

const INITIAL_STATE=[]

export default function postReducer(state=INITIAL_STATE,action){
    switch (action.type){
        
        case postTypes.GET_ALL_POSTS_FAILURE:
            return state;
        case postTypes.GET_ALL_POSTS_SUCCESS:
            return action.data;
        default: 
            return state;
    }
}