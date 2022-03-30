import React, {useContext, useEffect, useState } from 'react'
import DetailsCard  from '../component/DetailsCard';
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";

export const Favorites = () => {

    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        setFavorites(store.userLogin.favorites);
    },[store.userLogin])

    let history = useHistory();

    const onSelect = item => {
      actions.getSelectedProperty(item)
      history.push('/details'); // <--- The page you want to redirect your user to.
    }

    return (
    <>
       <div className="container container-details mt-2 mb-2 pt-2">
        {favorites.map((favorite)=>{
          return (
            <div key={favorite.id} onClick={() => onSelect(favorite)}>
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
