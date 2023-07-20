import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css'

function SideDrawer(props){
    const content = <aside className='side-drawer'>{props.children}</aside>;
    // ? createPortal is used to create a component in a different place, than a component itself
    return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;