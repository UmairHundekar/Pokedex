import { Link } from "react-router-dom";
import useSearchValue from "../hooks/useSearchValue";

export default function Navbar() {
  const { searchValue, setSearchValue, handleKeyDown } = useSearchValue();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-full mx-auto px-4 sm:px-4 lg:px-4">
        <div className="flex items-center justify-left h-16">
          <div className="flex items-center">
            <h1 className="text-white text-3xl">Pokedex</h1>
          </div>
          <div className="hidden sm:flex ml-6">
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <div className="bg-slate-600 ml-2 rounded-lg p-1 shadow-large flex items-center">
              <input
                type="text"
                placeholder="Search Pokemon"
                className="ml-2 bg-transparent border-none outline-none text-xl placeholder:text-gray-300"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
