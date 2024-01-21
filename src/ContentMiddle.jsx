import { useState } from 'react'
import HomeContent from './HomeContent.jsx'
import MenuContent from './MenuContent.jsx'
import SettingsContent from './SettingsContent.jsx'

// eslint-disable-next-line react/prop-types
const ContentMiddle = ({ selectedContent, dataUser, setDataUser }) => {
  const [selectedMenuContent, setSelectedMenuContent] = useState('DRINKS');
  const [selectedFloorContent, setSelectedFloorContent] = useState(1);

  const handleSelectMenuContent = (content) => {
    setSelectedMenuContent(content);
  };
  return (
    <div className="content-middle">
      {selectedContent === 'HOME' && <HomeContent handleSelectFloorContent={setSelectedFloorContent} selectedFloorContent={selectedFloorContent} />}
      {selectedContent === 'MENU' && <MenuContent onSelectMenuContent={handleSelectMenuContent} selectedMenuContent={selectedMenuContent} />}
      {selectedContent === 'PAYMENT' && <div>PAYMENT Content</div>}
      {selectedContent === 'ORDERS' && <div>ORDERS Content</div>}
      {selectedContent === 'SETTINGS' && <SettingsContent dataUser={dataUser} setDataUser={setDataUser} />}
    </div>
  )
}

export default ContentMiddle