import {Component} from 'react'

import LoaderSpinner from '../LoaderSpinner'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchEngine extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
  }

  getSearchResult = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
  }

  renderLoadingView = () => (
    <div
      className="main-container"
      // testid="loader"
    >
      <LoaderSpinner />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default SearchEngine
