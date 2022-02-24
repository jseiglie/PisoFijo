import React, { Component } from "react";
import "../../styles/usermenu.css"

const UserMenu = () => {
	return (
        <div className="container userMenu">
            <ul className="ulUM text-center"> 
            <li className="liUM"><button className="btnUM">Account</button></li>
            <li className="liUM"><button className="btnUM">Messages</button></li>
            <li className="liUM"><button className="btnUM">Sign Out</button></li>
            </ul>
        </div>
        )        
}



export default UserMenu;