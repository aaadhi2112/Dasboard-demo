import React from 'react';
import './BarTop.css';
import { MdHome } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiKanbanFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdLock } from "react-icons/io";
import { NavLink } from 'react-router-dom';


function BarTop() {

    const topMenuItem=[
        {
            path:"/",
            icon:<MdHome/>
        },
        {
            path:"/nftmarketplace",
            icon:<FaShoppingCart />   
        },
        {
            path:"/tables",
            icon:<VscGraph/>
        },
        {
            path:"/kanban",
            icon:<PiKanbanFill />
        },
        {
            path:"/profile",
            icon:<CgProfile />
        },
        {
            path:"/signin",
            icon:<IoMdLock />
        }
    ]

    return (
        <div className='bartop'>
            <div className='bartophorizon'><h4 style={{ color: 'black' }}><strong>Horizon</strong>Free</h4></div>
            {/* <div className='bartoplinks'>
        <a href="/"><MdHome/></a>
        <a href="/nftmarketplace"><FaShoppingCart/></a>
        <a href="/tables"><VscGraph/></a>
        <a href="/kanban"><PiKanbanFill/></a>
        <a href="/profile"><CgProfile/></a>
        <a href="/signin"><IoMdLock/></a>
        </div> */}


            <div className='bartopmenuitems'>
                {
                    topMenuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="topbarlink" activeClassName="topbaractive">
                            <div className="topbaricon">{item.icon}</div>
                            <div  className="topbarlink_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>





        </div>
    )
}

export default BarTop