import { useState, useEffect } from "react";
import LeagueStandings from "./LeagueStandings";


const LeagueSelector = ({leaguelist, onLeagueSelected}) => {

  const [leagues, setLeague] = useState([]);


  const handleChange = event => {const { value } = event.target; setLeague(value) }

return (
    <select 
     defaultValue="" onChange={handleChange}>
      <option value="" disabled>Choose a league</option>
      {leaguelist.map(league => {
        return (
          <option key={league.id} value={league.id}>{league.name}</option>
        )
      })}
    </select>
)
}


export default LeagueSelector;
