import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'My Profile',
    path: '/UserProfile',
    // icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Gym',
    path: '/Gym',
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Trainers',
    path: '/trainers',
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Session',
    path: '/session',
    // icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },

];