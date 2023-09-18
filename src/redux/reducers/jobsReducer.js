import { GET_QUERY_RESULT } from "../actions";

const initialState = {
  content: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUERY_RESULT:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default jobsReducer;
