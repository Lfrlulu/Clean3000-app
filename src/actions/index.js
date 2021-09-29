import { ADD_NOTICE } from "./types"

export const addNotice = () => {
    return {
        type: ADD_NOTICE,
        payload: {
            id: "Notice-"+ Date.now(),
        },
    }
}