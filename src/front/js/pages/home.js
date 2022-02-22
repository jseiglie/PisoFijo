import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ButtonOwn from "../component/Button.js";
import SearchMenu from "../component/SearchMenu.js"
import DetailsCard from "../component/DetailsCard.js"
import image from "../../img/Vector.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <ButtonOwn/>
      <SearchMenu/>
	  <DetailsCard urlImg={image}
    value="400.000" area ="300" numRooms="3" floor="3"/> 
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
    </div>
  );
};
