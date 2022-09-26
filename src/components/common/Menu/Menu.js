import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem';
import './menu.css';


function Menu() {

  
  const [ menuItems, setMenuItems ] = useState([])

  const URL = "http://localhost:8000/"


  useEffect(() => {
    fetch(`${URL}products`)               
        .then((r) => r.json())
        .then((productsData) => {setMenuItems(productsData)
                              console.log(menuItems)
        })  
  },[])

  return (
    <main>
      { menuItems.map((item) => (
        <MenuItem item={item} key={item.id} />
      )) }
    </main>
  )
}

export default Menu