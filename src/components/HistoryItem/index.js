import './index.css'

const HistoryItem = props => {
  const {HistoryDetails, deleteHistoryElement} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onDeleteButton = () => {
    deleteHistoryElement(id)
  }
  return (
    <li className="history-items">
      <div className="item-container">
        <p className="time">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
        <div className="delete-image">
          <button
            className="image-delete"
            onClick={onDeleteButton}
            type="button"
          >
            <img
              className="delete-image-di"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
