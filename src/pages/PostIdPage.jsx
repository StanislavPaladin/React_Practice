import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";


const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getByid(id).then();
    setPost(response.data);
    console.log(post); 
  });

  const [fetchComments, isCommentsLoading, commError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data); 
    console.log(comments);
  });

  


  useEffect(() => {
    fetchPostById(params.id) 
    fetchComments(params.id)
  }, []);
  return (
    <div>
      <h1>Post id {params.id} info here</h1>
      {isLoading ? <Loader /> : <div className="">{post.title}</div>}
      <h1>Comments</h1>
      {isCommentsLoading
            ?<Loader/>
            :<div className="">
                {comments.map((comment) => 
                    <div key={comment.id} style={{marginTop:'15px'}}>
                        <h5>{comment.email}</h5>
                        <h5>{comment.name}</h5>
                        <div>
                            {comment.body} 
                        </div>
                    </div>
                )}
            </div>
    }
    </div>
  );
};

export default PostIdPage;
