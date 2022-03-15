import React, {useContext, useEffect, useState } from 'react'
import DetailsCard  from '../component/DetailsCard';
import { Context } from "../store/appContext.js";

export const Favorites = (props) => {

    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState({});

    useEffect(()=>{
        getFavorites();
    },[])

    const getFavorites = async()=>{
        const response = await fetch("https://3001-programisto1011-4geekaca-rg8q9408rbs.ws-eu34.gitpod.io/api/user");
        const data = await response.json();
        setFavorites(data.results);
    }

    return (
    <>
      <div className="container container-details mt-2 mb-2 pt-2">

        <h1>{favorites.name}</h1>
      {/* <DetailsCard
                urlImg={store.selected.thumbnail}
                type={store.selected.propertyType}
                location={`${store.selected.district}, ${store.selected.municipality}`}
                value={store.selected.price}
                area={store.selected.size}
                numRooms={store.selected.rooms}
                floor={store.selected.bathrooms}
                fav={true}
              
              />
         */}
      </div>
    </>
  );
};

export default Favorites;
