import Author from './Author.js';


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
	  <ul className="component-list">
	    {authorsNodes}
	  </ul>
	)
}
 export default AuthorList;