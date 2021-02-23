import { useState, useEffect } from "react";
import TopScorer from './TopScorer.js';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';



const TopScorerList = () => {

    const [scorers, setScorers] = useState([]);  
  
    const getScorers = () => {
      fetch("http://localhost:8080/api/scorers")
      .then((res) => {
          return res.json()
      })
      .then((data) => {
          setScorers(data);
        //   console.log(data);
      })
  };
  
    useEffect(() => {
        getScorers();
    }, []);

	if (scorers.length === 0){
	  return (<p>Loading...</p>)
	}

	const scorersNodes = scorers.map((scorer, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <TopScorer scorer={scorer} />
	    </div>
	    </li>
	  )
	})

	return (
		<Container>
<Paper elevation={3}>
<TableContainer scorers={scorers}  >

    {/* <h1><img src={scorers[0].league.logo} width="60" height="60" alt="league logo" /> {scorers[0].league.name} top scorer</h1> */}
    <Table >
        <TableHead>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell> </TableCell>
                <TableCell>Goals</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {scorers.map((topScorer) => {
                // console.log(teamStanding);

                return (
                    <TableRow key={topScorer.id}>
                        <TableCell className="clubName">
                            <img src={topScorer.team.crestUrl} width="30" height="30" alt="{teamStanding.team.name} crest" />
                        </TableCell>
                        <TableCell>{topScorer.name}</TableCell>
                        <TableCell>{topScorer.numberOfGoals}</TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    </Table>

</TableContainer>
</Paper>
		</Container>
	)
}
 export default TopScorerList;