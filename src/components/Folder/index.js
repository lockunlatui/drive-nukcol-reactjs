/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-27 12:45:25 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-27 17:31:10
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Folder(props) {
  return (
    <div className="box-folder">
      <FontAwesomeIcon
        className="box-icon-folder"
        icon={faFolder} />
      <div className="box-content-folder">
        <h1 className="box-title-folder">{`Shared With`.toUpperCase()}</h1>
        <div className="box-folder-container-img ">
          {
            props.listAvatar !== undefined ?
            props.listAvatar.map((list, index) => {
        return (
          <img key={index} className="box-folder-img" src={list} alt="Avatar" />
        ) 
      }) : ''}
        </div>
        <h1 className="box-bottom-folder">{`Folder`.toUpperCase()}</h1>
        <h2 className="box-bottom-folder-name">{props.nameFolder}</h2>
      </div>
    </div>
  )
}

export default Folder;