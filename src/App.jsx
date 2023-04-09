import "./App.css";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "./components/HomePage/HomePage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { AddCardPage } from "./components/AddCardPage/AddCardPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element = {<RegisterPage/>} />
        <Route path="/addcard" element = {<AddCardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
