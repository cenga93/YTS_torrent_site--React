import { API_URL } from "./url";

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
/* EXPORTING */
export { fetchData };
