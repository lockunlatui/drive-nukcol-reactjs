/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-26 23:26:38 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-27 00:50:24
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item(props)  {
  return (
    <div>
    <FontAwesomeIcon 
      color={props.colorIcon}
      className={props.className}
      icon={props.iconName} />
      {props.itemName}
    </div>
  )
}

export default Item;