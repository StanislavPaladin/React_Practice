import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import PostService from "../API/PostService.js";
import PostFilter from "../components/PostFilter.jsx";
import PostForm from "../components/PostForm.jsx";
import PostList from "../components/PostList.jsx";
import MyButton from "../components/UI/buttons/MyButton.jsx";
import Loader from "../components/UI/loader/Loader.jsx";
import MyModal from "../components/UI/MyModal/MyModal.jsx";
import { usePosts } from "../hooks/usePost.js";
import { useFetching } from "../hooks/useFetching.js";

import "../styles/app.css";
import { getPageCount, getPagesArray } from "../utils/pages.js";
import Pagination from "../components/UI/Pagination/Pagination.jsx";
import { useObserver } from "../hooks/useObserver.js";
import MySelect from "../components/UI/select/MySelect.jsx";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  // post creation
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // deleting post
  const findAndDelete = (postId) => {
    const postToDelete = posts.findIndex((post) => post.id === postId);
    setPosts([
      ...posts.slice(0, postToDelete),
      ...posts.slice(postToDelete + 1, posts.length),
    ]);
  };
  //changing page and fetching posts
  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      {/* <MyButton style={{ marginTop: "10px" }} onClick={() => fetchPosts()}>
        GET POSTS
      </MyButton> */}
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
      value={limit}
      onChange={value => setLimit(value)}
      defaultValue={'К-во элементов на странице'}
      options={[
        {value: 5, name:'5'},
        {value: 10, name:'10'},
        {value: 15, name:'15'},
        {value: 20, name:'20'},
        {value: -1, name:'Показать все'}
      ]}
      />
      {postError && <h1>{postError}</h1>}
      <MyButton
        style={{ margin: "auto", width: "30%" }}
        onClick={() => setModal(true)}
      >
        Make a post
      </MyButton>
      {isPostsLoading && <Loader />}

      {sortedAndSearchedPosts.length !== 0 ? (
        <>
          <PostList
            findAndDelete={findAndDelete}
            posts={sortedAndSearchedPosts}
            title={"posts list"}
          />
          <div
            ref={lastElement}
            style={{ height: "20px", background: "red" }}
          ></div>
        </>
      ) : (
        <h1>{isPostsLoading ? "" : `Posts not found`}</h1>
      )}
      {/* <Pagination
        getPagesArray={getPagesArray}
        totalPages={totalPages}
        changePage={changePage}
        page={page}
      ></Pagination> */}
    </div>
  );
}

export default Posts;
