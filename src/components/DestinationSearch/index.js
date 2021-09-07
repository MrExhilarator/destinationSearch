// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchString: '',
  }

  updateSearchString = event => {
    this.setState({
      searchString: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchString} = this.state
    const updatedDestinationsList = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchString.toLowerCase()),
    )
    return (
      <div className="background-container">
        <div className="page-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              onChange={this.updateSearchString}
              value={searchString}
              className="search-box"
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-image"
            />
          </div>
          <ul className="destinations-container">
            {updatedDestinationsList.map(eachDestination => (
              <DestinationItem
                destinationDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
