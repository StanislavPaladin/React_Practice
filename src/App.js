import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter.jsx";
import PostForm from "./components/PostForm.jsx";
import PostList from "./components/PostList.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";

import "./styles/app.css"

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "JS", name: "c Description" },
    { id: 2, title: "Python", name: "a Description" },
    { id: 3, title: "PhP", name: "b Description" },
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})


  const sortedPosts = useMemo(()=> {
    if (filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  },[filter.sort, posts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const findAndDelete = (postId) => {
    const postToDelete = posts.findIndex(post => post.id === postId);
    setPosts([...posts.slice(0, postToDelete), ...posts.slice(postToDelete+1, posts.length)])
  }
  

  const sortedAndSearchedPosts = useMemo(() => {
    return  sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts])

  return (
    <div className="App">
      <MyModal>
        
      </MyModal>
        <PostForm create={createPost}/>
        <PostFilter
        filter={filter}
        setFilter={setFilter}
        />

        {sortedAndSearchedPosts.length !==0
        ?
        <PostList findAndDelete={findAndDelete} posts={sortedAndSearchedPosts} title={'posts list'}/> 
        :
        <h1>Posts not found</h1>}
        
    </div>
  );
}

export default App;
