import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import UserContext from "../Context/UserContext";
import Fechar from "../Recursos/Img/fechar.png";


export default function Confirm ({plano, price, setVisible, body}) {

    const {token, setMembership} = useContext(UserContext);
    const navigate = useNavigate();

    function toggleVisible () {
        setVisible(false);
    }

    console.log(body)

    function registrar () {

        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post(
            "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
             body, config);
    
        promise.then((res) => {
            console.log(res.data.membership);
            setMembership(res.data.membership);
            navigate("/home")});
    
        promise.catch((err) => { console.log(err)});    
      }    

    return (
        <Container>
        <div className="confirmar" >
        <div className="fechar" onClick={toggleVisible}><img src={Fechar} alt="Fechar" /></div>
        <div className="mensagem"><p>Tem certeza que deseja assinar o plano</p><p> {plano} (R$ {price})?</p></div>
        <div className="botoes">
        <button onClick={toggleVisible}><span>Não</span></button>
        <div className="button" onClick={registrar}><span>SIM</span></div>
        </div>
        </div>            
        </Container>
    )};

const Container = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);
    width: 375px;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .confirmar {
        width: 248px;        
        background: #FFFFFF;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-inline: 22px;
        padding-top: 33px;
        padding-bottom: 11px;
        box-sizing: border-box;
    }
    .botoes {
        width: 100%;
        display: flex;
        justify-content: space-between;      
        margin-top: 47px;
    }
    .fechar {
        position: fixed;
        top: 25px;
        left: 327px;  
        z-index: 1;                  
    }
    button {
        width: 95px;
        height: 52px;
        border-radius: 8px;
        background-color: #CECECE;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
    .button {
        width: 95px;
        height: 52px;
        border-radius: 8px;
        background-color: #FF4791;
        display: flex;
        justify-content: center;
        align-items: center;        
    }
    p {
        font-family: 'Roboto';   
        font-weight: 700;        
        font-size: 18px;
        color: #000000;
        text-align: center;
    }
    span {
        font-family: 'Roboto';            
        font-size: 14px;
        color: #ffffff;
    }

`;
