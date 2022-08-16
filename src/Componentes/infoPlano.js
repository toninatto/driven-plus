import styled from "styled-components";
import Beneficios from "../Recursos/Img/itens.png";
import Precinho from "../Recursos/Img/money.png";

export default function InfoPlano ({listaBeneficios, price}) {

    return (
        <Info>
            <div className="info"><img src={Beneficios} alt="" /><span>Benefícios:</span></div>
            <ol>{listaBeneficios}</ol>
            <div className="info"><img src={Precinho} alt="" /><span>Preço:</span></div>
            <ol><li>R$ {price} cobrados mensalmente</li></ol>
        </Info>
    )
}

const Info = styled.div`
    width: 100%;
    align-items: left;
    margin-left: 40px;
    padding-left: 40px;
    margin-bottom: 22px;

    span {
        font-family: 'Roboto';
        font-size: 16px;
        color: #ffffff;
    }
    .info {
        margin-bottom: 10px;
    }
    img {
        margin-right: 5px;
    }
    li {
        font-family: 'Roboto';
        font-size: 14px;
        color: #ffffff;
    }
    ol {
        margin-bottom: 12px;
    }
`;
