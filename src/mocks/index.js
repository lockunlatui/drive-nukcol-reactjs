/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-27 00:52:50 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-27 13:20:45
 */

import {
  faFolderOpen,
  faFile,
  faTrashAlt,
  faFolder,
  faShareSquare
} from '@fortawesome/free-regular-svg-icons';

import Avatar from '../images/doxuanloc.jpg';


const mockItems = [
  {
    idCategory: 1,
    nameCategory: 'Files',
    category: [
      {
        id: 1,
        iconName: faFolderOpen,
        name: 'My Files'
      },
      {
        id: 2,
        iconName: faShareSquare,
        name: 'Sharing'
      },
      {
        id: 3,
        iconName: faFile,
        name: ' File Requests'
      },
      {
        id: 4,
        iconName: faTrashAlt,
        name: ' Deleted files'
      }
    ]
  },
  {
    idCategory: 2,
    nameCategory: 'My Places',
    category: [
      {
        id: 1,
        iconName: faFolder,
        name: 'Designs'
      },
      {
        id: 2,
        iconName: faFolder,
        name: ' Music'
      },
      {
        id: 3,
        iconName: faFolder,
        name: '  Design Sprints'
      }
    ]
  }
]

const mockFolderRecenty = [
  {
    id: 1,
    name: 'Designs',
    imgSharedWith: [
      Avatar,
      Avatar,
      Avatar
    ]
  },
  {
    id: 2,
    name: 'Designs Sprint 2.0',
    imgSharedWith: [
      Avatar,
      Avatar
    ]
  },
  {
    id: 3,
    name: 'Discovery Call',
    imgSharedWith: [
      Avatar,
      Avatar,
      Avatar
    ]
  }
]
const mocks = { mockItems, mockFolderRecenty };

export default mocks;