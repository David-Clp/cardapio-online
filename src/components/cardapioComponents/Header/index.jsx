import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { GrMapLocation } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";
import './header.scss';

const Header = () => {
  const [estabelecimento, setEstabelecimento] = useState({});
  
  //const token = localStorage.getItem('token')
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk0OTg1MzUxLCJleHAiOjE2OTUwNzE3NTF9.lGc4-NcdZUwZ33YwH8iSkAx5UbmxE0pSplUwP_xhCUo";
  useEffect(() =>{
    axios.get(`http://localhost:8080/api/estabelecimentos/user/`,{
      headers:{
        'Content-Type': 'application/json',
        'token': token
      },
    })
      .then(response => {
        setEstabelecimento(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar estabelecimento:', error);
      });
  }, [token]);

  return (
    <section className='header'>
      {console.log(estabelecimento)}
        <div className="logo">
            <img src={estabelecimento.logo} alt="Logo do Estabelecimento" />
        </div>
        <div className="container">
            <h1 className="nome">{estabelecimento.nome}</h1>

            <p className="descricao">{estabelecimento.descricao}</p>
            {estabelecimento?.Localizacaos?.map((localizacao, index) =>(
              <div className="localizacao" key={index}>
                <GrMapLocation className='icon'/> <p>{localizacao.endereco}, {localizacao.numero}, {localizacao.bairro} - {localizacao.cidade}</p></div>
            ))}

            <div className="horarios">
                <p className="horario"><BiTimeFive className='icon'/> Dom. das 18:00 às 23:00</p>
            </div>
        </div>
    </section>
  )
}

export default Header