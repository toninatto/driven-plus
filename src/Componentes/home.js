import styled from "styled-components";
import { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import UserContext from "../Context/UserContext";
import axios from "axios";
import UserIcon from "../Recursos/Img/usuario.png";

export default function Home () {

    const {token, usuario, membership} = useContext(UserContext);
    const navigate = useNavigate();

    console.log(usuario);  
    console.log(membership);

    const listaBeneficio = membership.perks.map((perk) => (
                <button><a href={perk.link}>{perk.title}</a></button>
    ));

    function deletarPlano () {
        
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.delete(
            "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", 
            config);
    
        promise.then((res) => {navigate("/subscriptions")});
    
        promise.catch((err) => { console.log(err)});
    }

    return(
        <Container>
            <div className="img-plano"><img src={membership.image} alt={membership.name} /></div>
            <div className="img-usuario"><img src={UserIcon} alt={usuario.name} /></div>
        <h1>Olá, {usuario.name}</h1>
        {listaBeneficio}
        <div className="botoes-final">
            <Link to={"/subscriptions"}><button><span>Mudar plano</span></button></Link>
            <button onClick={deletarPlano}><span>Cancelar plano</span></button>
        </div>
        </Container>
    )
}

const Container = styled.div`

    position: fixed;
    top: 176px;


 h1 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        color: #ffffff;
        position: fixed;
        top: 95px;
        left: 130px;
    }

    .img-plano {        
        position: fixed;
        top: 32px;
        left: 38px;                    
    }
    .img-plano img {
        width: 75px;
        height: 51px;
    }
    .img-usuario {        
        position: fixed;
        top: 23px;
        right: 22px;                    
    }
    button {
        width: 298px;
        height: 52px;
        border-radius: 8px;
        background-color: #FF4791;
        display: flex;
        justify-content: center;
        align-items: center;        
        margin-bottom: 8px;
    }
    a {
        font-family: 'Roboto';
        font-size: 14px;
        color: #ffffff;
    }
    span {
        font-family: 'Roboto';
        font-size: 14px;
        color: #ffffff;
    }
    .botoes-final {
        position: fixed;
        bottom: 12px;
    }

    .botoes-final button:nth-child(2) {
        background-color: #FF4747;
    }
    
`;