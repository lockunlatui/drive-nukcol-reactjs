/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-25 21:38:29 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-27 16:59:13
 */

import React from 'react';

import Button from '../../../components/Button';
import Folder from '../../../components/Folder';

import LeftArrow from '../../../images/left-arrow.svg';
import RightArrow from '../../../images/right-arrow.svg';

import mocks from '../../../mocks';

import './index.css';

function HomeContent() {
  return (
    <div className="container-home-content">
      <div className="container-home-content-top">
        <div className="box-btn-left">
          <img className="top-btn-home-content" alt="Left Arrow" src={LeftArrow} />
          <img className="top-btn-home-content" alt="Right Arrow" src={RightArrow} />
        </div>
        <div className="box-btn-right">
          <Button
            className="btn-upload"
            width={180}
            height={40}
            backgroundColor="#6a75ca"
            color="#ffffff"
            fontSize={14}
            fontFamily="Roboto"
            border={0}
            borderRadius={999}
            fontWeight={400}
            boxShadow="2px 2px 2px 2px #6a75ca"
            name={`Upload New File`.toUpperCase()} />
        </div>
      </div>
      <div className="container-home-content-recently">
        <h1 className="title-recenty">
          Recenty used
      </h1>
        <div className="container-box-recenty">
        {mocks.mockFolderRecenty.map((listFolder, index) => {
          return (
            <Folder key={index} listAvatar={listFolder.imgSharedWith} nameFolder={listFolder.name} />
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default HomeContent;