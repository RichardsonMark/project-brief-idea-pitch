import Author from './Author.js';
import { Container, Box, Grid } from '@material-ui/core';


const AuthorList = ({authors}) => {

	if (authors.length === 0){
	  return (<p>Loading...</p>)
	}

	const authorsNodes = authors.map((author, index) => {
	  return (
		<Grid display="flex" flexDirection="row" >
	    <li key={index} className="component-item">
	    <div className="component">
	    <Author author={author} />
	    </div>
	    </li>
		</ Grid>
	  )
	})

	return (
		<Box display="flex" flexDirection="column" >
		<h2>Click on author name to edit</h2>

			<ul className="component-list">
				{authorsNodes}
			</ul>
		</Box>
	)
}
 export default AuthorList;