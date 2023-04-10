import { CardComponent } from "../CardComponent/CardComponent";
import {useState,useEffect} from 'react';
import { getAll } from '../../services/cardServices.js';
export const HomePage = () => {

const [cards,setCards] = useState([]);

useEffect(()=>{
getAll().then(x=>setCards(x));
},[])
  return <>
    <div className="flex  flex-wrap p-5 justify-evenly">
      
   {cards.map(c=><CardComponent key={c._id} url={c.url} id ={c._id} />)}
    </div>
  </>;
};
