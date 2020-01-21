const initialState = {
    loading:false,
    error:"",
    news:null

};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
        return { ...state, loading: true };
    case 'NEWS_RECEIVED':
            return { ...state, news: action.json[0], loading: false }
    case "NEWS_REQUEST_FAILED":
        return{...state, error:action.error.message}
    default: {
      return state;
    }
  }
};
