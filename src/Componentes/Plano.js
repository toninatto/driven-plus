import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
import Voltar from "../Recursos/Img/voltar.png";
import Beneficios from "../Recursos/Img/itens.png";
import Precinho from "../Recursos/Img/money.png";
import Confirm from "./confirma";

export default function Plano () {

    const {token} = useContext(UserContext);
    const { id } = useParams();
    const [plano, setPlano] = useState([]);
    const [perks, setPerks] = useState([]);
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityNumber, setSecurityNumber] = useState();
    const [expirationDate, setExpirationDate] = useState('');
    const [visible, setVisible] = useState(false);

    const body = {
        membershipId: plano.id,
        cardName: cardName,
        cardNumber: cardNumber,
        securityNumber: parseInt(securityNumber),
        expirationDate: expirationDate
    };

    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
    const promise = axios.get(
        `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config);

    promise.then((res) => {
      console.log(res.data)
      console.log(res.data.perks)
      setPlano(res.data);
      setPerks(res.data.perks);
    })

    promise.catch((err) => {
      console.log(err);
    })
    }, [])

    const litaBeneficios = perks.map((perk, index) => (
                <li>{index + 1}. {perk.title}</li>)
    );

    function confirmacao (e) {
        e.preventDefault();
        setVisible(true);
    }

    console.log(visible)


    return (
        <>
        <Logo>
            <Link to={"/subscriptions"}><div className="voltar"><img src={Voltar} alt="Voltar" /></div></Link>
            <div className="plano">
            <img src={plano.image} alt={plano.name} />
            <h1>{plano.name}</h1>
            </div>           
        </Logo>
        <Info>
            <div className="info"><img src={Beneficios} alt="" /><span>Benefícios:</span></div>
            <ol>{litaBeneficios}</ol>
            <div className="info"><img src={Precinho} alt="" /><span>Preço:</span></div>
            <ol><li>R$ {plano.price} cobrados mensalmente</li></ol>
        </Info>
        <Form>
            <form onSubmit={confirmacao}>
            <input type="text" placeholder="Nome impresso no cartão" value={cardName} required onChange={(e) => setCardName(e.target.value)}/>
            <input type="text" placeholder="Dígitos do cartão" value={cardNumber} required onChange={(e) => setCardNumber(e.target.value)} />
            <div className="dois-inputs">
                <input type="number" placeholder="Código de segurança" value={securityNumber} required onChange={(e) => setSecurityNumber(e.target.value)} />
                <input type="text" placeholder="Validade" value={expirationDate} required onChange={(e) => setExpirationDate(e.target.value)} />
            </div>
            <button type="submit"><span> ASSINAR </span></button>
            </form>
        </Form>
        {visible ? <Confirm plano={plano.name} price={plano.price} setVisible={setVisible} body={body}/> 
        : <></>}
        </>
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

const Form = styled.div`
       
       form {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
       }

    button {
        width: 298px;
        height: 52px;
        border-radius: 8px;
        background-color: #FF4791;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 4px;
        
    }
    input {
        height: 52px;
        width: 299px;
        border-radius: 8px;
        background-color: #ffffff;        
        padding-left: 14px;
        box-sizing: border-box;
        margin-bottom: 8px;
    }
    ::placeholder {
        font-family: 'Roboto';
        font-size: 14px;
        color: #7E7E7E;
    }
    .dois-inputs {
        display: flex;
        justify-content: space-between;
    }
    .dois-inputs input {
        width: 145px; 
        padding-left: 6.5px;       
    }
    .dois-inputs input:nth-child(1) {
        margin-right: 9px;
    }
    span {
        font-family: 'Roboto';    
        font-weight: 700;
        font-size: 14px;
        color: #ffffff;
    }
`;