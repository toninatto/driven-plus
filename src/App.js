
import GlobalStyles from "./Recursos/GlobalStyles/globalStyles.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Componentes/login.js";
import SignUp from "./Componentes/signUp.js";
import Subscriptions from "./Componentes/subscriptions.js";
import Home from "./Componentes/home.js";

export default function App () {

    return (
        <>
        
        <GlobalStyles>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/subscriptions" element={<Subscriptions /> } />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </GlobalStyles>
        
        </>
    )
}