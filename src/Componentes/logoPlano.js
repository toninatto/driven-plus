import { Link } from "react-router-dom";
import styled from "styled-components";
import Voltar from "../Recursos/Img/voltar.png";

export default function LogoPlano ({image, name}) {

    return (
        <Logo>
            <Link to={"/subscriptions"}><div className="voltar"><img src={Voltar} alt="Voltar" /></div></Link>
            <div className="plano">
            <img src={image} alt={name} />
            <h1>{name}</h1>
            </div>           
        </Logo>
    )
}

const Logo = styled.div`
 h1 {
        font-family: 'Roboto';
        font-size: 32px;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 14px;
    }

    .voltar {
        position: fixed;
        top: 24px;
        left: 22px;                    
    }

    .plano {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 22px;
    }

    .plano img {
        margin-bottom: 14px;
    }
    `;