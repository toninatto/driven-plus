import {useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp () {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function criarConta () {

        const body = {
            email: email,
	        name: name,
	        cpf: cpf,
	        password: password
        }
        
         const promise = axios.post(
             "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up",
             body);
        
         promise.then(navigate("/"))

         promise.catch(alert("Falha no cadastro. Tente novamente."))

    }
    

    return (
        <Container>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>        
        <div className="button" onClick={criarConta}><span> CADASTRAR </span></div>
        <Link to={"/"}><p>Já possui uma conta? Entre</p></Link>
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
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