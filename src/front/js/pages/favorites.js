import React, {useContext, useEffect, useState } from 'react'
import DetailsCard  from '../component/DetailsCard';
import { Context } from "../store/appContext.js";

export const Favorites = (props) => {

    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        getFavorites();
    },[])

    const getFavorites = async()=>{
        const response = await fetch("https://3001-programisto1011-4geekaca-u47m9x84lcr.ws-eu38.gitpod.io/api/favorites");
        const data = await response.json();
        setFavorites(data.results);
    }

    return (
    <>
       <div className="container container-details mt-2 mb-2 pt-2">
        {favorites.map((favorite)=>{
          return (
            <div key={favorite.id}>
              <DetailsCard
                urlImg={favorite.thumbnail}
                type={favorite.propertyType}
                location={`${favorite.district}, ${favorite.municipality}`}
                value={favorite.price}
                area={favorite.size}
                numRooms={favorite.rooms}
                floor={favorite.floor}
                fav={true}/>
            </div>
          );
        }) 
        }
      </div> 
    </>
  );
};

export default Favorites;
