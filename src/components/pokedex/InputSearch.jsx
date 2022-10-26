import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = event => {
        event.preventDefault()
        navigate(`/pokedex/${event.target.search.value.trim().toLowerCase()}`)
    }


  return (
    <form className='inputButton' onSubmit={submit}>
        <input className='inputButton__input' id='search' type="text" placeholder='Search a pokemon'/>
        <button className='inputButton__button' >Search</button>
    </form>
  )
}

export default InputSearch