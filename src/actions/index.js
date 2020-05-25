export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

export const addNewFeature = item => {
    return {
        type: ADD_NEW_FEATURE,
        payload: item
    }
}

export const deleteFeature = item => {
    return {
        type: DELETE_FEATURE,
        payload: item
    }
}