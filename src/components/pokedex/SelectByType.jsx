import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/selectByType.css'

const SelectByType = ({setTypeSelected, setPage}) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const URL ='https://pokeapi.co/api/v2/type'
            axios.get(URL)
                .then(res => setTypes(res.data.results))
                .catch(err => console.log(err))
    }, [])

    const handleChange = event => {
        setTypeSelected(event.target.value)
        setPage(1)
    }

  return (
    <select className='options' onChange={handleChange}>
        <option className='optionts' value='All Pokemons'>All Pokemons</option>
        {
            types?.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectByType