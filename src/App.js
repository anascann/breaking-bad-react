import React,{useState,useEffect} from 'react';
import Header from './Components/Ui/Header';
import Axios from 'axios'
import CharacterGrid from "./Components/Characters/CharacterGrid"
import Search from "./Components/Ui/Search"
import './App.css';


function App() {
  const[items,setItems]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const [query,setQuery]=useState('');

  useEffect(()=>{
const fetchItems=async()=>{
  const result=await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
  console.log(result.data);
  setItems(result.data);
  setIsLoading(false);

}
fetchItems();
  }, [query])

  return (
    <div className="container">
    <Header/>
    <Search getQuery={(q)=>setQuery(q)}/>
    <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
