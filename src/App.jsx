import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import {HomePage} from "./components/HomePage"
import { CatalogPage } from "./components/CatalogPage";
import { LoginPage } from "./components/LoginPage";
import { NavigationBar } from "./components/NavigationBar";
import { RegisterPage } from "./components/RegisterPage";
import { AddCardPage } from "./components/AddCardPage";
import { AuthContext } from "./contexts/authContext";
import { login, register, logout } from "./services/authService.js";
import { save, get, remove } from "./utils/sessionStorageHelper";
import { DetailsPage } from "./components/DetailsPage";
import { EditCardPage } from "./components/EditCardPage";
import { GuardedRoute } from "./utils/GuardedRoute";
import { RestrictedAccessPage } from "./components/RestrictedAccessPage";

function App() {
  const [token, setToken] = useState(() => {
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

    const authData = {
      name: data.email,
      token: data.accessToken,
      id: data._id,
      
    };
    setToken(authData);

    save(authData); //save to sessions storage
  };

  const onLogin = async (value) => {
    const data = await login(value);
    if (!data) {
      return navigate("/");
    }
    const authData = {
      name: data.email,
      token: data.accessToken,
      id: data._id
     
    };
    setToken(authData);
    save(authData);
  };

  const onLogout = async () => {
    await logout(token.token);
    remove();
    setToken("");
    navigate("/");
  };

  const auth = token !== null;

  return (
    <AuthContext.Provider value={{ token, onRegister, onLogin, onLogout }}>
      <div className="App h-full relative w-full">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog/:cardId" element={<DetailsPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/addcard"
            element={
              <GuardedRoute
                component={AddCardPage}
                defaultComponent={RestrictedAccessPage}
                auth={auth}
              />
            }
          />

          <Route
            path="/catalog/:cardId/edit"
            element={
              <GuardedRoute
                component={EditCardPage}
                defaultComponent={RestrictedAccessPage}
                auth={auth}
              />
            }
          />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
