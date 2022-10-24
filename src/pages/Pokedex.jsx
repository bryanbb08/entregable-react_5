import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../components/pokedex/Pagination'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if(typeSelected !== 'All Pokemons'){
      // al coger uno tipo
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(event => event.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      // si niguno poke fue escogido aun y que aparezcan todos los poke
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(URL)
        .then(res => setPokemons (res.data.results))
        .catch(err => console.log(err))
      }
  }, [typeSelected])

  const userName = useSelector(state => state.userName)

  // la logica de progracion

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div>
      <header>
        <h1>Pokedex</h1>
        <p>Welcome <span>{userName}</span>, here you can find your favorite pokemon.</p>
      </header>
      <aside>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected}
        setPage={setPage}
        />
        <Pagination 
          page={page}
          pagesLength = { pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </aside>
      <main>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke  
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <Pagination 
          page={page}
          pagesLength = { pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
  </div>
  )
}

export default Pokedex