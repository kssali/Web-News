export const initialState = {
  isLoading: true,
  query: "",
  page: 0,
  nbPages: 0,
  hits: [],
};

export const reducer = (prevState, action) => {
  switch (action.type) {
    case "SET-LOADING":
      return{
...prevState,
isLoading:true
      }
    case "GET_DATA":
      return {
        ...prevState,
        isLoading:false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE":
      return {
        ...prevState,
        hits: prevState.hits.filter((currEl) => {
          return currEl.objectID !== action.payload;
        }),
      };

    // let filteredHit = prevState.hits.filter(
    //   (data) => data.objectID !== action.payload
    // );
    // return {
    //   ...prevState,
    //   hits: filteredHit
    // };

    case "SEARCH-ITEM":
      return {
        ...prevState,
        query: action.payload,
      };
    case "NEXT-PAGE":
      let pageNumIncrement = prevState.page+1;
      if (pageNumIncrement >= prevState.nbPages) {
        pageNumIncrement = 0;
      }

      return {
        ...prevState,
        page: pageNumIncrement,
      };
    case "PREV-PAGE":
      let pageNum = prevState.page;
      if (pageNum <= 0) {
        pageNum = 0;
      } else {
        pageNum = pageNum - 1;
      }
      return {
        ...prevState,
        page: pageNum,
      };

    default:
      return prevState;
  }
};
