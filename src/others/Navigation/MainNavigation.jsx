import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/BackDrop";
import SideBarNavLinks from '../Navigation/SideBarNavLinks';

function MainNavigation() {

    const [drawerIsOpen, setDrawerIsOpen] = useState(true);


    return (
        //? everything inside the MainHeader will be forwarded to MainHeader as children for the props.
        <React.Fragment>
            {drawerIsOpen && <BackDrop onClick={()=>{setDrawerIsOpen(false)}}/>}
            {drawerIsOpen && <SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <SideBarNavLinks />
                </nav>
            </SideDrawer>}
            <MainHeader>
                {/* menu button - hamburger button */}
                <button className="main-navigation__menu-btn" onClick={()=>{setDrawerIsOpen(true)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>
                </h1>

                <nav className="main-navigation__header-nav">
                    {/* Links */}
                   {!drawerIsOpen?<NavLinks></NavLinks>:<></>} 
                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;
