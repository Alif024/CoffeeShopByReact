import guessIcon from './assets/guess.svg'
import tableIcon from './assets/tableIcon.svg'
import FirstFloor from './FirstFloor.jsx'
import SecondFloor from './SecondFloor.jsx'
import './HomeContent.css'

// eslint-disable-next-line react/prop-types
const HomeContent = ({ handleSelectFloorContent, selectedFloorContent }) => {
  return (
    <>
      <div className="content-body-home">
        <div className="title">
          <div className="title-left">
            <h3>TABLE LIST</h3>
          </div>
          <div className="title-right">
            <button className={`${selectedFloorContent === 1 ? 'active' : ''}`} onClick={() => handleSelectFloorContent(1)}>First Floor</button>
            <button className={`${selectedFloorContent === 2 ? 'active' : ''}`} onClick={() => handleSelectFloorContent(2)}>Second Floor</button>
          </div>
        </div>
        <div className="content-table-select">
          <div className="table">
            {selectedFloorContent === 1 ? <FirstFloor /> : <SecondFloor />}
          </div>
        </div>
      </div>
      <div className="selection-continue">
        <div className="selection">
          <div className="details-footer-home">
            <div className="detail-left">
              <div className="table">
                <img src={tableIcon} alt="table-icon" />
                <p>TAVLE:</p>
                <p className='number-table-footer-home' id='number-table'></p>
              </div>
              <div className="guess">
                <img src={guessIcon} alt="guess-icon" />
                <p>GUESS:</p>
                <p className='number-guess-footer-home' id='number-guess'></p>
              </div>
              <div className="guess-footer-home"></div>
            </div>
            <button className='selection-continue-footer-home'>SELECT AND CONTINUE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeContent