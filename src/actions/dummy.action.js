import { dummyConstants } from "../constant/dummy.constant";

export const updateItems = (payload) => {
    return {
        type: dummyConstants.UPDATE_ITEMS,
        payload: payload
    }
}