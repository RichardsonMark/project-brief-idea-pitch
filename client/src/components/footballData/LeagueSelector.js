import { useState, useEffect } from "react";
import LeagueStandings from "./LeagueStandings";


const LeagueSelector = ({leaguelist, onLeagueSelected}) => {


  const handleChange = event => {
    onLeagueSelected(event.target.value)
  }

return (
    <select defaultValue="" onChange={handleChange}>
      <option value="" disabled>Choose a league</option>
      {leaguelist.map(leaguelist => {
        return (
          <option key={leaguelist.id} value={leaguelist.id}>{leaguelist.name}</option>
        )
      })}
    </select>
)
}


export default LeagueSelector;
