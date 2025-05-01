import { Search } from "lucide-react";
import { useState } from "react";

const Searchs = () => {

  const [query, setQuery] = useState("");

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <div className="flex items-center border p-2 rounded w-1/3 ">
      <Search className="text-gray-500 w-5 h-5" />
      <input
        type="text"
       
        placeholder="Try Searching 'louis Vuitton ' or 'Black Tote'"
        className="ml-2 outline-none w-full"
        value={query}
        onChange={handleChange} 
      />
    </div>
  )
}

export default Searchs
