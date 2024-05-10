import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, matchDetails: {}, bagroundColor: ''}

  componentDidMount() {
    this.gettingTeamMaches()
  }

  gettingTeamMaches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const modifiedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(modifiedData)
    this.setState({
      matchDetails: modifiedData,
      bagroundColor: id,
      isLoading: false,
    })
  }

  showingMatchDetails = () => {
    const {matchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails

    return (
      <div className="match-inner-container">
        <img className="banner-image" src={teamBannerUrl} alt="team banner" />
        <p className="Latest-matches-text">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="un-lists1">
          {recentMatches.map(eachObj => (
            <MatchCard key={eachObj.id} matchDetails={eachObj} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, bagroundColor} = this.state

    return (
      <div className={`div-container ${bagroundColor}-special`}>
        {isLoading ? (
          <div data-testid="loader" className="load-container-1">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.showingMatchDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
