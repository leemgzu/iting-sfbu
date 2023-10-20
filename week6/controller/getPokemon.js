import axios from "axios";


export const getPokemon = async (pokemon) => {

    const locationUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const locationResponse = await axios.get(locationUrl); //bc axios is an async library
    console.log(locationResponse?.data);
    return {"zip_code": locationResponse?.data?.zip_code}; //use ? to handle undefine
}   