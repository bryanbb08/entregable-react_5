import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardPoke = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(pokemon)

  return (
    <article  className='card-poke'>
        <header className='card-poke__header'>
            <img src={pokemon?.sprites.other['official-artwork'].
            front_default} alt="" />
        </header>
        <section className='card-poke__body'>
            <h3>{pokemon?.name}</h3>
            <ul className='card-poke__types-container'>
                {
                    pokemon?.types.map(type => (
                        <li className='card-poke__type'>{type.type.name}</li>
                    ))
                }
            </ul>
            <p className='card-poke__type-label'>Type</p>
            <ul className='card-poke__stats-container'>
                {
                    pokemon?.stats.map(stat => (
                        <li className='card-poke__stat'>
                            <span className='card-poke__stat-label'>{stat.stat.name}</span>
                            <span className='card-poke__stat-number'>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default CardPoke