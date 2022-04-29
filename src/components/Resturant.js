import React,{useState} from 'react';
import './style.css';
// import cake  from "../cake.jpg"
import Menu from "./MenuApi.js";
import MenuCard   from "./MenuCard";


export default function Resturant() {
    const[menuData,setMenuData]=useState(Menu);
    const filteritem=(categgory)=>{
        const updatedList=Menu.filter((curelement)=>{
           return  curelement.categgory===categgory;
        });
         setMenuData(updatedList);
    };
  return (
    <div>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={()=>filteritem("breakfast")}>Breakfast</button>
                <button className="btn-group__item"onClick={()=>filteritem("lunch")}>lunch</button>
                <button className="btn-group__item"onClick={()=>filteritem("dinner")}>dinner</button>
                <button className="btn-group__item"onClick={()=>setMenuData(Menu)}>all</button>
            </div>
        </nav>
        <MenuCard menuData={menuData}/>
    </div>
  )
}
