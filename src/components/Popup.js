import './Popup.css'

const Popup = () => {
  return (
      <div className='game-container'>
        <label htmlFor="nickname">Your nickname</label>
        <input placeholder="Hottie bunny" type="text" id="nickname"/>
        <button className="secondary-button">See leadboard</button>
        <button className="primary-button">Play now</button>
      </div>
  )
}

export default Popup
