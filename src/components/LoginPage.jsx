import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";

import { AuthContext } from "../contexts/authContext.jsx";
export const LoginPage = () =>{
const [value,setValue] = useState({
    username:'',
    password:'',
});

const [error,setError] = useState({
    username:false,
    password:false,
});

const constraints = {
    username:/[A-Za-z0-9!\-\_']{3,20}/g,
    password:/[A-Za-z0-9\-\_?!.#$].{5,30}/g
};

const checkForError = (e)=>{
    if(!constraints[e.target.name].test(e.target.value)){
        setError(state=>({...state,[e.target.name]:true}))
    }else{
        setError(state=>({...state,[e.target.name]:false}))
    }
}

const navigate = useNavigate();
const {token,onLogin} = useContext(AuthContext);

const onChange = (e)=>{
    setValue(state=>({...state,[e.target.name]:e.target.value}))

}
const onLoginHandler = ()=>{

    if(Object.values(error).some(x=>x) 
    ||Object.values(value).some(x=>x==="") ){
        return;
    }
    
    onLogin(value);
    navigate('/');
} 


    return(
        <section className=" dark:bg-gray-900 mt-2">
        <div className="flex flex-col items-center justify-start px-6 py-8 mx-auto  lg:py-0">
          
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6 " method="POST">
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input onBlur={checkForError} onChange={onChange} name='username' value={value.username} type="text"  id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesho Peshov" required=""/>
                            {error.username&& <p className=" absolute text-lg text-red-600">Error</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input onBlur={checkForError} onChange={onChange} name='password' value={value.password} type="password"   id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            {error.password&& <p className=" absolute text-lg text-red-600">Error</p>}
                        </div>
                       <input onClick={onLoginHandler} className=" pr-1 pl-1 border-solid border-2 md:text-2xl font-bold text-gray-900 dark:text-white border-gray-300 bg-gray-50 rounded" type="button" value="Sign in"/>
                        
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
}