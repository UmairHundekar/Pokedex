import PokemonData from "../components/pokemonDataDisplay";
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";

export default function Pokemon() {
    const { pokemonId } = useParams();
    
    return (
        <>
            <Navbar />
            <PokemonData pokemonName={pokemonId?.toLowerCase() || ''} />
        </>
    )
}
