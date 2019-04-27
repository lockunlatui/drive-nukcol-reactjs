/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-24 21:56:41 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-27 01:17:58
 */

import React from 'react';

import MenuLeft from '../../components/MenuLeft';
import HomeContent from './HomeContent';

import './index.css';

function Home() {
  return (
    <div className="containers">
      <div className="container-menu">
        <MenuLeft />
      </div>
      <div className="container-content">
        <HomeContent />
      </div>
      <div className="container-right">
      
      </div>
    </div>
  )
}

export default Home;