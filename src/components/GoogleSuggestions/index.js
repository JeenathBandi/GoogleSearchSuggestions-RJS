// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: '', inputString: ''}

  onInputChange = event => this.setState({searchInput: event.target.value})

  onDisplayShow = key => {
    const {suggestionsList} = this.props
    const {inputString} = this.state

    const resultList = suggestionsList.filter(each => each.id === key)
    return this.setState({inputString: resultList[0].suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput, inputString} = this.state
    const filteredResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="goo-suggestions-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="suggestion-box-container">
          <div className="search-container">
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-element"
              onChange={this.onInputChange}
            />
          </div>
          <ul className="suggestion-list-container">
            {filteredResults.map(eachItem => (
              <SuggestionItem
                suggestionsList={eachItem}
                key={eachItem.id}
                onDisplayShow={this.onDisplayShow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
