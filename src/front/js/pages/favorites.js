import React, {useContext } from 'react'
import DetailsCard  from '../component/DetailsCard';
import { Context } from "../store/appContext.js";
import Map from "../component/Map";

export const Favorites = (props) => {

    const { store, actions } = useContext(Context);

    return (
    <>
      <div className="container container-details mt-2 mb-2 pt-2">
      <DetailsCard
                urlImg={store.selected.thumbnail}
                type={store.selected.propertyType}
                location={`${store.selected.district}, ${store.selected.municipality}`}
                value={store.selected.price}
                area={store.selected.size}
                numRooms={store.selected.rooms}
                floor={store.selected.bathrooms}
                fav={true}
              
              />
        
      </div>
    </>
  );
};

export default Favorites;
