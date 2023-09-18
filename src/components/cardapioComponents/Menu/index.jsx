import React, {useState, useEffect} from 'react'
import './menu.scss';
import axios from 'axios'

const Menu = () => {
  const [categorias, setCategorias] = useState([]);

  const [estabelecimentoId, setestabelecimentoId] = useState(1);//REMOVER
  
  const [categoriasComProdutos, setCategoriasComProdutos] = useState([]);

  //const token = localStorage.getItem('token')
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk0OTg1MzUxLCJleHAiOjE2OTUwNzE3NTF9.lGc4-NcdZUwZ33YwH8iSkAx5UbmxE0pSplUwP_xhCUo";
  useEffect(() =>{
    axios.get(`http://localhost:8080/api/categorias/${estabelecimentoId}`,{
      headers:{
        'Content-Type': 'application/json',
        'token': token
      },
    })
    .then((response) => {
      {console.log(response.data)}
      setCategoriasComProdutos(response.data);
    })
    .catch((error) =>{
      console.error("ERROR: "+ error);
    })
  } ,[estabelecimentoId]);

  return (
    <section className='menu'>
      {console.log(categoriasComProdutos)}
      {categoriasComProdutos.map((categoria, index) =>(
      <div
        key={index}
        className="menuCategoria"
      >
        <h2>{categoria.nome}</h2>
        <div className="produtos">
        {categoria.Produtos.map((produto, index) =>(
          <div key={index} className="card">
              <div className="texts">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
              </div>
              <div className="valor">
                <p>R${produto.valor}</p>
              </div>
          </div>
        ))}
        </div>
      </div>
      ))}    
    </section>
  )
}

export default Menu