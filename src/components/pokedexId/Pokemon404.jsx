import React from 'react'
import { Link } from 'react-router-dom'
import './styles/pokemon404.css'

const Pokemon404 = () => {
  return (
    <>
    <h1 className='pokemon404__title'>Pokemon not Found 😵</h1>
    <Link className='pokemon404__link' to='/pokedex'>🔙 Return to previous page</Link>
    </>
  )
}

export default Pokemon404