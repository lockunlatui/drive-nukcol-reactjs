/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-25 21:38:29 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-26 00:29:22
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button';
import './index.css';

function HomeContent() {
  return (
    <div className="container-home-content">
        <div className="box-btn-left"> 
        <button> <FontAwesomeIcon icon={faLongArrowAltLeft} /> </button>
        <button> <FontAwesomeIcon icon={faLongArrowAltRight} /> </button>
        </div>
        <div className="box-btn-right">
          <Button
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
  )
}

export default HomeContent;