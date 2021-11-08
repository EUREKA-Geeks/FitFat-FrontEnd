import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
    const [sidebar] = useState(true);

    return (
        <>
      <IconContext.Provider value={{ color: 'balck' }}>
      
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          
           
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar
