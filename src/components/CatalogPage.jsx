import { CardComponent } from "./CardComponent";
import {useState,useEffect} from 'react';
import { getAll } from '../services/cardServices.js';

export const CatalogPage = () => {

const [cards,setCards] = useState([]);

useEffect(()=>{
getAll().then(x=>setCards(x));
},[])
  return <>
    <div className="flex  flex-wrap p-5 justify-evenly">
    {!cards.length && <h1 className=" text-4xl ">No cards in the DB</h1>}
    {Object.values(cards).map(c=> <CardComponent key={c._id} url={c.url} id ={c._id} />)}
    </div>
  </>;
};
