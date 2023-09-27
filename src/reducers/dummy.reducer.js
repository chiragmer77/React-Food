import { dummyConstants } from "../constant";

const initialState = {
    items : [
        {id: 1, name: "Item1", price: 10, selected: false},
        {id: 2, name: "Item2", price: 12, selected: false},
        {id: 3, name: "Item3", price: 13, selected: false},
        {id: 4, name: "Item4", price: 14, selected: false}
    ]
}

export function dummy(state = initialState, action ){
    switch(action.type) {
case  dummyConstants.UPDATE_ITEMS:
    return {
        ...state,
        items: action.payload
    };
    default:
        return state
    }
}