// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, key, onDisplayShow} = props
  const {suggestion} = suggestionsList

  const onDisplay = () => onDisplayShow(key)

  return (
    <li className="suggestion-item-container">
      <p className="item-heading">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-img"
        onClick={onDisplay}
      />
    </li>
  )
}

export default SuggestionItem
