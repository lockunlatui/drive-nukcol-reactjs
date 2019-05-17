/*
 * @Author: Do Loc - doxuanloc2016@gmail.com 
 * @Date: 2019-04-27 00:52:50 
 * @Last Modified by: Do Loc - doxuanloc2016@gmail.com
 * @Last Modified time: 2019-04-30 02:04:04
 */

import {
  faFolderOpen,
  faFile,
  faTrashAlt,
  faFolder,
  faShareSquare
} from '@fortawesome/free-regular-svg-icons';

import Avatar from '../images/man.png';
import Guide from '../images/guide.png';
import Gymnastic from '../images/weightlifter.png';
import Boat from '../images/boat.png';
import MannualApp from '../images/glass-of-water.png';
import FileTxt from '../images/txt.svg';
import FileAi from '../images/ai.svg';
import FilePng from '../images/png.svg';
import FilePdf from '../images/pdf.svg'

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

const mockNewFiles = [
  {
    id: 1,
    image: Guide,
    name: 'Menual website',
    tools: 'Sketch',
    date: '21.03.2019',
    fileExtension: '.sketch'
  },
  {
    id: 2,
    image: Gymnastic,
    name: 'Gymnastic',
    tools: 'Photoshop',
    date: '20.03.2019',
    fileExtension: '.psd'
  },
  {
    id: 3,
    image: Boat,
    name: 'Neverout',
    tools: 'IIIustrator',
    date: '20.03.2019',
    fileExtension: '.ai'
  },
  {
    id: 4,
    image: MannualApp,
    name: 'Menual App',
    tools: 'Sketch',
    date: '12.01.2019',
    fileExtension: '.sketch'
  }
]

const mockFileShared = [
  {
    id: 1,
    file: FileTxt,
    name: 'Menual Guidliness'
  },
  {
    id: 2,
    file: FileAi,
    name: 'Menual Illustraions'
  },
  {
    id: 3,
    file: FilePng,
    name: 'Overflight Cover Photo'
  },
  {
    id: 4,
    file: FilePdf,
    name: 'Design Process Draft'
  },
  {
    id: 5,
    file: FilePng,
    name: 'Wallpaper #1'
  },
  {
    id: 6,
    file: FilePng,
    name: 'Wallpaper #1'
  }
]

const mocks = { mockItems, mockFolderRecenty, mockNewFiles, mockFileShared };

export default mocks;