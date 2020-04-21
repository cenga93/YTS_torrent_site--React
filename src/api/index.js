import { API_URL } from "./url";

/* 
  API ENDPOINT PARAMETER: [sort_by]
  *-----------------------
    * -> sort_by = title
    * -> sort_by = year
    * -> sort_by = rating
    * -> sort_by = peers
    * -> sort_by = seeds
    * -> sort_by = download_count
    * -> sort_by = like_count
    * -> sort_by = date_added
  *-------------------------
*/

const fetchData = async (sort, limit) => {
  try {
    /*Fetching information from server and formating */
    let url = `${API_URL}?sort_by=${sort}&limit=${limit}`;
    const data = await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
    return data;
  } catch (error) {
    /* If not success fetch data from API, return Error */
    console.log(error);
  }
};

const searchFetch = async (search_field, quality, genre, rating, order_by, pageNumber) => {
  try {
    let url = `${API_URL}?query_term=${search_field}&quality=${quality}&minimum_rating=${rating}&genre=${genre}&sort_by=${order_by}&page=${pageNumber}`;
    const data = await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        return response;
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};

/* EXPORTING */
export { fetchData, searchFetch };
