import axios from "axios";
const baseUrl = process.env.BASE_URL;

export const createNewUser = async(url, data, token) => {
    const res = await axios.post(`${baseUrl}/api/${url}`, {
        name: data.name,
        email: data.email,
        password: data.password,
    }, {
        headers: {
          'Authorization': `Basic ${token}` 
        }
       })

    if(res.status !== 200){
        return new Error({message: "Internal Server Error"})
    }

    const resData = await res.data;
    return resData;
}

export const getData = async (url) => {
    const res = await axios.get(`${baseUrl}/api/${url}`);
    if(res.status !== 200){
        return new Error({ message: "Unable To Fetch Book From Given ID" })
    }

    const data = await res.data?.products
    return data;
}

export const getBookFromId = async (url) => {
    const res = await axios.get(`${baseUrl}/api/${url}`);
    if(res.status !== 200){
        return new Error({message: "Unable To Fetch Book From Given ID"})
    }
    const data = await res.data;
    return data.product;
}

export const postData = async(url, userData, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: "POST",
        headers: {
            "Authorization": token,
        },
        body: JSON.stringify(userData)
    });

    const data = await res.json();
    return data;
}

export const patchData = async(url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
        },
        body: JSON.stringify(post)
    });

    const data = await res.json();
    return data;
}

export const deletData = async(url) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: "DELET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();
    return data;
}