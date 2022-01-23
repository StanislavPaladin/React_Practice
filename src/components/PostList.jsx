import React from "react";
import { TransitionGroup,CSSTransition } from "react-transition-group";
import PostItem from "../components/PostItem";

const PostList = ({ title, posts, findAndDelete }) => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1> {title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <PostItem
              findAndDelete={findAndDelete}
              number={index + 1}
              post={post}
              key={post.id}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
