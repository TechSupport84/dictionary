import { BiSearchAlt } from "react-icons/bi";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchWord = ({ value, onChange }: InputProps) => {
  return (
    <div className="relative w-full max-w-md">
      <input 
        type="text" 
        placeholder="Search word..." 
        value={value} 
        onChange={onChange} 
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <BiSearchAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
    </div>
  );
}

export default SearchWord;
