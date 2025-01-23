import SearchBar from "../components/Search";
import FileUpload from '../components/FileUpload';

export default function Home() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className='text-black text-6xl md:text-9xl sm:text-6xl tracking-tight pb-5'>POKEDEX</h1>
          <div className="w-full md:w-[450px]">
            <SearchBar/>
            <FileUpload/>
          </div>
        </div>
    </div>
  );
}