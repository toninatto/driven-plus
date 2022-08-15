import GlobalStyles from "./Recursos/GlobalStyles/globalStyles.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from "./Context/UserContext.js";
import Login from "./Componentes/login.js";
import SignUp from "./Componentes/signUp.js";
import Subscriptions from "./Componentes/subscriptions.js";
import Home from "./Componentes/home.js";
import Plano from "./Componentes/Plano.js";

export default function App () {

    const tokenOnLocalStorage = localStorage.getItem("token");
    const [token, setToken] = useState(tokenOnLocalStorage);

    function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

    const userOnLocalStorage = localStorage.getItem("user");
    const [usuario, setUsuario] = useState(userOnLocalStorage);

    function setAndPersistUser(user) {
        const userSerializado = JSON.stringify(user);
        setUsuario(userSerializado);
        localStorage.setItem("user", userSerializado)
    }

    const membershipOnLocalStorage = localStorage.getItem("mship");
    const [membership, setMembership] = useState(membershipOnLocalStorage);
    
    function setAndPersistMembership (mship) {
        const mshipSerializado = JSON.stringify(mship);
        setMembership(mshipSerializado);
        localStorage.setItem("mship", mshipSerializado);
    }
    
    //const usuarioSerializado = JSON.stringify(usuario);
    //localStorage.setItem("user", usuarioSerializado);

    //const membershipSerializado = JSON.stringify(membership);
    //localStorage.setItem("mship", membershipSerializado);    
    
    const contextValue = {
         token, setToken,
         usuario, setUsuario,
         membership, setMembership,
         setAndPersistToken,
         setAndPersistUser,
         setAndPersistMembership        
        }

    return (
        <UserContext.Provider value={contextValue}>        
        <GlobalStyles>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/subscriptions" element={<Subscriptions /> } />
                    <Route path="/subscriptions/:id" element={<Plano />} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </GlobalStyles>        
        </UserContext.Provider>
    )
}