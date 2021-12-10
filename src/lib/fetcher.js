import axios from "axios";

export const fetcher = async (url) => {
    const res = await axios.get(url);
    const data = res.data;
    if (data.cod) {
        throw handleError(data);
    }
    return res.data;
};

const handleError = (error) => {
    return new Error(error.message);
};