export const getEvolutions = (chain: any) => {
    const evolutions = [];
    let current = chain;
  
    do {
      const name = current.species.name;
      const id = current.species.url.split('/')[6];
      const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      evolutions.push({ name, id, sprite });
      current = current.evolves_to[0];
    } while (current && current.hasOwnProperty('evolves_to'));
  
    return evolutions;
};