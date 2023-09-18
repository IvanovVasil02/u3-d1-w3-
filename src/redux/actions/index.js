export const GET_QUERY_RESULT = "GET_QUERY_RESULT";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITE";

export const getQueryResult = (data) => ({ type: GET_QUERY_RESULT, payload: data });
export const addToFavorites = (company) => ({ type: ADD_TO_FAVORITES, payload: company });
export const removoreFromFavorites = (company) => ({ type: REMOVE_FROM_FAVORITES, payload: company });

export const getJobsData = (query) => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        dispatch({ type: GET_QUERY_RESULT, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
