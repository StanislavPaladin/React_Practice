import React from "react";
import MyButton from "./UI/buttons/MyButton";
import { useNavigate } from "react-router-dom"

const PostItem = ({post, number, findAndDelete}) => {  
  const router = useNavigate();
    const getPostId = (e) => {
        e.preventDefault();
        findAndDelete(post.id)
    }
  return (
    <div className="post">
      <div className="post_content">
        <strong>{post.id}. {post.title}</strong>
        {post.body}
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${post.id}`)}>Show</MyButton>
        <MyButton onClick={getPostId} style={{border: '1px solid red', marginLeft:'10px', color: 'red'}}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
