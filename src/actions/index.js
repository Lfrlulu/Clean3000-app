import { ADD_NOTICE } from "./types"
import { FILL_NOTICE } from "./types"

export const addNotice = () => {
    return {
        type: ADD_NOTICE,
        payload: {
            id: "Notice-"+ Date.now(),
        },
    }
}

export const fillNotice = ({notice}) => {
    return {
        type: FILL_NOTICE,
        payload: notice
    }
}