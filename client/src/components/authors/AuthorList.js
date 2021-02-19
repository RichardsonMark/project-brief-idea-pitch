import Author from './Author.js';
import { Container } from '@material-ui/core';


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
		<Container>
			<h2>Click on author name to edit</h2>

			<ul className="component-list">
				{authorsNodes}
			</ul>
		</Container>
	)
}
 export default AuthorList;