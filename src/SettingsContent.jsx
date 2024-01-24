/* eslint-disable react/prop-types */
import Axios from "axios";
import Guess from "./assets/user.png";
import "./SettingsContent.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SettingsContent = ({ dataUser, setDataUser }) => {
  // const getData = () => {
  //   console.log(dataUser);
  // }

  const handleSubmit = async (event) => {
    event.preventDefault(); // ป้องกันการส่งฟอร์มไปยังหน้าอื่น

    // ดึงค่าจากเขตข้อมูลแต่ละช่องได้ดังนี้
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const tel = document.querySelector('input[name="tel"]').value;
    const NoAddr = document.querySelector('input[name="NoAddr"]').value;
    const subdistrict = document.querySelector(
      'input[name="subdistrict"]'
    ).value;
    const district = document.querySelector('input[name="district"]').value;
    const city = document.querySelector('input[name="city"]').value;
    const post = document.querySelector('input[name="post"]').value;
    const Address = `${NoAddr} ตำบล${subdistrict} อำเภอ${district} จังหวัด${city} ไปรษณีย์ ${post}`;

    try {
      const response = await Axios.post(
        "http://localhost:5000/insertDataAccount",
        {
          telephone: tel,
          address: Address,
          firstname: firstName,
          lastname: lastName,
          username: dataUser.username,
        }
      );
      if (response.status === 200) {
        alert("เสร็จเรียบร้อย");
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("มีผู้ใช้ Email หรือ Username นี้แล้ว");
    }

    console.log(Address);
  };

  const clearInputField = (inputName) => {
    const inputElement = document.querySelector(`input[name="${inputName}"]`);
    if (inputElement) {
      inputElement.value = ""; // ล้างค่าของช่อง input
    }
  };

  const clearInputFields = () => {
    clearInputField("firstName");
    clearInputField("lastName");
    clearInputField("tel");
    clearInputField("NoAddr");
    clearInputField("subdistrict");
    clearInputField("district");
    clearInputField("city");
    clearInputField("post");
  };

  return (
    <div style={{ height: "89vh" }}>
      {/* <button onClick={getData}>test</button> */}
      <div style={{ padding: "0px 25px", paddingTop: "20px" }}>
        <div
          style={{
            marginBottom: "20px",
            borderBottom: "2px solid #ECEDED",
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
          <input
            placeholder={dataUser.firstname}
            type="text"
            className="input"
            required=""
            name="firstName"
            style={{ marginRight: "40px" }}
          />
          <label htmlFor="lastName">Last name : </label>
          <input
            placeholder={dataUser.lastname}
            type="text"
            className="input"
            required=""
            name="lastName"
            style={{ marginBottom: "10px" }}
          />
          <br />
          <label htmlFor="tel">Telephone Number : </label>
          <input
            placeholder={dataUser.telephone}
            type="text"
            className="input"
            required=""
            name="tel"
            style={{ marginRight: "40px", marginBottom: "10px" }}
          />
          <br />
          <div style={{ marginTop: "30px" }}>
            <h2 style={{ marginBottom: "20px" }}>Address</h2>
            <label
              htmlFor="NoAddr"
              style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif" }}
            >
              บ้านเลขที่ :
            </label>
            <input
              placeholder={null}
              type="text"
              className="input"
              required=""
              name="NoAddr"
              style={{ marginRight: "40px", marginBottom: "10px" }}
            />
            <label
              htmlFor="subdistrict"
              style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif" }}
            >
              ตำบล :
            </label>
            <input
              placeholder={null}
              type="text"
              className="input"
              required=""
              name="subdistrict"
              style={{ marginRight: "40px", marginBottom: "10px" }}
            />
            <label
              htmlFor="district"
              style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif" }}
            >
              อำเภอ :
            </label>
            <input
              placeholder={null}
              type="text"
              className="input"
              required=""
              name="district"
              style={{ marginRight: "40px", marginBottom: "10px" }}
            />
            <br />
            <label
              htmlFor="city"
              style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif" }}
            >
              จังหวัด :
            </label>
            <input
              placeholder={null}
              type="text"
              className="input"
              required=""
              name="city"
              style={{ marginRight: "40px", marginBottom: "10px" }}
            />
            <label
              htmlFor="post"
              style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif" }}
            >
              ไปรษณีย์ :
            </label>
            <input
              placeholder={null}
              type="text"
              className="input"
              required=""
              name="post"
              style={{ marginRight: "40px", marginBottom: "10px" }}
            />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "50px",
          }}
        >
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              padding: "10px 18px",
              fontSize: "18px",
              borderRadius: "7px",
              background: "#4A5C2F",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={clearInputFields}
            style={{
              padding: "10px 18px",
              fontSize: "18px",
              borderRadius: "7px",
              background: "#4A5C2F",
              color: "white",
              border: "none",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
