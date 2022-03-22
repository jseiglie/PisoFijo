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
        const response = await fetch("https://3001-programisto1011-4geekaca-u47m9x84lcr.ws-eu38.gitpod.io/api/favorites");
        console.log("Respuesta:",response);
        setFavorites(data.results);
    }

    console.warn(typeof favorites);

    return (
    <>
       <div className="container container-details mt-2 mb-2 pt-2">
        {favorites.map((favorite)=>{
          return (
            <DetailsCard
              key={favorite.id}
              urlImg={favorite.thumbnail}
              type={favorite.propertyType}
              location={`${favorite.district}, ${favorite.municipality}`}
              value={favorite.price}
              area={favorite.size}
              numRooms={favorite.rooms}
              floor={favorite.bathrooms}
              fav={true}/>
          );
        }) 
        }
      </div> 
    </>
  );
};

export default Favorites;
