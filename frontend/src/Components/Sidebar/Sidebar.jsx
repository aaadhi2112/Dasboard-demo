import React, { useState } from 'react';
import "./Sidebar.css";
import { MdHome } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiKanbanFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdLock } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Sidebar({children}) {

    const[isOpen ,setIsOpen] = useState(false)
    const toggle =()=> setIsOpen(!isOpen)
    
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<MdHome/>
        },
        {
            path:"/nftmarketplace",
            name:"NFT Marketplace",
            icon:<FaShoppingCart />   
        },
        {
            path:"/tables",
            name:"Tables",
            icon:<VscGraph/>
        },
        {
            path:"/kanban",
            name:"Kanban",
            icon:<PiKanbanFill />
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<CgProfile />
        },
        {
            path:"/signin",
            name:"Sign in",
            icon:<IoMdLock />
        }
    ]

  return (
    <div className="container1">
        <div className="sidebar" style={{width: isOpen ? "250px" : "50px"}} >
            <div className="top_section">
            <div style={{marginLeft: isOpen ? "5px" : "0px"}}  className="bars"><FaBars onClick={toggle}/></div>
                <h3 style={{display: isOpen ? "block" : "none"}} className="logo"><strong>Horizon</strong> Free</h3>
            </div>
            <div className='boooyaaa'>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar