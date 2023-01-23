import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryElement = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const filteredHistoryList = this.filterHistoryList()
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <div>
            <img
              className="history-img"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search history"
                value={searchInput}
                className="input-element"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
        </div>
        {filteredHistoryList.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="list-container">
            {filteredHistoryList.map(eachItem => (
              <HistoryItem
                key={eachItem.id}
                HistoryDetails={eachItem}
                deleteHistoryElement={this.deleteHistoryElement}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default History
