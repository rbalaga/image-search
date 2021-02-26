import { FETCH_IMAMGES_START, FETCH_IMAMGES_PENDING,FETCH_IMAGES_PAGE_LOAD, FETCH_IMAGES_COMPLETED } from './actions';

const initialState = {
  images: [],
  loading: false,
  pages: null
};


const reducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_IMAMGES_START:
    case FETCH_IMAMGES_PENDING:
      return { images: [], loading: true, total: 0, pages: 0 };
    case FETCH_IMAGES_PAGE_LOAD:
      return { ...state, loading: true };
    case FETCH_IMAGES_COMPLETED:
      const photos = action.payload;
      const images = [...state.images, ...photos.results];
      return { images, loading: false, total: photos.total, pages: photos.total_pages };
    default:
      return state;
  }
};

export default reducer;