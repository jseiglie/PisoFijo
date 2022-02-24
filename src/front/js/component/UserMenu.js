import React, { Component } from "react";
import "../../styles/usermenu.css"

const UserMenu = () => {
	return (
        <div className="container userMenu">
            <ul className="ulUM text-center"> 
            <li><button className="btnUM">Account</button></li>
            <li><button className="btnUM">Messages</button></li>
            <li><button className="btnUM">Sign Out</button></li>
            </ul>
        </div>
        )        
}



export default UserMenu;