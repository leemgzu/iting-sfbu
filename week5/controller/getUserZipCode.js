import axios from "axios";


export const getUserZipCode = async (userIP) => {
    const apiKey = process.env.API_KEY_IPLOCATION;
    const locationUrl = `https://api.ip2location.io/?key=${apiKey}&ip=${userIP}`;
    const locationResponse = await axios.get(locationUrl); //bc axios is an async library
    console.log(locationResponse?.data);
    return {"zip_code": locationResponse?.data?.zip_code}; //use ? to handle undefine
}   