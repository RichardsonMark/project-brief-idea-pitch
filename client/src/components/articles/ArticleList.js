import Article from './Article.js';
import { Container, Grid, Box } from '@material-ui/core';


const ArticleList = ({articles}) => {

	if (articles.length === 0){
	  return (<p>Loading...</p>)
	}

	const articlesNodes = articles.map((article, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Article article={article} />
	    </div>
	    </li>
	  )
	})

	return (
			<Box display="flex" flexDirection="column" >
			<h2>Click headline to edit article</h2>
			<p className="component-list">{articlesNodes}</p>
			</Box>
	)
}
 export default ArticleList;