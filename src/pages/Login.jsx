import React, { useContext } from 'react';
import MyButton from '../components/UI/buttons/MyButton';
import MyInput from '../components/UI/inputs/MyInput';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true);
    }
    
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='enter your login'></MyInput>
                <MyInput type="password" placeholder='enter your password'></MyInput>
                <MyButton >Login</MyButton>
            </form>
        </div>
    );
};

export default Login;