import React,{useState} from "react";

export default function SearchBar({onSearch}) {
   const [Id, setId] = useState("");
   function handleChange(event) {
      const inputValue = event.target.value;
      setId(inputValue);
    }
   return (
      <div>
         <input type='search' onChange={handleChange} value={Id}/>
         <button onClick={()=>onSearch(Id)}>Agregar</button> 
      </div>
   );
}
