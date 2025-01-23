import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useSearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/pokemon/${searchValue.replace(/\s+/g, '')}`);
    }
  };

  return { searchValue, setSearchValue, handleChange, handleKeyDown };
}