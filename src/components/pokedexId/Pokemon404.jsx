import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {
  return (
    <>
    <h1>Pokemon not Found 😵</h1>
    <Link to='/pokedex'>Return to previous page</Link>
    </>
  )
}

export default Pokemon404