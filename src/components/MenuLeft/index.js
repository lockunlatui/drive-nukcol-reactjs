/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-24 21:55:54 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-27 14:37:40
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

import Item from '../Item';

import Avatar from '../../images/doxuanloc.jpg';

import mocks from '../../mocks';

import './index.css';

function MenuLeft() {
  return (
    <div className="container">
      <h1 className="header-page-name">
        drive.
      </h1>
      <div className="list-menu">
        <h2 className="header-name">
          <Item className="icon-space" iconName={faCompass} itemName="My drive" />
        </h2>
      </div>
      {mocks.mockItems.map((listCategory) => {
        return (
          <div key={listCategory.idCategory}>
            <h3 className="header-title">{listCategory.nameCategory.toUpperCase()}</h3>
            <ul className="list-item">
            {listCategory.category.length !== 0 ?
              listCategory.category.map((listItem) => {
                return (
                    <li className="item" key={listItem.id}>
                      <FontAwesomeIcon color="#5763c4" className="icon-space" icon={listItem.iconName} /> {listItem.name}
                    </li>
                )
              })
              :
              ''
            }
            </ul>
          </div>
        )
      })}
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