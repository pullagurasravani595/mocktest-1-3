import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackCard = props => {
  const {trackDetails, onDeleteIcon} = props
  const {imageUrl, name, genre, duration, id} = trackDetails

  const clickIcon = () => {
    onDeleteIcon(id)
  }

  return (
    <li className="list-container">
      <div className="image-name-genre-container">
        <img src={imageUrl} alt="track" className="list-image" />
        <div className="name-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-icon-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={clickIcon}
          data-testid="delete"
        >
          <AiOutlineDelete className="icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackCard
