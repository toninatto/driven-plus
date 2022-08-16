import Logo from "../Recursos/Img/logo_driven.png";
import styled from "styled-components";
import { useState, useContext } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../Context/UserContext";

export default function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setAndPersistToken, setAndPersistUser, setAndPersistMembership} = useContext(UserContext);

    function logar () {
    
        const body = {
            email: email,
            password: password
        };       
    
        const promise = axios.post(
            "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login",
            body);
            
        promise.then(res => {            
            setAndPersistUser(res.data);
            setAndPersistMembership(res.data.membership);
            setAndPersistToken(res.data.token);
            {res.data.membership ? navigate("/home") : navigate("/subscriptions")}            
        })
        
        promise.catch((err) => {alert("Algo deu errado. Tente novamente ou faça o seu cadastro.")})
    };

    return (        
        <Container>
        <img src={Logo} alt="Driven+"/>                
        <input type="text" placeholder="E-mail" value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <div className="button" onClick={logar}><span> ENTRAR </span></div>
        <Link to="/sign-Up"><p>Não possuí uma conta? Cadastre-se</p></Link>  
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin-bottom: 100px;        
    }
    input {
        height: 52px;
        width: 299px;
        border-radius: 8px;
        background-color: #ffffff;        
        padding-left: 14px;
        box-sizing: border-box;
        margin-bottom: 16px;
    }
    ::placeholder {
        font-family: 'Roboto';
        font-size: 14px;
        color: #7E7E7E;
    }
    .button {
        width: 298px;
        height: 52px;
        border-radius: 8px;
        background-color: #FF4791;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 24px;
    }
    span {
        font-family: 'Roboto';    
        font-weight: 700;
        font-size: 14px;
        color: #ffffff;
    }
    p {
        font-family: 'Roboto';
        font-size: 14px;
        color: #ffffff;
    }
`;