import { useState } from 'react'
import Content from './Content.jsx';
import Nav from './Nav.jsx';

function App() {
  const [dataUser, setDataUser] = useState(null);
  return (
    <>
      <Nav setDataUser={setDataUser} />
      <Content dataUser={dataUser} setDataUser={setDataUser} />
    </>
  )
}

export default App
