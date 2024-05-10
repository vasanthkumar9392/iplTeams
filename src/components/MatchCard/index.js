import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const modifiedObject = {
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    result: matchDetails.result,
    matchStatus: matchDetails.match_status,
  }

  const {competingTeam, competingTeamLogo, result, matchStatus} = modifiedObject
  const stausText = matchStatus === 'Lost' ? 'red-text' : 'green-text'
  return (
    <li className="match-list1">
      <img
        className="rcb-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="rcb-text">{competingTeam}</p>
      <p className="rcb-result">{result}</p>
      <p className={`${stausText}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
