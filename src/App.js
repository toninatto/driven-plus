
import GlobalStyles from "./Recursos/GlobalStyles/globalStyles.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import UserContext from "./Context/UserContext.js";
import Login from "./Componentes/login.js";
import SignUp from "./Componentes/signUp.js";
import Subscriptions from "./Componentes/subscriptions.js";
import Home from "./Componentes/home.js";
import Plano from "./Componentes/Plano.js";

export default function App () {

    const [token, setToken] = useState('');

    return (
        <UserContext.Provider value={{token, setToken}}>        
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