/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-25 21:38:29 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-30 02:00:29
 */

import React from 'react';
import {
  faEllipsisH,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import {
  faShareSquare
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            letterSpacing={1}
            width={180}
            height={40}
            backgroundColor="#6a75ca"
            color="#ffffff"
            fontSize={10}
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

      <div className="container-home-content-recently">
        <div className="container-top-newfile">
          <h1 className="title-recenty">
            New file
        </h1>
          <div className="box-btn-view">
            <Button
              className="btn-view"
              letterSpacing={1}
              width={85}
              backgroundColor="#eef1f7"
              height={40}
              color="#c0bfbf"
              fontSize={10}
              fontFamily="Roboto"
              border="1px solid #c0bfbf"
              borderRadius={999}
              fontWeight={400}
              name={`View All`.toUpperCase()} />
          </div>
        </div>
        <div>
          <table>
            <tbody>
              {mocks.mockNewFiles.map((listNewFile, index) => {
                return (
                  <tr key={index}>
                    <td><img className="img-table" alt="Guide" src={listNewFile.image} /></td>
                    <td>{listNewFile.name}</td>
                    <td>{listNewFile.tools}</td>
                    <td>{listNewFile.date}</td>
                    <td>{listNewFile.fileExtension}</td>
                    <td>  <FontAwesomeIcon
                      className="btn-table-icon"
                      icon={faEllipsisH} />
                      <FontAwesomeIcon
                        className="btn-table-icon"
                        icon={faPlus} />
                      <FontAwesomeIcon
                        className="btn-table-icon"
                        icon={faShareSquare} /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container-home-content-recently">
        <div className="container-top-newfile">
          <h1 className="title-recenty">
            Shared with me
          </h1>
          <div className="box-btn-view">
            <Button
              className="btn-view"
              letterSpacing={1}
              width={85}
              backgroundColor="#eef1f7"
              height={40}
              color="#c0bfbf"
              fontSize={10}
              fontFamily="Roboto"
              border="1px solid #c0bfbf"
              borderRadius={999}
              fontWeight={400}
              name={`View All`.toUpperCase()} />
          </div>
        </div>
        <div className="container-bottom-shared">
        {mocks.mockFileShared.map((listFileShare, index) => {
          return (
            <div className="box-shared" key={index}>
              <img
                className="icon-box-shared"
                alt={listFileShare.file}
                src={listFileShare.file} />
                <h1 className="name-box-shared">{listFileShare.name}</h1>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default HomeContent;