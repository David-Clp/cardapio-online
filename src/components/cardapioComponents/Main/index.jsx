import React from 'react'
import Categorias from '../Categorias'
import Menu from '../Menu'
import './main.scss'

const Main = () => {
  return (
    <section className='main'>
        <Categorias/>
        <Menu/>
    </section>
  )
}

export default Main