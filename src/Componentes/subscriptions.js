import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import axios from "axios";

export default function Subscriptions () {

    const {token} = useContext(UserContext);
    const [planos, setPlanos] = useState([]);

    console.log(token);

    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const promise = axios.get(
            "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config);
    
        promise.then((res) => {
          console.log(res.data)
          setPlanos(res.data)
        })
    
        promise.catch((err) => {
          console.log(err);
        })
    
      }, [])

    console.log(planos);

    const listaPlanos = planos.map((plano) => (
                <Link to={`/subscriptions/${plano.id}`}>
                <div className="plano">
                    <img src={plano.image} alt="" />
                    <span>R$ {plano.price}</span>
                </div>
                </Link>))


    return(
        <Container>
        <h1>Escolha o seu Plano</h1>
        {listaPlanos}
        </Container>
    )
}

const Container = styled.div`
 h1 {
        font-family: 'Roboto';
        font-size: 32px;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 14px;
    }

    .plano {
        width: 290px;
        height: 180px;
        border: 3px solid #7E7E7E;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 16px;
        box-sizing: border-box;
        margin-top: 10px;
    }

    span {
        font-family: 'Roboto';
        font-size: 24px;
        font-weight: 700;
        color: #ffffff;
    }

    img {
        width: 139.38px;
        height: 95.13px;
    }

`;
