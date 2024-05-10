import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.gettingIplTeams()
  }

  gettingIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeams = teams.map(eachObj => ({
      id: eachObj.id,
      name: eachObj.name,
      teamImageUrl: eachObj.team_image_url,
    }))
    this.setState({iplTeamsList: updatedTeams, isLoading: false})
  }

  showingIplTeams = () => {
    const {iplTeamsList} = this.state

    return (
      <ul className="un-lists">
        {iplTeamsList.map(eachObj => (
          <TeamCard key={eachObj.id} teamDetails={eachObj} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="logo-heading-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div data-testid="loader" className="load-container">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            this.showingIplTeams()
          )}
        </div>
      </div>
    )
  }
}

export default Home
