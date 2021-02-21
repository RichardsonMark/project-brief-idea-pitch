import { useState, useEffect } from "react";
import Fixture from './Fixture.js';
import { Container } from '@material-ui/core';



const FixtureList = () => {

    const [fixtures, setFixtures] = useState([]);  
  
    const getFixtures = () => {
      fetch("http://localhost:8080/api/fixtures")
      .then((res) => {
          return res.json()
      })
      .then((data) => {
          setFixtures(data);
          console.log(data);
      })
  };
  
    useEffect(() => {
        getFixtures();
    }, []);

	if (fixtures.length === 0){
	  return (<p>Loading...</p>)
	}

	const fixturesNodes = fixtures.map((fixture, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Fixture fixture={fixture} />
	    </div>
	    </li>
	  )
	})

	return (
		<Container>
			<ul className="component-list">
				{fixturesNodes}
			</ul>
		</Container>
	)
}
 export default FixtureList;