import { useReducer, useEffect } from "react";
import Pagination from "./Components/Pagination"
import Stories from "./Components/Stories";
import Search from "./Components/Search";
import { ContextApi } from "./Context/ContextApi";
import { reducer,initialState } from "./useReducer/UseReducer";
import "./App.css"

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let Api = "https://hn.algolia.com/api/v1/search?";

  const getNewsData = async (url) => {
    dispatch({type:"SET-LOADING"})
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getNewsData(`${Api}query=${state.query}&page=${state.page}`).then(
      (data) => {
        dispatch({
          type: "GET_DATA",
          payload: data
        });
      }
    );
  }, [state.query,state.page]);

  return (
    <ContextApi.Provider value={{ ...state, dispatch }}>
      <div>
        <Search/>
        <Pagination/>
        <Stories />
      </div>
    </ContextApi.Provider>
  );
};
export default App;
