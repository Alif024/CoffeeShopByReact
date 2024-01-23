/* eslint-disable react/prop-types */
import Guess from './assets/user.png'
import './SettingsContent.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
const SettingsContent = ({ dataUser, setDataUser }) => {
  // const getData = () => {
  //   console.log(dataUser);
  // }

  return (

    <div style={{ height: "89vh" }}>
      {/* <button onClick={getData}>test</button> */}
      <div style={{ padding: "0px 25px", paddingTop: "20px" }}>
        <div style={{ marginBottom: "20px", borderBottom: "2px solid #ECEDED", paddingBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ color: "#000", fontSize: "30px", fontWeight: "600" }}>
            Account Settings
          </h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={Guess} style={{ width: "23px", height: "auto" }} />
            <h3 style={{ marginLeft: "5px" }}>{dataUser.username}</h3>
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          <label htmlFor="firstName">First name : </label>
          <input placeholder={null} type="text" className="input" required="" name='firstName' style={{ marginRight: "40px" }} />
          <label htmlFor="lastName">Last name : </label>
          <input placeholder={null} type="text" className="input" required="" name='lastName' style={{ marginBottom: "10px" }} /> <br />

          <label htmlFor="tel">Telephone Number : </label>
          <input placeholder={null} type="text" className="input" required="" name='tel' style={{ marginRight: "40px", marginBottom: "10px" }} /> <br />

          <label htmlFor="address">Address : </label>
          <input placeholder={null} type="text" className="input" required="" name='address' style={{ marginRight: "40px", marginBottom: "10px", width: "500px" }} />
        </div>
      </div>
    </div>
  )
}

export default SettingsContent