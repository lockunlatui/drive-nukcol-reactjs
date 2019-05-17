/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-26 00:08:40 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-27 22:15:28
 */

import React from 'react';

function Button(props) {
  return (
    <button className={props.className} style={{
      width: props.width,
      height: props.height,
      backgroundColor: props.backgroundColor,
      color: props.color,
      fontSize: props.fontSize,
      fontFamily: props.fontFamily,
      border: props.border,
      borderRadius: props.borderRadius,
      boxShadow: props.boxShadow,
      fontWeight: props.fontWeight,
      letterSpacing: props.letterSpacing
    }}>{props.name}{props.children}</button>
  )
}

export default Button;