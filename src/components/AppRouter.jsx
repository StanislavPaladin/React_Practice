import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Loader from "../components/UI/loader/Loader.jsx"

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <Loader/>
    }
return (
    <Routes>
    {isAuth
    ? <>
    <Route key={Route.path} path="/about" element={<About />} />
    <Route key={Route.path} path="/posts" exact element={<Posts />} />
    <Route key={Route.path} path="/posts/:id" exact element={<PostIdPage />} />
    <Route key={Route.path} path="*" element={<Error />} />
                </>
        
        : <>
        <Route key={Route.path} path="/login" exact element={<Login />} />
        <Route key={Route.path} path="*" element={<Login />} />
        </>
    }
    </Routes>
);
};

export default AppRouter;
