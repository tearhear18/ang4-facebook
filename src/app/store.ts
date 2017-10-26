import { CREATE_POST } from './action';

export interface IAppState{
    post: object;
    type: any;
}

export const INITIAL_STATE: IAppState = {
    post:[],
    type:""
}
export function rootReducer(state,action){
    switch(action.type){
        case CREATE_POST:
        return action;
    }
    return state;

}


