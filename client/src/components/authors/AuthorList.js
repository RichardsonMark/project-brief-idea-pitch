import Author from './Author.js';
import { Container, Box, Grid } from '@material-ui/core';


const AuthorList = ({authors}) => {

	if (authors.length === 0){
	  return (<p>Loading...</p>)
	}

	const authorsNodes = authors.map((author, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Author author={author} />
	    </div>
	    </li>
	  )
	})

	return (
		<>
				<h2>Click on author name to edit</h2>
		<Box display="flex" flexDirection="row" >
				{authorsNodes}
		</Box>
		</>
	)
}
 export default AuthorList;