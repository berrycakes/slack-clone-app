import axios from 'axios';

// Create new axios instance
let axiosFetch =  axios.create({
    baseURL: `${process.env.REACT_APP_AVION_SLACK_API}`
})


// Connect to API to create a channel
export const channelCreate = async ({ name, user_ids }) => {
    let headers = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))
    
    try {
        const response = await axiosFetch.post(
            '/api/v1/channels', 
            {
                name, 
                user_ids },
            {
                headers: {
                    "access-token": headers['access-token'],
                    client: headers.client,
                    expiry: headers.expiry,
                    uid: headers.uid
                }
            })
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to get all channels
export const channelsGet = async ({ token, client, expiry, uid }) => {
    try {
        const response = await axiosFetch.get(
            '/api/v1/channels',
            {
                headers: {
                    "access-token": token,
                    client,
                    expiry,
                    uid
                }
            })
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to get all user-owned channels
export const channelsOwnedGet = async ({ token, client, expiry, uid }) => {
    try {
        const response = await axiosFetch.get(
            '/api/v1/channel/owned',
            {
                headers: {
                    "access-token": token,
                    client,
                    expiry,
                    uid
                }
            }
            )
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to get channel details via channel ID
export const channelDetailsGet = async ({channelId, headers: {token, client, expiry, uid}}) => {
    try {
        const response = await axiosFetch.get(
            `/api/v1/channels/${channelId}`,
            {
                headers: {
                    "access-token": token,
                    client,
                    expiry,
                    uid
                }
            })
        return response;
    } catch (error) {
        return error;
    }
}

// Connect to API to add members to a channel
export const channelAddMember = async ({channelId, member_id, headers:{token, client, expiry, uid}}) => {
    try {
        const response = await axiosFetch.get(
            `api/v1/channel/add_member`,
            {
                channelId,
                member_id
            },
            {
                headers: {
                    "access-token": token,
                    client,
                    expiry,
                    uid
                }
            })
        return response;
    } catch (error) {
        return error;
    }
}