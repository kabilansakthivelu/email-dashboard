import React from 'react';
import {MdSpaceDashboard, MdEmail, MdLaptopChromebook} from 'react-icons/md';
import {AiTwotoneFunnelPlot} from 'react-icons/ai';
import {FaCopy} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {

    //Static section for displaying icons

    return (
        <div className="navbar">
        <div className="navbarIcons">
           <MdSpaceDashboard />
           <MdEmail />
           <AiTwotoneFunnelPlot />
           <MdLaptopChromebook />
           <FaCopy />
           </div>
        </div>
    )
}

export default Navbar
