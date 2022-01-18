import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter.jsx";
import PostForm from "./components/PostForm.jsx";
import PostList from "./components/PostList.jsx";
import MyButton from "./components/UI/buttons/MyButton.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";


import "./styles/app.css"

function App() {
// initial posts array
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", name: "c Description" },
    { id: 2, title: "Python", name: "a Description" },
    { id: 3, title: "PhP", name: "b Description" },
  ])
// statement
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  // posts sorting
  const sortedPosts = useMemo(()=> {
    if (filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  },[filter.sort, posts])
// post creation
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  // deleting post
  const findAndDelete = (postId) => {
    const postToDelete = posts.findIndex(post => post.id === postId);
    setPosts([...posts.slice(0, postToDelete), ...posts.slice(postToDelete+1, posts.length)])
  }
  
  // searching
  const sortedAndSearchedPosts = useMemo(() => {
    return  sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts])

  return (
    <div className="App">
      
      <MyModal 
      visible={modal}
      setVisible={setModal}
      >
      <PostForm create={createPost}/>
      </MyModal>
        
        <PostFilter
        filter={filter}
        setFilter={setFilter}
        />
        
        {sortedAndSearchedPosts.length !==0
        ?
        <PostList findAndDelete={findAndDelete} posts={sortedAndSearchedPosts} title={'posts list'}/> 
        :
        <h1>Posts not found</h1>}
        <MyButton style={{margin: 'auto', width: '30%'}} onClick={() => setModal(true)}>
        Make a post
      </MyButton>
    </div>
  );
}

export default App;
