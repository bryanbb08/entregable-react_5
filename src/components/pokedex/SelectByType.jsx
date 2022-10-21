import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectByType = (setTypeSelected) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const URL ='https://pokeapi.co/api/v2/type'
            axios.get(URL)
                .then(res => setTypes(res.data.results))
                .catch(err => console.log(err))
    }, [])

    const handleChange = event => {
        setTypeSelected(event.target.value)
    }

  return (
    <select onChange={handleChange}>
        <option value='All Pokemons'>All Pokemons</option>
        {
            types?.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectByType