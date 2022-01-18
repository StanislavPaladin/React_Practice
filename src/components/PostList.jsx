import React from "react";
import PostItem from "../components/PostItem"

const PostList = ({title, posts, findAndDelete}) => {
 
  return (
    <div>
        <h1> {title}</h1>
       
      {posts.map((post, index) => (
        <PostItem findAndDelete={findAndDelete} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
