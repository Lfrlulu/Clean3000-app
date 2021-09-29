
import { FILL_NOTICE } from "./types"


export const fillNotice = (id, clientName, serviceDate, comment, signTechnician, signClient) => {
    return {
        type: FILL_NOTICE,
        payload: {
            id,
            clientName,
            serviceDate,
            comment,
            signTechnician,
            signClient
        },
}
}