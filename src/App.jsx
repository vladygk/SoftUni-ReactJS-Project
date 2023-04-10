import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import {useState} from 'react';
import { HomePage } from "./components/HomePage/HomePage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { AddCardPage } from "./components/AddCardPage/AddCardPage";
import { FavoriteCardsPage } from "./components/FavoriteCardsPage/FavoriteCardsPage";
import { AuthContext } from "./contexts/authContext";
import {login,register,logout} from "./services/authService.js"
import {save,get,remove} from "./utils/sessionStorageHelper";

function App() {
  const [token,setToken] = useState(()=>{
    return get();
  });
  const navigate = useNavigate();

  const onRegister = async (value) => {
      if (value.password !== value.repassword) {
          return;
      }
      
  const data = await register({
    username: value.username,
    password: value.password,
  });

  const authData = {name:data.email,token:data.accessToken, id:data._id};
  setToken(authData);

  save( authData); //save to sessions storage

  

};

const onLogin = async (value)=>{

   const data = await login(value);
   if(!data){
    return navigate('/');
   }
   const authData = {name:data.email,token:data.accessToken, id:data._id};
   setToken(authData);
   save( authData);
}


const onLogout = async ()=>{

  await logout(token.token);
  remove();
  setToken('');
  navigate('/');

}

  return (
    <AuthContext.Provider value={{token,onRegister,onLogin,onLogout}}>
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:cardId" element={<div>ehehe</div> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element = {<RegisterPage/>} />
        <Route path="/addcard" element = {<AddCardPage/>}/>
        <Route path="/favorite" element = {<FavoriteCardsPage/>}/>
      </Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
