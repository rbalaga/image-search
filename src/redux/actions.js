import axios from "axios";

const axios_modified = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    'Accept-Version': 'v1'
  }
});

export const FETCH_IMAMGES_START = "FETCH_IMAMGES_START";
export const FETCH_IMAMGES_PENDING = "FETCH_IMAMGES_PENDING";
export const FETCH_IMAGES_COMPLETED = "FETCH_IMAGES_COMPLETED";
export const FETCH_IMAGES_PAGE_LOAD = "FETCH_IMAGES_PAGE_LOAD";

export const fetchImages = (search_key, pageCnt) => async dispatch => {
  const type = pageCnt > 1 ? FETCH_IMAGES_PAGE_LOAD : FETCH_IMAMGES_PENDING;
  dispatch({
    type,
    // type: FETCH_IMAMGES_PENDING, // : FETCH_IMAGES_PAGE_LOAD,
    payload: null
  });

  const response = await axios_modified.get("/search/photos", {
    params: {
      query: search_key,
      page: pageCnt
    }
  })

  dispatch({
    type: FETCH_IMAGES_COMPLETED,
    payload: response.data
  });

}