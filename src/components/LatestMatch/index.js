import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const modifiedLatestmatch = {
    id: latestMatchDetails.id,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = modifiedLatestmatch

  const stausText = matchStatus === 'Lost' ? 'red-text' : 'green-text'
  return (
    <div className="latest-container">
      <div className="latest-1-container">
        <p className="latest-heading">{competingTeam}</p>
        <p className="latest-date">{date}</p>
        <p className="latest-venue">{venue}</p>
        <p className="latest-result">{result}</p>
        <p className={`${stausText}`}>{matchStatus}</p>
      </div>
      <div className="compitition-logo-container">
        <img
          className="com-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="latest-2-container">
        <p className="inning-heading">First Innings</p>
        <p className="inning-answer">{firstInnings}</p>
        <p className="inning-heading">Second Innings</p>
        <p className="inning-answer">{secondInnings}</p>
        <p className="inning-heading">Man Of The Match</p>
        <p className="inning-answer">{manOfTheMatch}</p>
        <p className="inning-heading">Umpires</p>
        <p className="inning-answer">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
