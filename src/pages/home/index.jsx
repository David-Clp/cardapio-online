import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
         <h1>Página Inicial</h1>
        <Link to="/cardapio">Cardapio</Link>
    </div>
  )
}

export default Home