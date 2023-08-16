import axios from "axios";

const baseUrl = "https://api.edamam.com/api/recipes/v2";

const API_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
const APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
const ACCESS_TYPE = import.meta.env.VITE_EDAMAM_ACESS_TYPE;



export const fetchData = async (queries: string[][] | '' | string) => {
  try {
    /**
     * query = mealType=breakfast&field=uri&field=label&field=image&field=totalTime
     */

    let query: string = '';
    if (typeof queries === 'string') {
      query = queries;
    } else {
      query =  queries
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&")
    }

    const url =`${baseUrl}?app_id=${APP_ID}&app_key=${API_KEY}&type=${ACCESS_TYPE}${query ? `&${query}` : ''}`;
    const response = await axios.get(url);
    return response.data.hits
        
  } catch (error) {
    throw new Error('Error fetching from fetchData recipes.');
  }

}



export const fetchInfiniteData = async (queries: string) => {
  try {

    let url = ''
    if (queries.length > 230 && queries.includes(baseUrl)) {
      url = queries  
    } else {
      url =`${baseUrl}?app_id=${APP_ID}&app_key=${API_KEY}&type=${ACCESS_TYPE}${queries ? `&${queries}` : ''}`;
    }
    const response = await axios.get(url);
    return {
      nextPage: response.data._links.next.href,
      recipe: response.data.hits
    }
        
  } catch (error) {
    throw new Error('Error fetching from fetchData recipes.');
  } 

}