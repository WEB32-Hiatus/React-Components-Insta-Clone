//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummydata from '../../dummy-data';
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const [data] = useState(dummydata);
  return (
    <div className="posts-container-wrapper">
      {data.map(item => (
        <Post post = {item} />
      ))};
    </div>
  );
};

export default PostsPage;
