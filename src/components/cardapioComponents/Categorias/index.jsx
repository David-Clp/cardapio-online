import React, { useState, useEffect }  from 'react'
import './categorias.scss'
import axios from 'axios';

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);

  const [estabelecimentoId, setestabelecimentoId] = useState(1);//REMOVER

  const handleClick = (categoria) =>{
    setCategoriaAtiva(categoria)
  }

  useEffect(() => {
     //const token = localStorage.getItem('token')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk0OTg1MzUxLCJleHAiOjE2OTUwNzE3NTF9.lGc4-NcdZUwZ33YwH8iSkAx5UbmxE0pSplUwP_xhCUo";
    axios.get(`http://localhost:8080/api/categorias/${estabelecimentoId}`,{
      headers:{
        'Content-Type': 'application/json',
        'token': token
      },
    })
      .then((response) => {
        // Define as categorias recebidas na resposta no estado
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("ERROR: "+ error);
      });
  }, [estabelecimentoId]);

  return (
    <aside className='categorias'>
      {categorias.map((categoria, index) =>(
        <div
          key={index}
          className={`categoria ${categoria === categoriaAtiva ? 'selected' : ''}`}
          onClick={() => handleClick(categoria)}
        >
          <p>{categoria.nome}</p>
        </div>
      ))}
     </aside>
  )
}

export default Categorias