import { Dropdown } from "react-bootstrap";
import React, { Component, useContext } from "react";
import "../../styles/usermenu.css"
import { Context } from "../store/appContext";
import "../../styles/LoginBtn.css"

export const UserMenu = () => {
    const {store, actions} = useContext(Context)

	return (
        <Dropdown> 
            <Dropdown.Toggle className="login" id='dropdown-basic'>
                Menu
            </Dropdown.Toggle>
            <Dropdown.Menu className='userMenu'>
            <Dropdown.Item >Settings</Dropdown.Item>
                <Dropdown.Item onClick={()=> actions.logOut()}>SignOut</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    // <div className="dropdown">
    //     <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu</button>
    //     <div className=" dropdown-menu userMenu">
    //         <ul className="ulUM text-center"> 
    //             <li className="liUM dropdown=item"><button className="btnUM" role="button">Account</button></li>
    //             <li className="liUM dropdown=item"><button className="btnUM" role="button">Messages</button></li>
    //             <li className="liUM dropdown=item"><button className="btnUM" role="button" onClick={()=> actions.logOut()}>Sign Out</button></li>
    //         </ul>
    //     </div>
    //         </div>
        )        
}

