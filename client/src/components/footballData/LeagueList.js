import { useState, useEffect } from "react";
import LeagueSelector from "./LeagueSelector"
import LeagueStandings from "./LeagueStandings"



const LeagueList = () => {


    const [leaguelist, setLeagueList] = useState([]);
    const [SelectedLeagueId, setSelectedLeagueId] = useState('')
  
    const getLeagueList = () => {
      fetch("http://localhost:8080/api/leagues")
      .then((res) => {
        return res.json()
    })
    .then((data) => {
        setLeagueList(data);
        console.log(data);
    })
  };
  
  useEffect(() => {
  getLeagueList();
  }, [])
  console.log(leaguelist);
  ;
  
  
  
  const handleLeagueSelected = id => {
  setSelectedLeagueId(id)
  }
  
  const selectedLeague = leaguelist.find(league => league.id === SelectedLeagueId)
  
  if (!leaguelist) {
  return <h1>No leagues!</h1>
  }
  return (
  <>
    <div className="leaguechoice">
        <h4>Choose a league from the list to see the league table</h4>
        <LeagueSelector leaguelist={leaguelist} onLeagueSelected={handleLeagueSelected} />
        <div>
        {/* <LeagueInfo leagueinfo={selectedLeague}  /> */}
        </div>
    </div>
    <div className="standing">
        <LeagueStandings league={selectedLeague} onLeagueSelected={handleLeagueSelected} />
    </div>
  </>
  )

}

export default LeagueList;