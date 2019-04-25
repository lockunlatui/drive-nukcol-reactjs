/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-24 21:55:54 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-26 00:58:00
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCompass,
  faFolderOpen,
  faFile,
  faTrashAlt,
  faFolder,
  faShareSquare
} from '@fortawesome/free-regular-svg-icons';

import Avatar from '../../images/doxuanloc.jpg';

import './index.css';

function MenuLeft() {
  return (
    <div className="container">
      <h1 className="header-name">
        drive.
      </h1>
      <div className="list-menu">
        <h2 className="header-name">
          <FontAwesomeIcon className="icon-space" icon={faCompass} /> My drive
      </h2>
        <h3 className="header-title">{`Files`.toUpperCase()}</h3>
        <ul className="list-item">
          <li className="item">
            <FontAwesomeIcon color="#5763c4" className="icon-space" icon={faFolderOpen} /> My Files
        </li>
          <li className="item">
            <FontAwesomeIcon color="#5763c4" className="icon-space" icon={faShareSquare} /> Sharing
        </li>
          <li className="item">
            <FontAwesomeIcon color="#5763c4" className="icon-space" icon={faFile} /> File Requests
        </li>
          <li className="item">
            <FontAwesomeIcon color="#5763c4" className="icon-space" icon={faTrashAlt} /> Deleted files
        </li>
        </ul>
      </div>
      <div>
        <h3 className="header-title">{`My Places`.toUpperCase()}</h3>
        <ul className="list-item">
          <li className="item">
            <FontAwesomeIcon color="#5763c4" className="icon-space" icon={faFolder} /> Designs
        </li>
          <li className="item">
            <FontAwesomeIcon color="#5763c4" className="icon-space" icon={faFolder} /> Music
        </li>
          <li className="item">
            <FontAwesomeIcon color="#5763c4" className="icon-space" icon={faFolder} /> Design Sprints
        </li>
        </ul>
      </div>
      <div className="position-bottom-menu">
        <img className="img-avatar" src={Avatar} alt="Avatar" />
        <div className="box-name-bottom">
          <span className="user-name">Nukcol</span>
          <span className="user-status">{`Premium User`.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}

export default MenuLeft;