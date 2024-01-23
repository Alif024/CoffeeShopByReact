import { useState } from 'react'
import Content from './Content.jsx';
import Nav from './Nav.jsx';

function App() {
  const [dataUser, setDataUser] = useState(null);
  const [selectedContent, setSelectedContent] = useState('HOME');
  return (
    <>
      <Nav setDataUser={setDataUser} setSelectedContent={setSelectedContent} />
      <Content dataUser={dataUser} setDataUser={setDataUser} selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
    </>
  )
}

export default App
