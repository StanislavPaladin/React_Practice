import React, { useState } from "react";
import MyButton from "../components/UI/buttons/MyButton.jsx";
import MyInput from "../components/UI/inputs/MyInput.jsx";
const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", name: "" });
  const validatePost = () => {
      
  }
  const addNewPost = (e) => {
      e.preventDefault();
    if (post.title.trim() !== '' && post.name.trim() !== '') {
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: "", name: "" });
    } else {
        validatePost();
    }
   
  };
  return (
    <div>
      <form className="form">
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="post title"
          type="text"
        />
        <MyInput
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
          placeholder="post name"
          type="text"
        />
        <MyButton onClick={(e) => addNewPost(e)}>Make a post</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
