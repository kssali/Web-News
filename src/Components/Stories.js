import React, { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";

const Stories = () => {
  const {isLoading, hits, dispatch } = useContext(ContextApi);


//remove post function
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id
    });
  };

  //isLoading
  if(isLoading){
    return(
    
    <div className="loading">
      
<h2>Loading....</h2>
    </div>
      
    )
  }

  return (
    <div className="stories-div">
    
      {hits?.map((currEl) => {
        const { title, author, objectID, url, num_comments } = currEl;
        return (
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
              By
              <span>{author}</span>|<span>{num_comments}</span>comments
            </p>
            <div className="card-button">
              <a href={url} target="_blank">
                Read More
              </a>
              <a href="#" onClick={() => removeItem(objectID)}>
                Remove
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
