import { useState } from 'react'
import ContentLeft from './ContentLeft.jsx'
import ContentMiddle from './ContentMiddle.jsx'
import ContentRight from './ContentRight.jsx'
import './Content.css'

// eslint-disable-next-line react/prop-types
const Content = ({ dataUser, setDataUser }) => {
  const [selectedContent, setSelectedContent] = useState('HOME');

  const handleSelectContent = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className='content-body'>
      <div className="content-body-left">
        <ContentLeft onSelectContent={handleSelectContent} selectedContent={selectedContent} />
      </div>
      <div className="content-body-middle">
        <ContentMiddle selectedContent={selectedContent} dataUser={dataUser} setDataUser={setDataUser} />
      </div>
      <div className="content-body-right">
        <ContentRight />
      </div>
    </div>
  )
}

export default Content