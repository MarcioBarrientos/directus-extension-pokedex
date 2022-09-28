import axios from 'axios'

async function getPokemons(){
  const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/')
  return data && data.results? data.results : undefined;
}

async function getPokemonDetail(name : string){
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return data? data : undefined;
}

export {getPokemons, getPokemonDetail}