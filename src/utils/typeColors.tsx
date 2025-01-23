const getTypeColor = (type: any) => {
    switch (type) {
      case 'normal':
        return 'bg-gray-400';
      case 'fire':
        return 'bg-red-500';
      case 'water':
        return 'bg-blue-500';
      case 'electric':
        return 'bg-yellow-500';
      case 'grass':
        return 'bg-green-500';
      case 'ice':
        return 'bg-blue-200';
      case 'fighting':
        return 'bg-red-700';
      case 'poison':
        return 'bg-purple-500';
      case 'ground':
        return 'bg-yellow-700';
      case 'flying':
        return 'bg-blue-300';
      case 'psychic':
        return 'bg-purple-400';
      case 'bug':
        return 'bg-green-600';
      case 'rock':
        return 'bg-gray-600';
      case 'ghost':
        return 'bg-purple-800';
      case 'dragon':
        return 'bg-blue-800';
      case 'dark':
        return 'bg-gray-800';
      case 'steel':
        return 'bg-gray-500';
      case 'fairy':
        return 'bg-pink-300';
      default:
        return 'bg-gray-400';
    }
  };
  
  export default getTypeColor;
  