import React from "react";
import MyButton from "./UI/buttons/MyButton";
const PostItem = ({post, number, findAndDelete}) => {  
    const getPostId = (e) => {
        e.preventDefault();
        findAndDelete(post.id)
    }
  return (
    <div className="post">
      <div className="post_content">
        <strong>{number}. {post.title}</strong>
        {post.name}
      </div>
      <div className="post-btns">
        <MyButton onClick={getPostId}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
