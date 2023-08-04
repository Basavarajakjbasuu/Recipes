import axios from "axios";
import { Recipe } from "../types";

const baseUrl = "https://api.edamam.com/api/recipes/v2";

const API_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
const APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
const ACCESS_TYPE = import.meta.env.VITE_EDAMAM_ACESS_TYPE;



export const fetchData = async (queries: string[][] | '' | string): Promise<Recipe> => {
  try {
    /**
     * query = mealType=breakfast&field=uri&field=label&field=image&field=totalTime
     */
    let query: string;
    if (typeof queries === 'string') {
      query = queries;
    } else {
      query =  queries
      ? queries
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`) 
        .join("&")
      : "";
    }

    const url = `${baseUrl}?app_id=${APP_ID}&app_key=${API_KEY}&type=${ACCESS_TYPE}${query ? `&${query}` : ''}`;

    const response = await axios.get(url);
    return response.data.hits;

  } catch (error) {
    throw new Error('Error fetching from fetchData recipes.');
  } 

}

export const fetchURLData = async (query: string): Promise<Recipe> => {
  try {
    /**
     * query = mealType=breakfast&field=uri&field=label&field=image&field=totalTime
     */
    
    const url = `${baseUrl}?app_id=${APP_ID}&app_key=${API_KEY}&type=${ACCESS_TYPE}${query ? `&${query}` : ''}`;
    console.log(url)
    const response = await axios.get(url);
    return response.data.hits;

  } catch (error) {
    throw new Error('Error fetching recipes.');
  } 

}
