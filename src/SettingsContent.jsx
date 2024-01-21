// eslint-disable-next-line react/prop-types
const SettingsContent = ({ dataUser, setDataUser }) => {
  const getData = () => {
    console.log(dataUser);
  }

  return (
    <div>
      <button onClick={getData}>test</button>
    </div>
  )
}

export default SettingsContent