import { useState, useEffect } from "react";
import TopScorer from './TopScorer.js';
import { Container } from '@material-ui/core';



const TopScorerList = () => {

    const [scorers, setScorers] = useState([]);  
  
    const getScorers = () => {
      fetch("http://localhost:8080/api/scorers")
      .then((res) => {
          return res.json()
      })
      .then((data) => {
          setScorers(data);
          console.log(data);
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
			<ul className="component-list">
				{scorersNodes}
			</ul>
		</Container>
	)
}
 export default TopScorerList;