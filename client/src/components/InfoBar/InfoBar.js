import React from 'react'
import './InfoBar.css'
import closeIcon from '../../Icons/';
import onlineIcon from '../../Icons/';

function InfoBar({room}) {
  return (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} alt="online image"/>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img src={closeIcon} alt="Close Image"/></a>
        </div>
    </div>
  )
}

export default InfoBar;