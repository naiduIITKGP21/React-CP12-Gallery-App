// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {displayImage, details, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const activeThumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'
  const onclickButton = () => {
    displayImage(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        onClick={onclickButton}
        type="button"
        className="thumbnail-button"
      >
        <img
          className={activeThumbnailClassName}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
