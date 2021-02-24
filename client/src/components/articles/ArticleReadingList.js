import ArticleReading from './ArticleReading.js';
import { Container, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';


const ArticleReadingList = ({articles}) => {

	

	if (articles.length === 0){
	  return (<p>Loading...</p>)
	}

	const articlesNodes = articles.map((article, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <ArticleReading article={article} />
	    </div>
	    </li>
	  )
	})

	return (
		<Container>
			{/* <h2>Click headline to read article</h2> */}

			<ul className="component-list">
				{articlesNodes}
			</ul>
			<Paper elevation={3}>
                <Pagination count={10} />
                </Paper>
		</Container>
	)
}
 export default ArticleReadingList;