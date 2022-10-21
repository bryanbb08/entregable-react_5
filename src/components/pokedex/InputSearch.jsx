import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = event => {
        event.preventDefault()
        navigate(`/pokedex/${event.target.search.value.trim().toLowerCase()}`)
    }


  return (
    <form onSubmit={submit}>
        <input id='search' type="text" placeholder='Search a pokemon'/>
        <button>Search</button>
    </form>
  )
}

export default InputSearch