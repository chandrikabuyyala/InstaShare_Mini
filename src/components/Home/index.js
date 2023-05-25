import {Component} from 'react'
import UserPosts from '../UserPosts'
import UserStories from '../UserStories'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <ul>
        <li>
          <Header />
        </li>
        <li>
          <UserStories />
        </li>
        <li>
          <UserPosts />
        </li>
      </ul>
    )
  }
}

export default Home
