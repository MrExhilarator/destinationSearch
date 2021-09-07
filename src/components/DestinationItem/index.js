// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-container">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-place">{name}</p>
    </li>
  )
}

export default DestinationItem
